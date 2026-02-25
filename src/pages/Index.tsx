import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Scissors, Heart, Palette, Award, Users, Shield, Star } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-salon.jpg";

const services = [
  { icon: Scissors, title: "Hair Styling", desc: "From cuts to color, our stylists create your perfect look." },
  { icon: Sparkles, title: "Skin Care", desc: "Facials and treatments for radiant, healthy skin." },
  { icon: Heart, title: "Nail Art", desc: "Express yourself with our premium nail services." },
  { icon: Palette, title: "Makeup", desc: "Professional makeup for any occasion, from bridal to editorial." },
];

const whyUs = [
  { icon: Award, title: "Award-Winning Team", desc: "Our stylists have been recognized across the industry for excellence." },
  { icon: Users, title: "Personalized Experience", desc: "Every treatment is tailored to your unique needs and preferences." },
  { icon: Shield, title: "Premium Products", desc: "We use only the finest, sustainably sourced beauty products." },
  { icon: Sparkles, title: "Relaxing Atmosphere", desc: "A serene environment designed to help you unwind and recharge." },
];

const testimonials = [
  { name: "Sarah M.", rating: 5, text: "Absolutely loved my experience at Bloom! My balayage turned out exactly as I envisioned." },
  { name: "Emily R.", rating: 5, text: "Best facial I've ever had. My skin has never looked so radiant." },
  { name: "Jessica L.", rating: 5, text: "I've been coming here for over a year and the quality is always consistent!" },
];

const instagramImages = [
  "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop",
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=400&fit=crop",
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: "easeOut" as const },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Bloom Beauty Salon interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 md:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Welcome to Bloom</p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight mb-6">
              Enhance Your <br />
              <span className="text-gradient-gold">Natural Beauty</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Indulge in luxury treatments tailored to reveal your natural radiance. Your journey to self-care starts here.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/prices"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Book Now
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About intro */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Welcome to <span className="text-gradient-gold">Bloom</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded with a passion for beauty, Bloom is more than a salon — it's a retreat. Our team of
                certified professionals combines artistry with the finest products to deliver results that
                make you feel confident and beautiful, inside and out.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
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

      {/* Why Choose Us */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
          >
            Why Choose Us
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 md:py-28 bg-secondary/50">
        <div className="container mx-auto px-4 md:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
          >
            What Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star key={si} size={14} className={si < t.rating ? "fill-gold text-gold" : "text-border"} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground mb-4">"{t.text}"</p>
                <span className="text-sm font-medium">{t.name}</span>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/reviews"
              className="inline-block px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:bg-card transition-colors"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3">Follow Us on Instagram</h2>
            <p className="text-muted-foreground text-sm">@bloombeautysalon</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramImages.map((src, i) => (
              <motion.a
                key={i}
                href="#"
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="aspect-square rounded-xl overflow-hidden group"
              >
                <img
                  src={src}
                  alt={`Instagram post ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Ready to Glow?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Book your appointment today and discover your most beautiful self.
          </p>
          <Link
            to="/prices"
            className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
