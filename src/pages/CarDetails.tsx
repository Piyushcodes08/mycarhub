import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Gauge, Fuel, Shield } from 'lucide-react';
import { featuredCars } from '@/data/cars';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const CarDetails = () => {
  const { id } = useParams();
  const car = featuredCars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Car not found.</p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{car.name} — MyCarHub</title>
        <meta name="description" content={`Buy ${car.name} at ${car.price}. ${car.year} model, ${car.km} driven.`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Car',
            name: car.name,
            brand: { '@type': 'Brand', name: car.brand },
            offers: { '@type': 'Offer', price: car.priceNum, priceCurrency: 'INR' },
            mileageFromOdometer: { '@type': 'QuantitativeValue', value: car.km },
            modelDate: car.year.toString(),
            fuelType: car.fuel,
          })}
        </script>
      </Helmet>

      <div className="min-h-screen pt-28 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/listings"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Listings
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="rounded-3xl overflow-hidden glass">
              <img
                src={car.image}
                alt={car.name}
                className="w-full aspect-[4/3] object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
                {car.brand}
              </p>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">
                {car.name}
              </h1>
              <p className="text-primary font-bold text-3xl mt-3">{car.price}</p>

              <div className="grid grid-cols-2 gap-3 mt-8">
                {[
                  { icon: Calendar, label: 'Year', value: car.year },
                  { icon: Gauge, label: 'KM Driven', value: car.km },
                  { icon: Fuel, label: 'Fuel', value: car.fuel },
                  { icon: Shield, label: 'Inspection', value: 'Certified' },
                ].map((item) => (
                  <div key={item.label} className="glass rounded-xl p-4">
                    <item.icon className="w-5 h-5 text-primary mb-2" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground text-sm">{item.value}</p>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Link
                  to={`/inquiry?carId=${car.id}`}
                  className="px-8 py-3.5 rounded-xl bg-primary text-white font-semibold text-sm text-center hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                  Inquire Now
                </Link>
                <Link
                  to="/listings"
                  className="px-8 py-3.5 rounded-xl glass text-white font-semibold text-sm text-center hover:bg-white/10 transition-all"
                >
                  View More
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <WhatsAppButton carName={car.name} price={car.price} />
    </>
  );
};

export default CarDetails;
