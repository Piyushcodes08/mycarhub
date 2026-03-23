import { motion } from 'framer-motion';
import { Fuel, Gauge, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Car } from '@/data/cars';

const badgeColors: Record<string, string> = {
  Trending: 'bg-primary text-primary-foreground',
  'Low KM': 'bg-accent text-accent-foreground',
  Premium: 'bg-gradient-to-r from-primary to-accent text-foreground',
  'Best Value': 'bg-secondary text-secondary-foreground border border-accent/30',
};

export const CarCard = ({ car, index = 0 }: { car: Car; index?: number }) => {
  const spanClass =
    car.span === 'both'
      ? 'md:col-span-2 md:row-span-2'
      : car.span === 'col'
        ? 'md:col-span-2'
        : car.span === 'row'
          ? 'md:row-span-2'
          : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.35 }}
      className={`group ${spanClass}`}
    >
      <Link to={`/car/${car.id}`} className="block h-full">
        <div className="glass rounded-2xl overflow-hidden h-full hover-lift cursor-pointer">
          <div className="relative overflow-hidden aspect-[16/10]">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            {car.badge && (
              <span
                className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${badgeColors[car.badge]}`}
              >
                {car.badge}
              </span>
            )}
          </div>
          <div className="p-4">
            <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              {car.brand}
            </p>
            <h3 className="font-display font-bold text-foreground mt-0.5 text-base">
              {car.name}
            </h3>
            <p className="text-primary font-bold text-lg mt-1">{car.price}</p>
            <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {car.year}
              </span>
              <span className="flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5" /> {car.km}
              </span>
              <span className="flex items-center gap-1">
                <Fuel className="w-3.5 h-3.5" /> {car.fuel}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
