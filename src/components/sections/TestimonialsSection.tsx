import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Mehta',
    role: 'Bought Mercedes C-Class',
    avatar: 'AM',
    rating: 5,
    text: "Unbelievable experience! The car was exactly as described. The 200-point inspection report gave me complete confidence. Delivered to my doorstep in Mumbai within 3 days.",
  },
  {
    name: 'Priya Sharma',
    role: 'Sold Honda City',
    avatar: 'PS',
    rating: 5,
    text: "Got 15% more than what local dealers offered. The valuation tool was spot on and the pickup was hassle-free. Highly recommend MyCarHub for selling your car.",
  },
  {
    name: 'Rahul Verma',
    role: 'Bought BMW 3 Series',
    avatar: 'RV',
    rating: 5,
    text: "The financing was seamless — approved in under a minute! The team helped me find the perfect BMW within my budget. Professional service from start to finish.",
  },
  {
    name: 'Sneha Patel',
    role: 'Bought Hyundai Creta',
    avatar: 'SP',
    rating: 4,
    text: "First time buying a pre-owned car and MyCarHub made it feel premium. The warranty and free service package sealed the deal for me. Love my new Creta!",
  },
  {
    name: 'Vikram Singh',
    role: 'Bought Porsche Taycan',
    avatar: 'VS',
    rating: 5,
    text: "Found a rare Porsche Taycan at an incredible price. The condition was immaculate. MyCarHub is the only platform I trust for luxury pre-owned cars now.",
  },
];

export const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What Our Customers <span className="text-gradient">Say</span>
          </h2>
        </motion.div>

        <div className="glass rounded-3xl p-8 md:p-12 relative">
          <Quote className="absolute top-6 right-8 w-12 h-12 text-primary/10" />

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                <span className="font-display font-bold text-primary text-lg">{t.avatar}</span>
              </div>

              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < t.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`}
                  />
                ))}
              </div>

              <p className="text-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-6">
                "{t.text}"
              </p>

              <p className="font-display font-bold text-foreground">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-card/80 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-foreground" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-card/80 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
