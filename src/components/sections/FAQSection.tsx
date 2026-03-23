import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'Are all cars on MyCarHub certified?',
    a: 'Yes! Every car goes through a rigorous 200+ point inspection by certified mechanics. We check everything from engine health to body condition, and provide a detailed report with each listing.',
  },
  {
    q: 'What warranty do I get with my purchase?',
    a: 'All cars come with a minimum 6-month comprehensive warranty covering engine, transmission, and electrical components. Extended warranty plans of up to 3 years are available at checkout.',
  },
  {
    q: 'Can I return a car after purchasing?',
    a: 'Absolutely. We offer a 7-day no-questions-asked return policy. If you\'re not completely satisfied, we\'ll arrange a pickup and process a full refund within 5 business days.',
  },
  {
    q: 'How does the financing work?',
    a: 'We\'ve partnered with 15+ leading banks and NBFCs. Get instant loan approval with competitive rates starting at 7.9% p.a. Zero processing fee on select models. Apply directly from the car listing page.',
  },
  {
    q: 'Do you offer home delivery?',
    a: 'Yes, we deliver to 85+ cities across India. Delivery is free within the city of purchase. For inter-city deliveries, a nominal transport fee applies based on distance.',
  },
  {
    q: 'How do I sell my car on MyCarHub?',
    a: 'Simply use our Valuation tool to get an instant quote. If you accept, we\'ll schedule a free inspection at your doorstep, complete the paperwork, and transfer the payment within 24 hours.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-display font-semibold text-foreground pr-4">{faq.q}</span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                  {openIndex === i ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-muted-foreground text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
