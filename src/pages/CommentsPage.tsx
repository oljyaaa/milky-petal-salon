import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

// ─── URL до API ───────────────────────────────────────────────
const API_URL = "https://thebeauty-room.com/commentsapi.php";

// ─── TYPES ───────────────────────────────────────────────────
interface Comment {
  id: number;
  name: string;
  service: string;
  description: string;
  created_at: string;
}

// ─── Форматування дати ────────────────────────────────────────
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("uk-UA", { month: "long", year: "numeric" });
};

// ─── Генерація кольору аватара по імені ──────────────────────
const getAvatarColor = (name: string): string => {
  const colors = [
    "bg-pink-200 text-pink-700",
    "bg-purple-200 text-purple-700",
    "bg-rose-200 text-rose-700",
    "bg-amber-200 text-amber-700",
    "bg-teal-200 text-teal-700",
  ];
  const idx = name.charCodeAt(0) % colors.length;
  return colors[idx];
};

// ─── Анімація ────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

// ─── PAGE ─────────────────────────────────────────────────────
const CommentsPage = () => {
  const { toast } = useToast();

  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
    rating: 5,
  });

  // ── Завантажити коментарі ──────────────────────────────────
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data: Comment[]) => {
        setComments(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  // ── Відправити коментар ────────────────────────────────────
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      toast({ title: "Заповніть всі обов'язкові поля", variant: "destructive" });
      return;
    }

    setSubmitting(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:        formData.name,
          email:       formData.email,
          service:     formData.service,
          description: formData.description,
        }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Помилка сервера");
      }

      toast({
        title: "Дякуємо!",
        description: "Ваш відгук відправлено на модерацію.",
      });
      setFormData({ name: "", email: "", service: "", description: "", rating: 5 });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Спробуйте пізніше";
      toast({ title: "Помилка", description: message, variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">
              Відгуки наших клієнтів
            </h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Реальні враження від наших клієнтів.
            </p>
          </motion.div>

          {/* Comments grid */}
          {loading ? (
            <div className="text-center py-16 text-muted-foreground text-sm animate-pulse">
              Завантаження відгуків...
            </div>
          ) : comments.length === 0 ? (
            <div className="text-center py-16 text-muted-foreground text-sm">
              Поки немає відгуків. Будьте першим!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {comments.map((comment, i) => (
                <motion.div
                  key={comment.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card rounded-2xl border border-border p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Avatar + name */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 ${getAvatarColor(comment.name)}`}
                    >
                      {comment.name.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <span className="text-sm font-medium block">{comment.name}</span>
                      <span className="text-xs text-muted-foreground">
                        {comment.service
                          ? `${comment.service} · ${formatDate(comment.created_at)}`
                          : formatDate(comment.created_at)}
                      </span>
                    </div>
                  </div>

                  {/* Stars (завжди 5) */}
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star key={si} size={14} className="fill-gold text-gold" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-sm leading-relaxed text-foreground flex-1">
                    "{comment.description}"
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-8">
              Залишити відгук
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Ваше ім'я <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Введіть ваше ім'я"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Email <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Послуга
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  placeholder="Наприклад: ELOS-епіляція"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>

              {/* Rating */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Оцінка</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="p-0.5"
                    >
                      <Star
                        size={22}
                        className={`transition-colors ${
                          star <= formData.rating
                            ? "fill-gold text-gold"
                            : "text-border hover:text-gold/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Comment */}
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Ваш відгук <span className="text-destructive">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Поділіться враженнями..."
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
              >
                <Send size={16} />
                {submitting ? "Відправляємо..." : "Відправити відгук"}
              </button>

              <p className="text-xs text-muted-foreground text-center">
                Відгук з'явиться після модерації
              </p>
            </form>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default CommentsPage;
