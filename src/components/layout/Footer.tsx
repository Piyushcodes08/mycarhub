import { Link } from 'react-router-dom';
import { Car, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';

const footerLinks = {
  'Buy Cars': ['Certified Cars', 'Luxury Cars', 'SUVs', 'Sedans', 'Electric Cars'],
  'Sell Cars': ['Get Valuation', 'Sell to MyCarHub', 'Sell Privately', 'Trade-In'],
  Company: ['About Us', 'Careers', 'Press', 'Contact Us', 'Blog'],
  Support: ['Help Center', 'Warranty Policy', 'Return Policy', 'Privacy Policy', 'Terms'],
};

export const Footer = () => (
  <footer className="border-t border-border pt-16 pb-8 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <Car className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              My<span className="text-primary">Car</span>Hub
            </span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            India's most trusted premium pre-owned car marketplace. Certified quality, transparent pricing.
          </p>
          <div className="flex gap-3">
            {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="font-display font-bold text-foreground text-sm mb-4">{title}</h4>
            <ul className="space-y-2.5">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="neon-line mb-6" />

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} MyCarHub. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Made with ❤️ in India
        </p>
      </div>
    </div>
  </footer>
);
