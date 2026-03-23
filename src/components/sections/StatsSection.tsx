import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Users, MapPin, Star } from 'lucide-react';

const stats = [
  { icon: Car, value: 12500, suffix: '+', label: 'Cars Sold' },
  { icon: Users, value: 45000, suffix: '+', label: 'Happy Customers' },
  { icon: MapPin, value: 85, suffix: '+', label: 'Cities Covered' },
  { icon: Star, value: 4.8, suffix: '/5', label: 'Customer Rating', decimals: 1 },
];

const AnimatedCounter = ({ target, decimals = 0, suffix }: { target: number; decimals?: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(current);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <div className="glass rounded-3xl p-8 md:p-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="font-display text-3xl md:text-4xl font-bold text-foreground">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
