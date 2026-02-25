import { motion } from "framer-motion";
import { Heart, Award, Gem } from "lucide-react";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-salon.jpg";

const team = [
  { name: "Elena Rossi", role: "Founder & Lead Stylist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
  { name: "Mia Chen", role: "Senior Colorist", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
  { name: "Sophia Laurent", role: "Esthetician", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Ava Williams", role: "Nail Artist", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
];

const values = [
  { icon: Heart, title: "Passion", desc: "We pour love into every detail of your experience." },
  { icon: Award, title: "Excellence", desc: "Continual training ensures we stay at the forefront of beauty." },
  { icon: Gem, title: "Quality", desc: "Only premium, sustainably sourced products touch your skin." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5 },
  }),
};

const AboutPage = () => (
  <Layout>
    {/* Story */}
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

    {/* Mission & Values */}
    <section className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
        >
          Our Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-medium mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center group"
            >
              <div className="w-36 h-36 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-lg font-medium">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-display font-semibold mb-6">Certifications & Awards</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["L'Oréal Certified", "Vogue Best Salon 2024", "Green Beauty Certified", "CIDESCO Diploma"].map((cert) => (
              <span key={cert} className="px-5 py-2.5 rounded-full bg-card border border-border text-sm text-muted-foreground">
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Contact & Map */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
        >
          Find Us
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-card rounded-2xl border border-border p-6 space-y-3">
              <h3 className="font-display text-lg font-medium">Contact Information</h3>
              <p className="text-sm text-muted-foreground">123 Rose Avenue, Suite 4, New York, NY 10001</p>
              <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
              <p className="text-sm text-muted-foreground">hello@bloomsalon.com</p>
            </div>
            <div className="bg-card rounded-2xl border border-border p-6 space-y-3">
              <h3 className="font-display text-lg font-medium">Hours</h3>
              <p className="text-sm text-muted-foreground">Mon – Fri: 9:00 AM – 8:00 PM</p>
              <p className="text-sm text-muted-foreground">Saturday: 10:00 AM – 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: 11:00 AM – 5:00 PM</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border h-[350px]"
          >
            <iframe
              title="Bloom Beauty Salon location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
