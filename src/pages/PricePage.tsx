import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";

const categories = [
  {
    name: "Hair Services",
    items: [
      { service: "Women's Haircut", desc: "Precision cut tailored to your face shape and lifestyle", price: "$65+" },
      { service: "Men's Haircut", desc: "Classic or modern styles with hot towel finish", price: "$40+" },
      { service: "Blowout & Styling", desc: "Bouncy, voluminous blowout for any occasion", price: "$55+" },
      { service: "Full Color", desc: "Root-to-tip single process color application", price: "$120+" },
      { service: "Highlights (Partial)", desc: "Face-framing highlights for dimension", price: "$150+" },
      { service: "Highlights (Full)", desc: "All-over foil highlights for a luminous look", price: "$220+" },
      { service: "Balayage", desc: "Hand-painted, sun-kissed color technique", price: "$250+" },
      { service: "Deep Conditioning", desc: "Intensive moisture repair treatment", price: "$45+" },
    ],
  },
  {
    name: "Nail Services",
    items: [
      { service: "Classic Manicure", desc: "Nail shaping, cuticle care, and polish", price: "$35" },
      { service: "Gel Manicure", desc: "Long-lasting gel polish with chip-free shine", price: "$50" },
      { service: "Classic Pedicure", desc: "Relaxing foot soak, scrub, and polish", price: "$45" },
      { service: "Gel Pedicure", desc: "Gel polish pedicure with callus treatment", price: "$60" },
      { service: "Nail Art (per nail)", desc: "Custom designs from minimalist to ornate", price: "$5+" },
      { service: "Acrylic Full Set", desc: "Full set of sculpted acrylic nails", price: "$75+" },
    ],
  },
  {
    name: "Facial Treatments",
    items: [
      { service: "Classic Facial", desc: "Deep cleansing with hydrating mask", price: "$85" },
      { service: "Deep Cleansing Facial", desc: "Extraction-focused treatment for clear skin", price: "$110" },
      { service: "Anti-Aging Facial", desc: "Firming treatment with collagen boost", price: "$130" },
      { service: "Chemical Peel", desc: "Exfoliating peel for renewed skin texture", price: "$150" },
      { service: "Microdermabrasion", desc: "Crystal-free skin resurfacing treatment", price: "$120" },
      { service: "LED Light Therapy", desc: "Non-invasive light therapy for skin rejuvenation", price: "$75" },
    ],
  },
  {
    name: "Makeup Services",
    items: [
      { service: "Everyday Makeup", desc: "Natural, polished look for daily wear", price: "$60" },
      { service: "Evening Glam", desc: "Full glam makeup for special occasions", price: "$90" },
      { service: "Bridal Makeup", desc: "Long-lasting bridal look with trial included", price: "$200" },
      { service: "Makeup Lesson", desc: "One-on-one tutorial with professional tips", price: "$120" },
    ],
  },
];

const PricePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Layout>
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Our Prices</h1>
            <p className="text-muted-foreground max-w-md mx-auto">
              Transparent pricing for all our premium beauty services.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat, i) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(i)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeTab === i
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Price List */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                {categories[activeTab].items.map((item, idx) => (
                  <div
                    key={item.service}
                    className={`flex flex-col sm:flex-row sm:items-center justify-between px-6 py-5 gap-2 ${
                      idx !== categories[activeTab].items.length - 1 ? "border-b border-border" : ""
                    } hover:bg-secondary/50 transition-colors`}
                  >
                    <div className="flex-1">
                      <span className="text-sm font-medium block">{item.service}</span>
                      <span className="text-xs text-muted-foreground">{item.desc}</span>
                    </div>
                    <span className="text-sm text-primary font-semibold whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* CTA */}
          <div className="text-center mt-14">
            <p className="text-muted-foreground mb-4 text-sm">Prices may vary based on hair length and complexity.</p>
            <Link
              to="/about"
              className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Book Your Appointment
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PricePage;
