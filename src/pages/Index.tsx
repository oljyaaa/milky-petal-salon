import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Scissors, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-salon.jpg";

const services = [
  { icon: Scissors, title: "Hair Styling", desc: "From cuts to color, our stylists create your perfect look." },
  { icon: Sparkles, title: "Skin Care", desc: "Facials and treatments for radiant, healthy skin." },
  { icon: Heart, title: "Nail Art", desc: "Express yourself with our premium nail services." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Bloom Beauty Salon interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight mb-6">
              Where Beauty <br />
              <span className="text-gradient-gold">Blossoms</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Indulge in luxury treatments tailored to reveal your natural radiance. Your journey to self-care starts here.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/prices"
                className="px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
              >
                View Prices
              </Link>
              <Link
                to="/about"
                className="px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl font-medium mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Ready to Glow?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Book your appointment today and discover your most beautiful self.
          </p>
          <Link
            to="/prices"
            className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
