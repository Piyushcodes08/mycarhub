import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bell } from 'lucide-react';

export const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-card to-accent/20" />
          <div className="absolute inset-0 glass" />
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/15 rounded-full blur-[60px]" />

          <div className="relative z-10 p-8 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
                <Bell className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Never Miss a <span className="text-gradient">Deal</span>
              </h2>
              <p className="text-muted-foreground mt-3 max-w-md mx-auto">
                Get notified when new cars match your preferences. Exclusive deals, price drops, and market insights — straight to your inbox.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent/20 text-accent font-medium text-sm"
                >
                  <Bell className="w-4 h-4" />
                  You're on the list! 🎉
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="flex-1 px-5 py-3.5 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="px-6 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    Subscribe <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}

              <p className="text-xs text-muted-foreground mt-4">
                No spam. Unsubscribe anytime. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
