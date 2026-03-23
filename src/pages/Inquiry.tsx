import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { useLeadStore } from '@/stores/useLeadStore';
import { featuredCars } from '@/data/cars';
import { toast } from 'sonner';

const Inquiry = () => {
  const [searchParams] = useSearchParams();
  const carId = searchParams.get('carId');
  const car = featuredCars.find(c => c.id === carId);

  const addLead = useLeadStore(state => state.addLead);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: car ? `I'm interested in the ${car.name}.` : '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addLead({
      ...formData,
      carId: car?.id,
      carName: car?.name,
    });
    toast.success('Inquiry submitted successfully! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <>
      <Helmet>
        <title>Inquiry — MyCarHub</title>
        <meta name="description" content="Contact us for inquiries about our premium car collection." />
      </Helmet>

      <div className="min-h-screen bg-[var(--bg-main)]">
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80" 
              alt="Modern Office" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[var(--bg-main)]" />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Connect <span className="text-gradient">With Us</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl mx-auto font-light">
              Expert assistance for all your premium automotive needs.
            </p>
          </motion.div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-gray-400 text-lg mb-12 max-w-lg">
                Have questions about a specific car or want to visit our showroom? 
                Our team is here to help you find your dream drive.
              </p>

              <div className="space-y-8">
                <ContactLink 
                  icon={Phone} 
                  label="Call Us" 
                  value="+91 98765 43210" 
                  href="tel:+919876543210"
                />
                <ContactLink 
                  icon={Mail} 
                  label="Email Us" 
                  value="hello@mycarhub.com" 
                  href="mailto:hello@mycarhub.com"
                />
                <ContactLink 
                  icon={MapPin} 
                  label="Visit Us" 
                  value="Luxury Square, MG Road, Bangalore" 
                  href="#"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Full Name" 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={v => setFormData({...formData, name: v})}
                    required
                  />
                  <FormInput 
                    label="Phone Number" 
                    placeholder="+91 00000 00000" 
                    value={formData.phone}
                    onChange={v => setFormData({...formData, phone: v})}
                    required
                  />
                </div>
                <FormInput 
                  label="Email Address" 
                  placeholder="john@example.com" 
                  type="email"
                  value={formData.email}
                  onChange={v => setFormData({...formData, email: v})}
                  required
                />
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Your Message</label>
                  <textarea
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary)] transition-all min-h-[150px]"
                    placeholder="How can we help you?"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[var(--primary)] text-white font-bold text-lg hover:brightness-110 transition-all flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Send Inquiry
                </button>
              </form>
            </motion.div>
          </div>

          {/* Why Contact Us */}
          <section className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-8 glass rounded-3xl border border-white/5">
              <h4 className="text-xl font-bold text-white mb-2">Expert Consultation</h4>
              <p className="text-gray-500 text-sm">Professional advice on car selection, financing, and market trends.</p>
            </div>
            <div className="p-8 glass rounded-3xl border border-white/5">
              <h4 className="text-xl font-bold text-white mb-2">Instant Response</h4>
              <p className="text-gray-500 text-sm">Our team typically responds within 30 minutes during business hours.</p>
            </div>
            <div className="p-8 glass rounded-3xl border border-white/5">
              <h4 className="text-xl font-bold text-white mb-2">Personalized Tours</h4>
              <p className="text-gray-500 text-sm">Schedule a VIP showroom tour and test drive at your convenience.</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

interface FormInputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}

const FormInput = ({ label, placeholder, type = "text", value, onChange, required }: FormInputProps) => (
  <div className="space-y-2">
    <label className="text-sm font-medium text-gray-400">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:border-[var(--primary)] transition-all"
      value={value}
      onChange={e => onChange(e.target.value)}
      required={required}
    />
  </div>
);

interface ContactLinkProps {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}

const ContactLink = ({ icon: Icon, label, value, href }: ContactLinkProps) => (
  <a href={href} className="flex items-center gap-6 group">
    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-[var(--primary)] transition-all">
      <Icon className="w-6 h-6 text-gray-400 group-hover:text-white" />
    </div>
    <div>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">{label}</p>
      <p className="text-white font-semibold group-hover:text-[var(--primary)] transition-colors">{value}</p>
    </div>
  </a>
);

export default Inquiry;
