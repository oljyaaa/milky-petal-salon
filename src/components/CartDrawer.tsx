import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Trash2, ShoppingBag, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useToast } from "@/hooks/use-toast";

const MASTERS = ["Будь-який майстер", "Ольга", "Анна", "Каатерина", "Євгенія", "Юлія"];
const API_URL = "https://thebeauty-room.com/appointmentapi.php";

const CartDrawer = () => {
  const { items, removeItem, clearCart, isOpen, closeCart } = useCart();
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "", master: "" });

  const totalPrice = items.reduce((sum, i) => sum + i.price, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      toast({ title: "Заповніть ім'я та телефон", variant: "destructive" });
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name, phone: form.phone,
          email: form.email, message: form.message,
          master: form.master !== "Будь-який майстер" ? form.master : "",
          cart: items.map(i => ({ cat: i.cat, name: i.name, price: i.price })),
        }),
      });
      if (!res.ok) throw new Error("Помилка сервера");
      toast({ title: "Записано!", description: "Ми зв'яжемося з вами найближчим часом." });
      clearCart();
      closeCart();
      setForm({ name: "", phone: "", email: "", message: "", master: "" });
    } catch {
      toast({ title: "Помилка", description: "Спробуйте пізніше", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm"
            onClick={closeCart}
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-primary" />
                <span className="font-medium text-sm">Кошик</span>
                {items.length > 0 && (
                  <span className="bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {items.length}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="p-1 hover:text-primary transition-colors">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-48 text-muted-foreground text-sm gap-3">
                  <ShoppingBag size={36} className="opacity-30" />
                  <p>Кошик порожній</p>
                  <p className="text-xs">Додайте послуги на сторінці цін</p>
                </div>
              ) : (
                <>
                  {/* Items */}
                  <div className="px-6 py-4 space-y-3">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-start justify-between gap-3 bg-secondary/40 rounded-xl px-4 py-3">
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium truncate">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.cat}</p>
                          <p className="text-xs font-semibold text-primary mt-1">{item.priceLabel}</p>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-destructive transition-colors mt-0.5">
                          <Trash2 size={14} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Total */}
                  {totalPrice > 0 && (
                    <div className="px-6 pb-4 flex justify-between text-sm font-medium border-t border-border pt-3">
                      <span>Орієнтовна сума:</span>
                      <span className="text-primary">{totalPrice} грн</span>
                    </div>
                  )}

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="px-6 pb-6 space-y-4 border-t border-border pt-4">
                    <p className="text-sm font-medium">Дані для запису</p>

                    <input
                      type="text" placeholder="Ваше ім'я *"
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <input
                      type="tel" placeholder="Телефон *"
                      value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />
                    <input
                      type="email" placeholder="Email"
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                    />

                    {/* Master select */}
                    <select
                      value={form.master} onChange={e => setForm({ ...form, master: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 text-muted-foreground"
                    >
                      {MASTERS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>

                    <textarea
                      placeholder="Повідомлення (необов'язково)"
                      value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                    />

                    <button
                      type="submit" disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg transition-all disabled:opacity-60"
                    >
                      <Send size={15} />
                      {submitting ? "Відправляємо..." : "Записатись"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;