import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Award, Users, Shield, Star, Droplets, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-salon.jpg";

const services = [
  { icon: Droplets, title: "Чистка обличчя", desc: "Професійне очищення для здорового та сяючого вигляду вашої шкіри." },
  { icon: Sparkles, title: "Догляд за шкірою", desc: "Індивідуально підібрані процедури для зволоження та омолодження." },
  { icon: Leaf, title: "Пілінги", desc: "Оновлення текстури шкіри, вирівнювання тону та боротьба з недоліками." },
  { icon: Heart, title: "Ін'єкційна косметологія", desc: "Сучасні методики збереження молодості та краси." },
];

const whyUs = [
  { icon: Award, title: "Медична освіта", desc: "Процедури виконує сертифікований спеціаліст з глибоким розумінням анатомії." },
  { icon: Users, title: "Індивідуальний підхід", desc: "Кожна процедура підбирається виключно під потреби вашої шкіри." },
  { icon: Shield, title: "Преміум препарати", desc: "Використовуємо лише сертифіковану та перевірену косметику світових брендів." },
  { icon: Sparkles, title: "Комфорт та безпека", desc: "Стерильність та розслаблююча атмосфера на кожному сеансі." },
];

const testimonials = [
  { name: "Анна М.", rating: 5, text: "Дуже задоволена результатом! Шкіра після чистки просто сяє, а підібраний домашній догляд творить дива." },
  { name: "Олена Р.", rating: 5, text: "Найкращий косметолог! Завжди уважна, процедури проходять максимально комфортно." },
  { name: "Вікторія Л.", rating: 5, text: "Ходжу в Beauty Room вже більше року. Результат на обличчі — шкіра стала ідеальною." },
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
            alt="Beauty Room interior"
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
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">Ласкаво просимо до Beauty Room</p>
            <h1 className="text-4xl md:text-6xl font-display font-semibold leading-tight mb-6">
              Підкресліть свою <br />
              <span className="text-gradient-gold">Природну Красу</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Професійний догляд за вашою шкірою. Ваш шлях до ідеальної шкіри та впевненості в собі починається тут.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/prices"
                className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Записатись
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 rounded-full border border-border text-foreground font-medium text-sm hover:bg-secondary transition-colors duration-300"
              >
                Дізнатись більше
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
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-6">Про <span className="text-gradient-gold">Beauty Room</span></h2>
              <p className="text-muted-foreground leading-relaxed">
                Beauty Room — це простір, де професійна естетична медицина поєднується з турботою про вас. 
                Ми використовуємо лише перевірені методики та високоякісні препарати, щоб ваша шкіра 
                завжди виглядала здоровою, молодою та доглянутою.
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
            Наші послуги
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
            Чому обирають нас
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
            Відгуки клієнтів
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
              Всі відгуки
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-3">Наш Instagram</h2>
            <a href="https://instagram.com/dr.cosmetolog_olga_svetla" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              @dr.cosmetolog_olga_svetla
            </a>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {instagramImages.map((src, i) => (
              <motion.a
                key={i}
                href="https://instagram.com/dr.cosmetolog_olga_svetla"
                target="_blank"
                rel="noopener noreferrer"
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
          <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Готові сяяти?</h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Забронюйте свій візит сьогодні та подаруйте своїй шкірі найкращий догляд.
          </p>
          <Link
            to="/prices"
            className="inline-block px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Записатись на прийом
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Index;