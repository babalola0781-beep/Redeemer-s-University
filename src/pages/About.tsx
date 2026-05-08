import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, BookOpen, Users, Target, History, Star } from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const timeline = [
  { year: '2005', event: 'University Established' },
  { year: '2010', event: 'First Convocation Ceremony' },
  { year: '2015', event: '10th Anniversary Celebration' },
  { year: '2021', event: 'Best Private University Award' },
  { year: '2025', event: '20 Years of Excellence' },
];

const awards = [
  { title: 'Best Private University in Nigeria', year: '2021', org: 'Nigeria Media Nite-Out' },
  { title: 'African Centre of Excellence', year: '2014', org: 'World Bank' },
  { title: 'Al-Sumait Prize', year: '2021', org: 'African Development' },
  { title: 'NAS Gold Award', year: '2022', org: 'Best in Science' },
  { title: 'ICHEM Global Award', year: '2014', org: 'United Kingdom' },
];

export function About() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/043A0884-scaled.jpg"
            alt="About Redeemer's University"
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
            <span className="section-label">About Us</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              Foothold of Excellence
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover the story behind Redeemer's University and our commitment to academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#1a365d] flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a leading institution in academic excellence, research innovation, and character 
                development, producing graduates who will transform society and make positive impacts 
                across the globe.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-[#c9a227] flex items-center justify-center mb-6">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-serif font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide world-class education rooted in Christian values, fostering intellectual 
                growth, character development, and spiritual formation in a conducive learning environment.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/motto-logo-anthem" 
              className="inline-flex items-center gap-2 text-[#1a365d] font-bold hover:text-[#c9a227] transition-colors group"
            >
              Explore Our Motto, Logo & Anthem
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section id="history" className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Our Journey</span>
            <h2 className="text-section font-serif mt-3 mb-4">Two Decades of Excellence</h2>
            <div className="decorative-line" />
          </div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item"
              >
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <span className="text-[#c9a227] font-bold text-lg">{item.year}</span>
                  <h3 className="text-xl font-serif font-semibold mt-2">{item.event}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link 
              to="/history" 
              className="inline-flex items-center gap-2 text-[#1a365d] font-bold hover:text-[#c9a227] transition-colors group mr-8"
            >
              Discover the Full Story 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <Link 
              to="/20th-anniversary" 
              className="inline-flex items-center gap-2 text-[#c9a227] font-bold hover:text-[#1a365d] transition-colors group"
            >
              20th Anniversary Celebration 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">What We Stand For</span>
            <h2 className="text-section font-serif mt-3 mb-4">Our Core Values</h2>
            <div className="decorative-line" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { icon: Star, title: 'Excellence', desc: 'Striving for the highest standards in all we do.' },
              { icon: Users, title: 'Integrity', desc: 'Upholding moral principles and ethical conduct.' },
              { icon: Target, title: 'Service', desc: 'Dedicating ourselves to the betterment of society.' },
              { icon: BookOpen, title: 'Innovation', desc: 'Embracing creativity and forward-thinking.' },
              { icon: Award, title: 'Character', desc: 'Building strong moral and spiritual foundations.' },
              { icon: History, title: 'Tradition', desc: 'Honoring our heritage while embracing progress.' },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="text-center p-6 rounded-2xl hover:bg-[#f8fafc] hover:shadow-md transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a365d]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1a365d] transition-colors">
                  <value.icon className="w-8 h-8 text-[#1a365d]" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards */}
      <section id="awards" className="section-padding cta-gradient">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Recognition</span>
            <h2 className="text-section font-serif mt-3 mb-4 text-white">Awards & Rankings</h2>
            <div className="w-16 h-1 bg-[#c9a227] mx-auto mb-8" />
            <Link 
              to="/awards-rankings" 
              className="inline-flex items-center gap-2 text-[#c9a227] font-bold hover:text-white transition-colors group"
            >
              View Full Roll of Honour
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-[#c9a227]/50 hover:bg-white/15 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <span className="text-[#c9a227] font-semibold">{award.year}</span>
                    <p className="text-white/70 text-sm">{award.org}</p>
                  </div>
                </div>
                <h3 className="text-lg font-serif font-semibold text-white">{award.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
