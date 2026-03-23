import { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Car } from 'lucide-react';

const brands = ['Maruti', 'Hyundai', 'Honda', 'Toyota', 'BMW', 'Mercedes', 'Audi'];

export const ValuationSlider = () => {
  const [year, setYear] = useState(2020);
  const [km, setKm] = useState(30000);
  const [brand, setBrand] = useState('');

  const basePrice = brand === 'BMW' || brand === 'Mercedes' || brand === 'Audi' ? 3000000 : 800000;
  const yearFactor = 1 - (2024 - year) * 0.08;
  const kmFactor = 1 - km / 300000;
  const estimated = Math.max(100000, Math.round(basePrice * yearFactor * kmFactor));

  const formatPrice = (n: number) =>
    n >= 10000000
      ? `₹${(n / 10000000).toFixed(2)} Cr`
      : `₹${(n / 100000).toFixed(2)} Lakh`;

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Instant Valuation
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What's Your Car <span className="text-gradient">Worth?</span>
          </h2>
        </motion.div>

        <div className="glass rounded-3xl p-8">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">Brand</label>
              <select
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <option value="">Select brand</option>
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                Year: {year}
              </label>
              <input
                type="range"
                min={2010}
                max={2024}
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>2010</span>
                <span>2024</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-2">
                KM Driven: {km.toLocaleString()}
              </label>
              <input
                type="range"
                min={1000}
                max={200000}
                step={1000}
                value={km}
                onChange={(e) => setKm(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>1K</span>
                <span>2L</span>
              </div>
            </div>
          </div>

          <div className="neon-line mb-8" />

          <motion.div
            key={`${brand}-${year}-${km}`}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <p className="text-sm text-muted-foreground mb-2">Estimated Value</p>
            <div className="flex items-center justify-center gap-3">
              <Car className="w-8 h-8 text-accent" />
              <span className="font-display text-4xl md:text-5xl font-bold text-gradient">
                {brand ? formatPrice(estimated) : '—'}
              </span>
            </div>
            {brand && (
              <p className="text-xs text-muted-foreground mt-3">
                *Estimate based on market trends. Actual value may vary.
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
