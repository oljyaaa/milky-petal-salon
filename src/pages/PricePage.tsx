import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const categories = [
  {
    name: "Hair Services",
    items: [
      { service: "Women's Haircut", price: "$65+" },
      { service: "Men's Haircut", price: "$40+" },
      { service: "Blowout & Styling", price: "$55+" },
      { service: "Full Color", price: "$120+" },
      { service: "Highlights (Partial)", price: "$150+" },
      { service: "Highlights (Full)", price: "$220+" },
      { service: "Balayage", price: "$250+" },
      { service: "Deep Conditioning Treatment", price: "$45+" },
    ],
  },
  {
    name: "Skin Care",
    items: [
      { service: "Classic Facial", price: "$85" },
      { service: "Deep Cleansing Facial", price: "$110" },
      { service: "Anti-Aging Facial", price: "$130" },
      { service: "Chemical Peel", price: "$150" },
      { service: "Microdermabrasion", price: "$120" },
      { service: "LED Light Therapy", price: "$75" },
    ],
  },
  {
    name: "Nail Services",
    items: [
      { service: "Classic Manicure", price: "$35" },
      { service: "Gel Manicure", price: "$50" },
      { service: "Classic Pedicure", price: "$45" },
      { service: "Gel Pedicure", price: "$60" },
      { service: "Nail Art (per nail)", price: "$5+" },
      { service: "Acrylic Full Set", price: "$75+" },
    ],
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

const PricePage = () => (
  <Layout>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Our Prices</h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Transparent pricing for all our premium services.
          </p>
        </motion.div>

        <div className="space-y-14">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              custom={ci}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <h2 className="font-display text-2xl font-medium mb-6 text-center md:text-left">
                {cat.name}
              </h2>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                {cat.items.map((item, idx) => (
                  <div
                    key={item.service}
                    className={`flex justify-between items-center px-6 py-4 ${
                      idx !== cat.items.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-sm font-medium">{item.service}</span>
                    <span className="text-sm text-primary font-semibold">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default PricePage;
