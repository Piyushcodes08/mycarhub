import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const recentCars = [
  {
    id: '1',
    name: 'Range Rover Evoque',
    price: '₹48,00,000',
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=400&q=80',
    time: '2 hours ago',
  },
  {
    id: '2',
    name: 'Volvo XC40',
    price: '₹32,00,000',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&q=80',
    time: '5 hours ago',
  },
  {
    id: '3',
    name: 'Jaguar F-Pace',
    price: '₹55,00,000',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&q=80',
    time: '8 hours ago',
  },
  {
    id: '4',
    name: 'Tesla Model 3',
    price: '₹41,00,000',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&q=80',
    time: '12 hours ago',
  },
];

export const RecentlyAddedSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-3">
            <Clock className="w-3 h-3" />
            Just Arrived
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Recently <span className="text-gradient">Added</span>
          </h2>
        </div>
        <Link
          to="/listings"
          className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          View All <ArrowRight className="w-4 h-4" />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {recentCars.map((car, i) => (
          <motion.div
            key={car.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={`/car/${car.id}`} className="block group">
              <div className="glass rounded-2xl overflow-hidden hover-lift">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="font-display font-bold text-foreground text-sm">{car.name}</h3>
                    <p className="text-primary font-bold text-base mt-0.5">{car.price}</p>
                  </div>
                </div>
                <div className="px-3 py-2">
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {car.time}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
