import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-semibold mb-3">
            Bloom<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-5">
            Your sanctuary of beauty and relaxation. We bring out the best version of you.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Instagram, href: "#" },
              { icon: Facebook, href: "#" },
              { icon: Twitter, href: "#" },
            ].map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Social media"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display text-lg font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/prices", label: "Prices" },
              { to: "/reviews", label: "Reviews" },
              { to: "/about", label: "About Us" },
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
          <h4 className="font-display text-lg font-medium mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin size={15} className="mt-0.5 shrink-0 text-primary" />
              <span>123 Rose Avenue, Suite 4<br />New York, NY 10001</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} className="shrink-0 text-primary" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} className="shrink-0 text-primary" />
              <span>hello@bloomsalon.com</span>
            </li>
          </ul>
        </div>

        {/* Working Hours */}
        <div>
          <h4 className="font-display text-lg font-medium mb-4">Working Hours</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { day: "Mon – Fri", time: "9:00 AM – 8:00 PM" },
              { day: "Saturday", time: "10:00 AM – 6:00 PM" },
              { day: "Sunday", time: "11:00 AM – 5:00 PM" },
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
        © {new Date().getFullYear()} Bloom Beauty Salon. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
