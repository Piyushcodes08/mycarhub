import { motion } from 'framer-motion';

const brands = [
  'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Toyota',
  'Honda', 'Hyundai', 'Maruti Suzuki', 'Tata', 'Mahindra',
  'Volkswagen', 'Kia',
];

export const BrandsSection = () => (
  <section className="py-16 px-4 overflow-hidden">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest font-medium">
          Trusted by owners of
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
          50+ Premium <span className="text-gradient">Brands</span>
        </h2>
      </motion.div>

      <div className="relative">
        <div className="flex animate-[scroll_25s_linear_infinite] gap-8">
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 glass rounded-2xl px-8 py-5 flex items-center justify-center hover-lift cursor-default min-w-[180px]"
            >
              <span className="font-display font-bold text-foreground/70 text-sm whitespace-nowrap">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
