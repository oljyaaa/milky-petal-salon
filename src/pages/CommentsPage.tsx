import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Layout from "@/components/Layout";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Absolutely loved my experience at Bloom! The atmosphere is so calming and my stylist was incredibly talented. My balayage turned out exactly as I envisioned.",
    date: "January 2026",
  },
  {
    name: "Emily R.",
    rating: 5,
    text: "Best facial I've ever had. My skin has never looked so radiant. The staff is so warm and welcoming — I felt pampered from the moment I walked in.",
    date: "December 2025",
  },
  {
    name: "Jessica L.",
    rating: 5,
    text: "I've been coming here for my nails for over a year now and the quality is always consistent. The gel manicure lasts me a full three weeks every time!",
    date: "February 2026",
  },
  {
    name: "Amanda K.",
    rating: 4,
    text: "Beautiful salon with a lovely ambiance. My haircut was great and the deep conditioning treatment made my hair feel like silk. Will definitely return!",
    date: "November 2025",
  },
  {
    name: "Olivia P.",
    rating: 5,
    text: "The anti-aging facial was worth every penny. I could see a visible difference after just one session. The esthetician was so knowledgeable and gentle.",
    date: "January 2026",
  },
  {
    name: "Rachel T.",
    rating: 5,
    text: "Bloom is my happy place! From the rose-scented towels to the attention to detail, everything is perfect. I wouldn't trust my hair with anyone else.",
    date: "February 2026",
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

const CommentsPage = () => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-2xl border border-border p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    size={16}
                    className={si < review.rating ? "fill-gold text-gold" : "text-border"}
                  />
                ))}
              </div>
              <p className="text-sm leading-relaxed text-foreground flex-1 mb-4">"{review.text}"</p>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{review.name}</span>
                <span className="text-xs text-muted-foreground">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CommentsPage;
