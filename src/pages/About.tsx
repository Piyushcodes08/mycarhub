import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us — MyCarHub</title>
        <meta name="description" content="Learn more about MyCarHub and our commitment to automotive excellence." />
      </Helmet>

      <div className="min-h-screen bg-[var(--bg-main)]">
        {/* Hero Section with BG Image */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80" 
              alt="Luxury Car Close-up" 
              className="w-full h-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--bg-main)]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tight">
              Our <span className="text-gradient">Legacy</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light">
              Crafting stories of excellence on the Indian roads since 2015.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-[var(--primary)]/20 rounded-[40px] blur-2xl group-hover:bg-[var(--primary)]/30 transition-all" />
              <div className="relative rounded-[32px] overflow-hidden glass aspect-square md:aspect-auto">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80" 
                  alt="Our Showroom" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-white">Trust, Transparency & <span className="text-[var(--primary)]">Quality</span></h2>
              <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the pre-owned car market, MyCarHub has grown into India's most trusted destination for premium vehicles.
                </p>
                <div className="p-6 rounded-2xl bg-white/5 border-l-4 border-[var(--primary)]">
                  <p className="text-white italic">
                    "We don't just sell cars; we deliver dreams that have been meticulously inspected and certified for a lifetime of memories."
                  </p>
                </div>
                <p>
                  Every vehicle in our collection goes through a rigorous 200-point inspection process, ensuring that the legacy of excellence continues with every new owner.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-32">
            <div className="glass p-10 rounded-[40px] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 blur-[80px]" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-gray-400">To provide a seamless, transparent, and joyful car buying experience that exceeds customer expectations at every touchpoint.</p>
            </div>
            <div className="glass p-10 rounded-[40px] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/10 blur-[80px]" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-400">To become the global benchmark for trust and technology in the automotive secondary market by 2030.</p>
            </div>
            <div className="glass p-10 rounded-[40px] border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/10 blur-[80px]" />
              <h3 className="text-2xl font-bold text-white mb-4">Our Values</h3>
              <p className="text-gray-400">Integrity, Customer-First Thinking, and a relentless pursuit of innovation in everything we do.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard icon={Shield} label="Inspected Cars" value="1,200+" />
            <StatCard icon={Award} label="Awards Won" value="15" />
            <StatCard icon={Users} label="Happy Clients" value="5,000+" />
            <StatCard icon={Globe} label="Locations" value="12" />
          </div>
        </div>
      </div>
    </>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

const StatCard = ({ icon: Icon, label, value }: StatCardProps) => (
  <div className="glass p-8 rounded-3xl text-center border border-white/5 hover:border-[var(--primary)]/30 transition-all group">
    <div className="w-12 h-12 rounded-2xl bg-[var(--primary)]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-[var(--primary)]" />
    </div>
    <h3 className="text-2xl font-bold text-white mb-1">{value}</h3>
    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">{label}</p>
  </div>
);

export default About;
