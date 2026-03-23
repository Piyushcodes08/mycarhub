import { motion } from 'framer-motion';
import { Search, ShieldCheck, CreditCard, Truck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Browse & Select',
    desc: 'Explore thousands of certified cars with detailed specs, photos, and history reports.',
  },
  {
    icon: ShieldCheck,
    step: '02',
    title: 'Inspect & Verify',
    desc: 'Every car undergoes a 200+ point inspection. View the full report before you decide.',
  },
  {
    icon: CreditCard,
    step: '03',
    title: 'Finance & Pay',
    desc: 'Get instant loan approval from 15+ banks. Zero processing fees on select models.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Doorstep Delivery',
    desc: 'We deliver your car to your doorstep with full documentation and warranty transfer.',
  },
];

export const HowItWorksSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
          Simple Process
        </span>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          How It <span className="text-gradient">Works</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          From browsing to driving — your dream car is just 4 steps away.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-px neon-line" />

        {steps.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="relative text-center"
          >
            <div className="relative z-10 w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center mx-auto mb-5 hover-lift">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <span className="text-xs font-bold text-primary tracking-widest">{step.step}</span>
            <h3 className="font-display font-bold text-foreground text-lg mt-2">{step.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
