import { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, ChevronDown, Sparkles } from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import { featuredCars } from '@/data/cars';

// Professional Variants for Staggered Loading
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const Listings = () => {
  const [search, setSearch] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Luxury', 'SUV', 'Sedan', 'Electric', 'Sport'];

  // Advanced Memoized Filtering
  const filtered = useMemo(() => {
    return featuredCars.filter((c) => {
      const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
        c.brand.toLowerCase().includes(search.toLowerCase());
      const matchesTab = activeTab === 'All' || c.category === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [search, activeTab]);

  return (
    <>
      <Helmet>
        <title>Premium Inventory — MyCarHub</title>
        <meta name="description" content="Explore our elite collection of certified luxury and performance vehicles." />
      </Helmet>

      <div className="min-h-screen bg-[var(--bg-main)]">
        {/* New Hero Section */}
        <section className="relative h-[50vh] flex items-center justify-center overflow-hidden mb-12">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=1600&q=80"
              alt="Elite Inventory"
              className="w-full h-full object-cover scale-105 blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[var(--bg-main)]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 tracking-tighter">
              Elite <span className="text-gradient">Inventory</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto font-light">
              Discover a curated collection of high-performance and luxury vehicles.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 text-[var(--primary)] font-medium mb-2 uppercase tracking-widest text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Premium Collection</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                Find Your <span className="text-gradient">Dream Drive</span>
              </h1>
            </motion.div>

            {/* Quick Category Switcher (Gen-Z Style) */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${activeTab === cat
                      ? 'bg-[var(--primary)] text-white shadow-[0_0_20px_rgba(240,78,93,0.4)]'
                      : 'bg-[var(--bg-card)] text-gray-400 hover:text-white border border-white/5'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </header>

          {/* --- SEARCH & ACTIONS BAR --- */}
          <div className="sticky top-24 z-30 mb-10">
            <div className="glass p-3 rounded-2xl flex flex-col md:flex-row gap-4 border border-white/10 shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search brand, model, or tags..."
                  className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/5 text-white placeholder:text-gray-500 focus:outline-none focus:border-[var(--primary)]/50 transition-all"
                />
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[var(--primary)] text-white font-semibold hover:brightness-110 transition-all active:scale-95"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Advanced Filters
              </button>
            </div>

            {/* Expandable Filter Panel */}
            <AnimatePresence>
              {isFilterOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 p-6 glass rounded-2xl grid grid-cols-1 md:grid-cols-4 gap-6 border border-white/10">
                    <FilterSelect label="Price Range" options={['Below 10L', '10L - 25L', '25L - 50L', 'Luxury']} />
                    <FilterSelect label="Transmission" options={['Automatic', 'Manual']} />
                    <FilterSelect label="Fuel Type" options={['Petrol', 'Diesel', 'EV', 'Hybrid']} />
                    <FilterSelect label="Ownership" options={['1st Owner', '2nd Owner']} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* --- MAIN GRID --- */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode='popLayout'>
              {filtered.map((car, i) => (
                <CarCard key={car.id} car={car} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* --- EMPTY STATE --- */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="inline-flex p-6 rounded-full bg-white/5 mb-6">
                <Search className="w-12 h-12 text-gray-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">No cars match your search</h3>
              <p className="text-gray-400">Try adjusting your filters or searching for something else.</p>
              <button
                onClick={() => { setSearch(''); setActiveTab('All'); }}
                className="mt-6 text-[var(--primary)] font-medium hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

// Internal Helper Component for Clean Code
const FilterSelect = ({ label, options }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">{label}</label>
    <div className="relative group">
      <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-gray-300 appearance-none outline-none focus:border-[var(--primary)]/50 cursor-pointer">
        {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none group-hover:text-white transition-colors" />
    </div>
  </div>
);

export default Listings;