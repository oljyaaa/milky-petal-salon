import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-secondary border-t border-border">
    <div className="container mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-semibold mb-3">
            Bloom<span className="text-primary">.</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Your sanctuary of beauty and relaxation. We bring out the best version of you.
          </p>
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
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>123 Rose Avenue, Suite 4</li>
            <li>New York, NY 10001</li>
            <li className="pt-1">+1 (555) 123-4567</li>
            <li>hello@bloomsalon.com</li>
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
