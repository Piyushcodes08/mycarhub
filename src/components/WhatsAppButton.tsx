import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  carName?: string;
  price?: string;
}

export const WhatsAppButton = ({ carName, price }: WhatsAppButtonProps) => {
  const message = carName
    ? `Hi MyCarHub, I'm interested in the ${carName} priced at ${price}. Is it available?`
    : `Hi MyCarHub, I'm looking for a car. Can you help?`;

  const url = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg animate-pulse-glow"
      style={{ boxShadow: '0 0 20px rgba(37, 211, 102, 0.4), 0 4px 20px rgba(0,0,0,0.3)' }}
    >
      <MessageCircle className="w-6 h-6 text-foreground" />
    </motion.a>
  );
};
