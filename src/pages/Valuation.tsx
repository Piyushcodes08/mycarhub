import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ValuationSlider } from '@/components/ValuationSlider';

const Valuation = () => (
  <>
    <Helmet>
      <title>Car Valuation — MyCarHub</title>
      <meta name="description" content="Get an instant AI-powered valuation of your car. Free and accurate." />
    </Helmet>
    <div className="min-h-screen bg-[var(--bg-main)]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1600&q=80" 
            alt="Dashboard" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--bg-main)]" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
            Instant <span className="text-gradient">Valuation</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light">
            Get an AI-powered accurate market price for your vehicle in seconds.
          </p>
        </motion.div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <ValuationSlider />
        
        <div className="grid md:grid-cols-2 gap-12 mt-32">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Why use our <span className="text-[var(--primary)]">AI Tool?</span></h2>
            <p className="text-gray-400">Our engine analyzes millions of data points across India to give you the most accurate price based on real-time market trends.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                Real-time market data analysis
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                No hidden fees or charges
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <div className="w-2 h-2 rounded-full bg-[var(--primary)]" />
                Accepted by all major dealers
              </li>
            </ul>
          </div>
          <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--primary)]/10 rounded-full blur-3xl group-hover:bg-[var(--primary)]/20 transition-all" />
            <h3 className="text-xl font-bold text-white mb-4">Sell to Us Directly</h3>
            <p className="text-gray-400 mb-6">Want the fastest exit? We buy cars at the valuation price instantly. No paperwork hassle.</p>
            <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-[var(--primary)] transition-all">
              Request Direct Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Valuation;
