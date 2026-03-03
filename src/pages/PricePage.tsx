import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Plus } from "lucide-react";

// ─── TYPES ────────────────────────────────────────────────────────────────────

interface Service {
  id: number;
  name: string;
  price: string;
}

interface Category {
  id: number;
  name: string;
  services: Service[];
}

// ─── Розподіл категорій по вкладках ──────────────────────────────────────────
// category_id з таблиці servicecategories

const TAB_CONFIG = [
  {
    label: "ІН'ЄКЦІЙНІ ПРОЦЕДУРИ",
    categoryIds: [12, 13, 14, 15, 16, 17, 19],
  },
  {
    label: "ЛАЗЕР / SMAS",
    categoryIds: [8, 9, 10, 11, 23, 24],
  },
  {
    label: "RF / ПІГМЕНТАЦІЯ / ІНШЕ",
    categoryIds: [1, 2, 3, 4, 5, 6, 7, 18, 20, 21, 22, 25, 26, 27, 28, 29],
  },
];

// ─── URL до API — заміни на свій домен ───────────────────────────────────────
const API_URL = "https://thebeauty-room.com/priceapi.php";

// ─── ACCORDION ROW ────────────────────────────────────────────────────────────

const CategoryRow = ({ category }: { category: Category }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-3.5 text-left group"
      >
        <span className="text-sm text-foreground group-hover:text-primary transition-colors leading-snug pr-3">
          {category.name}
        </span>
        <Plus
          className={`w-4 h-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="mb-3 rounded-lg overflow-hidden bg-secondary/30">
              {category.services.map((svc) => (
                <div
                  key={svc.id}
                  className="flex items-start justify-between gap-3 py-2 px-3 hover:bg-secondary/60 transition-colors"
                >
                  <span className="text-xs text-muted-foreground leading-snug flex-1">
                    {svc.name}
                  </span>
                  <span className="text-xs font-semibold text-primary whitespace-nowrap">
                    {svc.price}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────

const PricePage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<Category[]>;
      })
      .then((data) => {
        setAllCategories(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError("Не вдалося завантажити дані. " + err.message);
        setLoading(false);
      });
  }, []);

  const tabCategories = allCategories.filter((cat) =>
    TAB_CONFIG[activeTab].categoryIds.includes(cat.id)
  );

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Наші процедури
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              Натисніть на категорію, щоб переглянути ціни
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TAB_CONFIG.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-2xl mx-auto">
            {loading && (
              <div className="text-center py-16 text-muted-foreground text-sm animate-pulse">
                Завантаження...
              </div>
            )}

            {error && (
              <div className="text-center py-16 text-destructive text-sm">
                {error}
              </div>
            )}

            {!loading && !error && (
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="bg-card rounded-2xl border border-border px-6 py-2">
                    {tabCategories.map((cat) => (
                      <CategoryRow key={cat.id} category={cat} />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-4 text-sm">
              Ціни вказані орієнтовно. Точну вартість уточнюйте на консультації.
            </p>
            <Link
              to="/about"
              className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Записатись
            </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default PricePage;
