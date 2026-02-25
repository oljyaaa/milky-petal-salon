import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-salon.jpg";

const AboutPage = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">About Us</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            The story behind Bloom — where passion meets beauty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={aboutImage}
              alt="Inside Bloom Beauty Salon"
              className="rounded-2xl w-full object-cover aspect-square shadow-lg"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <h2 className="font-display text-2xl md:text-3xl font-medium">
              A Place to Feel <span className="text-gradient-gold">Beautiful</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2018, Bloom was born from a simple belief: everyone deserves a space where
              they feel truly cared for. Our founder, Elena Rossi, envisioned a salon that combines
              the artistry of high-end beauty with the warmth of a welcoming retreat.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every detail — from the hand-picked fresh flowers to our curated product lines — is
              designed to elevate your experience. Our team of certified stylists and estheticians
              bring years of expertise and a genuine passion for making you look and feel your best.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                { num: "7+", label: "Years" },
                { num: "12K+", label: "Clients" },
                { num: "15", label: "Specialists" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-semibold text-primary">{stat.num}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
