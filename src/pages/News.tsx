import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, ArrowRight, User, Tag } from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const featuredArticle = {
  title: 'Redeemer\'s University Business School Debuts in Executive Education',
  excerpt: 'Redeemer\'s University Business School has made its debut in executive business education in Nigeria, offering world-class MBA programs designed for professionals seeking to advance their careers.',
  date: 'March 15, 2025',
  author: 'Admin',
  category: 'Featured',
  image: '/images/FSS.jpeg',
};

const allArticles = [
  {
    title: 'RUN Partners with Sickle Cell Foundation for Awareness Campaign',
    excerpt: 'The university hosted a one-day sensitisation program on sickle cell disorder, bringing together medical professionals and students.',
    date: 'March 10, 2025',
    author: 'Communications',
    category: 'University News',
    image: '/images/CGHDS2.jpeg',
  },
  {
    title: 'Preparing Finalists for NYSC: RUN Hosts Briefing Session',
    excerpt: 'NYSC officials joined RUN staff to prepare graduating students for their national service year.',
    date: 'March 5, 2025',
    author: 'Student Affairs',
    category: 'Announcement',
    image: '/images/043A4070.jpg',
  },
  {
    title: 'New Research Grant Awarded to Faculty of Natural Sciences',
    excerpt: 'The Department of Biochemistry has secured a major research grant for infectious disease studies.',
    date: 'February 28, 2025',
    author: 'Research Office',
    category: 'Research',
    image: '/images/tau-visit-400x250.jpg',
  },
  {
    title: 'RUNSA Elections: New Student Leaders Elected',
    excerpt: 'Students have elected new representatives to lead the Redeemer\'s University Student Association.',
    date: 'February 20, 2025',
    author: 'Student Affairs',
    category: 'Student Life',
    image: '/images/greenhouse3-scaled.jpg',
  },
  {
    title: 'International Conference on Sustainable Development',
    excerpt: 'The Faculty of Social Sciences hosted experts from across Africa to discuss sustainable development goals.',
    date: 'February 15, 2025',
    author: 'Academic Affairs',
    category: 'Events',
    image: '/images/Award-rankings-banner-1.jpg',
  },
  {
    title: 'New E-Learning Platform Launched',
    excerpt: 'The university has launched an enhanced e-learning platform to support hybrid learning.',
    date: 'February 10, 2025',
    author: 'ICT Department',
    category: 'Technology',
    image: '/images/11prof-400x250.jpg',
  },
];

const categories = ['All', 'University News', 'Research', 'Student Life', 'Events', 'Announcement', 'Technology'];

export function News() {
  const [activeCategory, setActiveCategory] = useState('All');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const filteredArticles = activeCategory === 'All'
    ? allArticles
    : allArticles.filter(a => a.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/043A4070.jpg"
            alt="News and Events"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-[#1a365d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a365d]" />
        </motion.div>
        <div className="relative z-10 container-custom text-center text-white pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md"
          >
            <span className="section-label">Updates</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              News & Events
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Stay updated with the latest happenings at Redeemer's University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-8 items-center bg-[#f8fafc] rounded-2xl overflow-hidden group"
          >
            <div className="h-80 lg:h-full overflow-hidden">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-8 lg:p-12">
              <span className="badge mb-4">{featuredArticle.category}</span>
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                {featuredArticle.title}
              </h2>
              <p className="text-gray-600 mb-6">{featuredArticle.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {featuredArticle.author}
                </span>
              </div>
              <button className="btn-primary">
                Read Full Story
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.article>
        </div>
      </section>

      {/* Categories — functional filter */}
      <section className="py-8 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#1a365d] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredArticles.map((article, index) => (
              <motion.article
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="card group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      <Tag className="w-3 h-3" />
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-serif font-semibold mb-3 group-hover:text-[#c9a227] transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 cta-gradient">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white/80 mb-8">
              Get the latest news and updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
              />
              <button type="submit" className="btn-secondary">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
