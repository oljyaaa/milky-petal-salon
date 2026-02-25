import { Link } from "react-router-dom";
import { Instagram, MapPin, Phone, Mail, Clock, Send, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-semibold mb-3">
            Beauty Room<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-5">
            Ваш простір краси та релаксу. Професійна косметологія та турбота про здоров'я вашої шкіри.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com/dr.cosmetolog_olga_svetla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={16} />
            </a>
            <a
            href="https://www.facebook.com/ol.ga.svetlaa.2025?locale=uk_UA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg font-medium mb-4">Навігація</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Головна" },
              { to: "/prices", label: "Ціни" },
              { to: "/reviews", label: "Відгуки" },
              { to: "/about", label: "Про нас" },
            ].map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-medium mb-4">Контакти</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
  <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
  <a 
    href="https://maps.app.goo.gl/xwGmQeh1iDPxacmS7" 
    target="_blank" 
    rel="noopener noreferrer"
    className="hover:text-primary transition-colors text-left"
  >
    м. Бердичів<br />вул. Європейська, 71
  </a>
</li>
            <li className="flex items-center gap-2">
            <Phone size={15} className="shrink-0 text-primary" />
            <a href="tel:+380986411412" className="hover:text-primary transition-colors">
              (+380) 98-641-14-12
            </a>
            </li>
            {/* <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-primary" />
              <span>beautyroom@example.com</span>
            </li> */}
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-display text-lg font-medium mb-4">Графік роботи</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { day: "Пн – Пт", time: "9:00 – 19:00" },
              { day: "Субота", time: "10:00 – 14:00" },
              { day: "Неділя", time: "За домовленістю" },
            ].map((h) => (
              <li key={h.day} className="flex items-center gap-2">
                <Clock size={14} className="shrink-0 text-primary" />
                <span>
                  <strong className="text-foreground">{h.day}</strong> — {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Beauty Room. Всі права захищені.
      </div>
    </div>
  </footer>
);

export default Footer;