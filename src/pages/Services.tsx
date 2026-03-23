import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Car, ShieldCheck, Gauge, Wallet, Settings, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Buy & Sell",
      desc: "Wide range of certified luxury cars with easy exchange options."
    },
    {
      icon: ShieldCheck,
      title: "Certified Checks",
      desc: "200-point inspection by certified mechanics for every vehicle."
    },
    {
      icon: Gauge,
      title: "Instant Valuation",
      desc: "Get the best market price for your used car in under 15 minutes."
    },
    {
      icon: Wallet,
      title: "Easy Finance",
      desc: "Instant loan approval with low interest rates and flexible tenures."
    },
    {
      icon: Settings,
      title: "Service & Care",
      desc: "Comprehensive maintenance plans and detailing services."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Dedicated relationship managers to assist you at every step."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services — MyCarHub</title>
        <meta name="description" content="Explore the wide range of automotive services offered by MyCarHub." />
      </Helmet>

      <div className="min-h-screen bg-[var(--bg-main)]">
        {/* Hero Section */}
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80" 
              alt="Luxury Car Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-[var(--bg-main)]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-6">
              Elite <span className="text-gradient">Services</span>
            </h1>
            <p className="text-gray-300 text-xl max-w-2xl mx-auto font-light">
              Comprehensive automotive solutions tailored for the modern driver.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-10 rounded-[40px] border border-white/5 hover:border-[var(--primary)]/30 transition-all hover:-translate-y-2 group relative overflow-hidden"
              >
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[var(--primary)]/5 rounded-full blur-2xl group-hover:bg-[var(--primary)]/10 transition-all" />
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 bg-gradient-to-br from-white/10 to-transparent group-hover:from-[var(--primary)]/20 transition-all">
                  <service.icon className="w-8 h-8 text-[var(--primary)]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Process Section */}
          <section className="mb-32">
            <h2 className="text-4xl font-bold text-white text-center mb-16">The <span className="text-gradient">Process</span></h2>
            <div className="grid md:grid-cols-4 gap-8">
              <ProcessStep number="01" title="Selection" desc="Choose from our elite certified inventory." />
              <ProcessStep number="02" title="Valuation" desc="Get a transparent AI-powered price report." />
              <ProcessStep number="03" title="Finance" desc="Instant paperless approval in minutes." />
              <ProcessStep number="04" title="Delivery" desc="Doorstep delivery with 7-day money back guarantee." />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

interface ProcessStepProps {
  number: string;
  title: string;
  desc: string;
}

const ProcessStep = ({ number, title, desc }: ProcessStepProps) => (
  <div className="relative p-8 glass rounded-[32px] border border-white/5 group hover:border-[var(--primary)]/30 transition-all">
    <span className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-[var(--primary)] text-white flex items-center justify-center font-bold shadow-lg shadow-primary/30">
      {number}
    </span>
    <h4 className="text-xl font-bold text-white mb-2 mt-4">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Services;
