import { motion } from 'framer-motion';
import { ArrowLeftRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CompareSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="rounded-3xl overflow-hidden relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10" />
        <div className="absolute inset-0 glass" />

        <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-6">
                <ArrowLeftRight className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Can't Decide?
                <br />
                <span className="text-gradient">Compare Side by Side.</span>
              </h2>
              <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
                Put any two cars head-to-head. Compare specs, pricing, mileage, features, 
                and ownership costs to make the smartest decision.
              </p>
              <Link
                to="/listings"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors mt-8"
              >
                Compare Now <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Performance', a: '188 BHP', b: '255 BHP' },
                { label: 'Mileage', a: '14.1 km/l', b: '12.3 km/l' },
                { label: 'Boot Space', a: '460 L', b: '480 L' },
                { label: 'Safety Rating', a: '5 ★', b: '5 ★' },
              ].map((row) => (
                <div key={row.label} className="glass rounded-xl p-4 text-center">
                  <p className="text-xs text-muted-foreground mb-2">{row.label}</p>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-sm font-semibold text-primary">{row.a}</span>
                    <span className="text-xs text-muted-foreground">vs</span>
                    <span className="text-sm font-semibold text-accent">{row.b}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
);
