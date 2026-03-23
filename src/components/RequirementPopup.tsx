import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Car, DollarSign, User, Phone, Mail, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object({
  name: yup.string().required('Name is required'),
  phone: yup.string().required('Phone is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  carInterest: yup.string().required('Select a car type'),
  budget: yup.string().required('Select your budget'),
  city: yup.string().required('City is required'),
});

type FormData = yup.InferType<typeof schema>;

export const RequirementPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) as any });

  useEffect(() => {
    const dismissed = sessionStorage.getItem('requirement-dismissed');
    if (dismissed) return;
    const timer = setTimeout(() => setIsOpen(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const onSubmit = (data: FormData) => {
    console.log('Lead captured:', data);
    setSubmitted(true);
    sessionStorage.setItem('requirement-dismissed', 'true');
    setTimeout(() => setIsOpen(false), 2000);
  };

  const onClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('requirement-dismissed', 'true');
  };

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-secondary border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all';
  const labelClass = 'block text-xs font-medium text-muted-foreground mb-1.5';
  const errorClass = 'text-xs text-primary mt-1';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/60 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-strong rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto scrollbar-hide"
          >
            {/* Header */}
            <div className="bg-primary rounded-t-3xl px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="font-display text-xl font-bold text-primary-foreground">
                  Find Your Dream Car
                </h2>
                <p className="text-primary-foreground/80 text-sm mt-0.5">
                  Tell us what you're looking for
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>

            {submitted ? (
              <div className="p-8 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4"
                >
                  <Car className="w-8 h-8 text-accent" />
                </motion.div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  We'll find it for you!
                </h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Our team will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Full Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <input
                        {...register('name')}
                        placeholder="John Doe"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                    {errors.name && <p className={errorClass}>{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                      <input
                        {...register('phone')}
                        placeholder="+91 98765 43210"
                        className={`${inputClass} pl-10`}
                      />
                    </div>
                    {errors.phone && <p className={errorClass}>{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                    <input
                      {...register('email')}
                      placeholder="john@example.com"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={labelClass}>Car Type</label>
                    <select {...register('carInterest')} className={inputClass}>
                      <option value="">Select type</option>
                      <option value="sedan">Sedan</option>
                      <option value="suv">SUV</option>
                      <option value="hatchback">Hatchback</option>
                      <option value="luxury">Luxury</option>
                      <option value="sports">Sports</option>
                    </select>
                    {errors.carInterest && (
                      <p className={errorClass}>{errors.carInterest.message}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelClass}>Budget Range</label>
                    <select {...register('budget')} className={inputClass}>
                      <option value="">Select budget</option>
                      <option value="5-10L">₹5 - 10 Lakh</option>
                      <option value="10-20L">₹10 - 20 Lakh</option>
                      <option value="20-50L">₹20 - 50 Lakh</option>
                      <option value="50L+">₹50 Lakh+</option>
                    </select>
                    {errors.budget && <p className={errorClass}>{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <label className={labelClass}>City</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                    <input
                      {...register('city')}
                      placeholder="Mumbai"
                      className={`${inputClass} pl-10`}
                    />
                  </div>
                  {errors.city && <p className={errorClass}>{errors.city.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
                >
                  Submit Requirement
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
