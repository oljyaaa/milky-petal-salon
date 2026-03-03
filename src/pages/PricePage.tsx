import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Plus, ChevronDown } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

interface Service { id: number; name: string; price: string; priceNumeric: number; }
interface Category { id: number; name: string; services: Service[]; }

const TAB_CONFIG = [
  { label: "ІН'ЄКЦІЙНІ ПРОЦЕДУРИ", categoryIds: [12,13,14,15,16,17,19] },
  { label: "ЛАЗЕР / SMAS",         categoryIds: [8,9,10,11,23,24] },
  { label: "RF / ПІГМЕНТАЦІЯ / ІНШЕ", categoryIds: [1,2,3,4,5,6,7,18,20,21,22,25,26,27,28,29] },
];

const API_URL = "https://thebeauty-room.com/priceapi.php";

const CategoryRow = ({ category }: { category: Category }) => {
  const [open, setOpen] = useState(false);
  const { addItem, openCart } = useCart();
  const { toast } = useToast();

  const handleAdd = (svc: Service, e: React.MouseEvent) => {
    e.stopPropagation();
    addItem({ serviceId: svc.id, cat: category.name, name: svc.name, price: svc.priceNumeric, priceLabel: svc.price });
    toast({ title: "Додано до кошика", description: svc.name });
    openCart();
  };

  return (
    <div className="border-b border-border last:border-b-0">
      <button onClick={() => setOpen(o => !o)} className="w-full flex items-center justify-between py-3.5 text-left group">
        <span className="text-sm text-foreground group-hover:text-primary transition-colors leading-snug pr-3">{category.name}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }} className="overflow-hidden">
            <div className="mb-3 rounded-lg overflow-hidden bg-secondary/30 divide-y divide-border/50">
              {category.services.map(svc => (
                <div key={svc.id} className="flex items-center justify-between gap-2 py-2.5 px-3 hover:bg-secondary/60 transition-colors">
                  <span className="text-xs text-muted-foreground leading-snug flex-1 min-w-0 pr-1">{svc.name}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-semibold text-primary whitespace-nowrap">{svc.price}</span>
                    <button
                      onClick={(e) => handleAdd(svc, e)}
                      title="Додати до кошика"
                      className="w-6 h-6 rounded-full bg-primary/15 hover:bg-primary hover:text-primary-foreground text-primary flex items-center justify-center transition-all duration-200 hover:scale-110 shrink-0"
                    >
                      <Plus size={13} strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.json(); })
      .then((data: Array<{ id: number; name: string; services: Array<{ id: number; name: string; price: string }> }>) => {
        setAllCategories(data.map(cat => ({
          ...cat,
          services: cat.services.map(svc => {
            const match = svc.price.replace(/\s/g, "").match(/^(\d+)/);
            return { ...svc, priceNumeric: match ? parseInt(match[1], 10) : 0 };
          }),
        })));
        setLoading(false);
      })
      .catch((err: Error) => { setError("Не вдалося завантажити дані. " + err.message); setLoading(false); });
  }, []);

  const tabCategories = allCategories.filter(cat => TAB_CONFIG[activeTab].categoryIds.includes(cat.id));

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Наші процедури</h1>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Натисніть <span className="text-primary font-medium">+</span> біля послуги, щоб додати її до кошика
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TAB_CONFIG.map((tab, i) => (
              <button key={tab.label} onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === i ? "bg-primary text-primary-foreground shadow-md" : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"}`}>
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto">
            {loading && <div className="text-center py-16 text-muted-foreground text-sm animate-pulse">Завантаження...</div>}
            {error && <div className="text-center py-16 text-destructive text-sm">{error}</div>}
            {!loading && !error && (
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -15 }} transition={{ duration: 0.25 }}>
                  <div className="bg-card rounded-2xl border border-border px-6 py-2">
                    {tabCategories.map(cat => <CategoryRow key={cat.id} category={cat} />)}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-4 text-sm">Ціни вказані орієнтовно. Точну вартість уточнюйте на консультації.</p>
            <Link to="/about" className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300">Записатись</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricePage;