import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';

const posts = [
  {
    title: '10 Things to Check Before Buying a Pre-Owned Car',
    excerpt: 'From engine health to legal documents — your complete checklist for a smart purchase.',
    category: 'Buying Guide',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&q=80',
  },
  {
    title: 'Electric vs Hybrid: Which Should You Pick in 2025?',
    excerpt: 'We break down total cost of ownership, range anxiety, and resale value for both options.',
    category: 'EV Corner',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=400&q=80',
  },
  {
    title: 'How AI is Changing Car Valuations Forever',
    excerpt: 'Machine learning models now predict car prices with 95% accuracy. Here\'s how we do it.',
    category: 'Technology',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80',
  },
];

export const BlogSection = () => (
  <section className="py-20 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-end justify-between mb-10"
      >
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-muted-foreground text-sm font-medium mb-4">
            Knowledge Hub
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Latest from the <span className="text-gradient">Blog</span>
          </h2>
        </div>
        <a
          href="#"
          className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all"
        >
          All Articles <ArrowRight className="w-4 h-4" />
        </a>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl overflow-hidden hover-lift cursor-pointer group"
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 rounded-full bg-card/80 backdrop-blur-sm text-xs font-medium text-foreground">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-foreground leading-snug line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);
