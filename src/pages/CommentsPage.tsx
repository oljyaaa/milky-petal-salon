import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { useToast } from "@/hooks/use-toast";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely loved my experience at Bloom! The atmosphere is so calming and my stylist was incredibly talented. My balayage turned out exactly as I envisioned.",
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Best facial I've ever had. My skin has never looked so radiant. The staff is so warm and welcoming — I felt pampered from the moment I walked in.",
    date: "December 2025",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "I've been coming here for my nails for over a year now and the quality is always consistent. The gel manicure lasts me a full three weeks every time!",
    date: "February 2026",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Amanda K.",
    rating: 4,
    text: "Beautiful salon with a lovely ambiance. My haircut was great and the deep conditioning treatment made my hair feel like silk. Will definitely return!",
    date: "November 2025",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Olivia P.",
    rating: 5,
    text: "The anti-aging facial was worth every penny. I could see a visible difference after just one session. The esthetician was so knowledgeable and gentle.",
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Rachel T.",
    rating: 5,
    text: "Bloom is my happy place! From the rose-scented towels to the attention to detail, everything is perfect. I wouldn't trust my hair with anyone else.",
    date: "February 2026",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const CommentsPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", comment: "", rating: 5 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.comment.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Thank you!", description: "Your review has been submitted." });
    setFormData({ name: "", comment: "", rating: 5 });
  };

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">What Our Clients Say</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Real experiences from our wonderful community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {reviews.map((review, i) => (
              <motion.div
                key={review.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border p-6 flex flex-col hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-11 h-11 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <span className="text-sm font-medium block">{review.name}</span>
                    <span className="text-xs text-muted-foreground">{review.date}</span>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={14}
                      className={si < review.rating ? "fill-gold text-gold" : "text-border"}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground flex-1">"{review.text}"</p>
              </motion.div>
            ))}
          </div>

          {/* Review Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-center mb-8">Leave a Review</h2>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl border border-border p-6 md:p-8 space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Rating</label>
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
                          star <= formData.rating ? "fill-gold text-gold" : "text-border hover:text-gold/50"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Your Comment</label>
                <textarea
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  placeholder="Share your experience..."
                  rows={4}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-shadow resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <Send size={16} />
                Submit Review
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CommentsPage;
