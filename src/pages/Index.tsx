import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Shield, Zap, Award, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CarCard } from '@/components/CarCard';
import { ValuationSlider } from '@/components/ValuationSlider';
import { featuredCars } from '@/data/cars';
import { StatsSection } from '@/components/sections/StatsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BrandsSection } from '@/components/sections/BrandsSection';
import { CompareSection } from '@/components/sections/CompareSection';
import { RecentlyAddedSection } from '@/components/sections/RecentlyAddedSection';
import { EMICalculatorSection } from '@/components/sections/EMICalculatorSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { NewsletterSection } from '@/components/sections/NewsletterSection';
import { PopularSearchesSection } from '@/components/sections/PopularSearchesSection';
import { Footer } from '@/components/layout/Footer';

const features = [
  { icon: Shield, title: 'Certified Cars', desc: '200+ point inspection on every vehicle' },
  { icon: Zap, title: 'Instant Finance', desc: 'Get approved in under 60 seconds' },
  { icon: Award, title: 'Best Prices', desc: 'AI-powered pricing below market value' },
];

const Index = () => (
  <>
    <Helmet>
      <title>MyCarHub — Premium Pre-Owned Cars | Buy & Sell Certified Cars</title>
      <meta name="description" content="Discover certified pre-owned luxury and premium cars at the best prices. AI-powered valuation, instant finance, and nationwide delivery across 85+ cities." />
      <meta property="og:title" content="MyCarHub — Premium Pre-Owned Cars" />
      <meta property="og:description" content="Find your dream car with MyCarHub. Certified, inspected, and priced right." />
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AutoDealer',
          name: 'MyCarHub',
          description: 'Premium pre-owned car marketplace',
          url: window.location.origin,
        })}
      </script>
    </Helmet>

    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600&q=80" 
          alt="Luxury Car Background" 
          className="w-full h-full object-cover opacity-40 blur-[1px]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[var(--bg-main)]/80 to-[var(--bg-main)]" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[140px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/20 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-white text-sm font-medium mb-6 border border-primary/20">
            <Zap className="w-4 h-4" />
            The Future of Car Buying
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Find Cars That
            <br />
            <span className="text-gradient">Move You.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mt-6 max-w-xl mx-auto">
            Certified premium pre-owned cars, AI-powered pricing, and a seamless buying experience across 85+ cities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              to="/listings"
              className="px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              Explore Cars <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/valuation"
              className="px-8 py-3.5 rounded-xl glass text-foreground font-semibold text-sm hover:bg-card/80 transition-colors"
            >
              Sell Your Car
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>

    {/* Stats */}
    <StatsSection />

    {/* Features */}
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover-lift"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground text-lg">{f.title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* How It Works */}
    <HowItWorksSection />

    {/* Bento Grid Listings */}
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Featured <span className="text-gradient">Cars</span>
            </h2>
            <p className="text-muted-foreground mt-2">Handpicked for you</p>
          </div>
          <Link
            to="/listings"
            className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          {featuredCars.map((car, i) => (
            <CarCard key={car.id} car={car} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Recently Added */}
    <RecentlyAddedSection />

    {/* Brands */}
    <BrandsSection />

    {/* Compare */}
    <CompareSection />

    {/* Valuation */}
    <ValuationSlider />

    {/* EMI Calculator */}
    <EMICalculatorSection />

    {/* Testimonials */}
    <TestimonialsSection />

    {/* Blog */}
    <BlogSection />

    {/* FAQ */}
    <FAQSection />

    {/* Popular Searches & Cities */}
    <PopularSearchesSection />

    {/* Newsletter */}
    <NewsletterSection />

    {/* Footer */}
    <Footer />
  </>
);

export default Index;
