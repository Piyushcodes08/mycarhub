import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, SlidersHorizontal } from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import { featuredCars } from '@/data/cars';

const Listings = () => {
  const [search, setSearch] = useState('');
  const filtered = featuredCars.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>All Cars — MyCarHub</title>
        <meta name="description" content="Browse our complete collection of certified pre-owned cars." />
      </Helmet>

      <div className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              All <span className="text-gradient">Listings</span>
            </h1>
            <div className="mt-6 flex gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-3.5 w-4 h-4 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by name or brand..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <button className="px-4 py-3 rounded-xl glass flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <SlidersHorizontal className="w-4 h-4" /> Filters
              </button>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            {filtered.map((car, i) => (
              <CarCard key={car.id} car={{ ...car, span: undefined }} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground mt-16">No cars found matching your search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Listings;
