import { motion } from 'framer-motion';
import { Sparkles, PhoneCall, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const popularSearches = [
  'SUV under 20 Lakh',
  'Automatic Cars',
  'Electric Vehicles',
  'Low KM BMW',
  'Family Cars',
  'Luxury Sedans',
];

const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata', 'Ahmedabad'];

export const PopularSearchesSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Popular Searches */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Popular Searches</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <Link
                key={term}
                to="/listings"
                className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors border border-border"
              >
                {term}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Cities */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground">Available In</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {cities.map((city) => (
              <Link
                key={city}
                to="/listings"
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors group"
              >
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {city}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass rounded-2xl p-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <PhoneCall className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-display font-bold text-foreground">Need Help? Talk to an Expert</p>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <Clock className="w-3 h-3" /> Available Mon–Sat, 9 AM – 8 PM
            </p>
          </div>
        </div>
        <a
          href="tel:+919876543210"
          className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
        >
          +91 98765 43210
        </a>
      </motion.div>
    </div>
  </section>
);
