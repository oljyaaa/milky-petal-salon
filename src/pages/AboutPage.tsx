import { motion } from "framer-motion";
import { Heart, Award, Gem, MapPin, Phone, Mail } from "lucide-react";
import Layout from "@/components/Layout";
import aboutImage from "@/assets/about-salon.jpg";

import photoOlga from "@/assets/photo/1.jpg";
import photoAnna from "@/assets/photo/4.jpg";
import photoKateryna from "@/assets/photo/2.jpg";
import photoEvgeniya from "@/assets/photo/3.jpg";
import photoJulia from "@/assets/photo/5.jpg";

const team = [
  { 
    name: "Ольга", 
    role: "Засновниця та косметолог", 
    img: photoOlga, // використовуємо імпортовану змінну без лапок!
    desc: "Закохана у свою справу. Постійно вдосконалюю свої знання, щоб надавати вам послуги найвищого рівня."
  },
  { 
    name: "Анна", 
    role: "Майстер масажу", 
    img: photoAnna, 
    desc: "Створюю ідеальну фігуру та здорову поставу."
  },
  { 
    name: "Катерина", 
    role: "Косметолог та майстер з Elos-епіляції", 
    img: photoKateryna, 
    desc: "Створюю ідеально гладеньку шкіру."
  },
  { 
    name: "Євгенія",
    role: "Косметолог", 
    img: photoEvgeniya, 
    desc: "Дипломований майстер з досвідом."
  },
  { 
    name: "Юлія", 
    role: "Косметолог", 
    img: photoJulia, 
    desc: "Створюю ідеально гладеньку шкіру."
  }
];



const values = [
  { icon: Heart, title: "Турбота", desc: "Ми дбаємо про здоров'я та красу вашої шкіри з любов'ю до кожної деталі." },
  { icon: Award, title: "Професіоналізм", desc: "Постійне навчання та використання найсучасніших протоколів догляду та лікування." },
  { icon: Gem, title: "Безкомпромісна якість", desc: "Працюємо виключно з сертифікованими препаратами та косметикою преміум-сегменту." },
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
          <h1 className="text-4xl md:text-5xl font-display font-semibold mb-4">Про нас</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Історія Beauty Room — місце, де професіоналізм зустрічається з природною красою.
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
              alt="Інтер'єр кабінету Beauty Room"
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
            <div className="space-y-4">
              <h2 className="font-display text-2xl md:text-3xl font-medium">
                Простір вашої <span className="text-gradient-gold">впевненості</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Beauty Room був створений з єдиною метою — подарувати кожному клієнту простір, де 
                можна не лише покращити стан шкіри, а й по-справжньому відпочити. Ми поєднуємо 
                передові методики естетичної медицини з атмосферою абсолютного комфорту.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Кожна деталь нашого кабінету продумана для вашої безпеки та задоволення. 
                Ми використовуємо лише перевірені, сертифіковані препарати та суворо дотримуємося 
                всіх санітарних норм, щоб ви могли повністю довірити нам свою красу.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {[
                { num: "5+", label: "Років досвіду" },
                { num: "1000+", label: "Щасливих клієнтів" },
                { num: "100%", label: "Стерильність" },
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
          Наші цінності
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
              className="text-center p-6 bg-background rounded-2xl border border-border shadow-sm"
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
    {/* Team */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-semibold text-center mb-14"
        >
          Ваші спеціалісти
        </motion.h2>
        
        {/* Використовуємо сітку (grid), щоб розставити майстрів у ряд */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 justify-items-center">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center group w-full max-w-[280px]"
            >
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <h3 className="font-display text-2xl font-medium mb-1">{member.name}</h3>
              <p className="text-base text-primary mb-3">{member.role}</p>
              
              {/* Тепер опис підтягується з вашого масиву team (desc) */}
              <p className="text-sm text-muted-foreground px-2">
                {member.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="py-16 bg-secondary/50 border-y border-border">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-2xl font-display font-semibold mb-8">Сертифікати та досягнення</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Медична освіта", 
              "Сертифікований фахівець з ін'єкцій", 
              "Експерт з апаратної косметології", 
              "Учасник міжнародних конгресів"
            ].map((cert) => (
              <span key={cert} className="px-5 py-2.5 rounded-full bg-background border border-border text-sm font-medium text-foreground shadow-sm">
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
          Чекаємо на вас
        </motion.h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 flex flex-col justify-center"
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-5">
              <h3 className="font-display text-xl font-medium border-b border-border pb-3">Контактна інформація</h3>
              
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/xwGmQeh1iDPxacmS7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors leading-relaxed"
                >
                  м. Бердичів<br />вул. Європейська, 71
                </a>
              </div>
              
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+380986411412" className="hover:text-primary transition-colors">
                  +38 (098) 641-14-12
                </a>
              </div>
              
              {/* <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:beautyroom@example.com" className="hover:text-primary transition-colors">
                  beautyroom@example.com
                </a>
              </div> */}
            </div>

            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm space-y-4">
              <h3 className="font-display text-xl font-medium border-b border-border pb-3">Графік роботи</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Понеділок – П'ятниця</span>
                  <span>9:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Субота</span>
                  <span>10:00 – 14:00</span>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Неділя</span>
                  <span>За домовленістю</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-border h-[400px] lg:h-auto shadow-sm"
          >
            {/* Реальна карта Бердичева замість заглушки */}
            <iframe
              title="Beauty Room location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d915.9649652842539!2d28.60056005984936!3d49.89127618726049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472cfbb6734c5699%3A0xcfa995011d77c643!2sBeauty%20Room!5e0!3m2!1suk!2sua!4v1772015227058!5m2!1suk!2sua"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
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