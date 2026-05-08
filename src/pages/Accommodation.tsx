import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, ShieldCheck, Users, Zap, Droplets, Bed, ArrowRight } from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const features = [
  { icon: Users, title: '3-Person Ensuite', desc: 'Comfortable rooms with completely private washrooms.' },
  { icon: ShieldCheck, title: '24/7 Security', desc: 'Dedicated porters and round-the-clock campus security.' },
  { icon: Zap, title: 'Constant Power', desc: '24/7 electricity supply to keep you productive.' },
  { icon: Droplets, title: 'Running Water', desc: 'Reliable water supply in every room and facility.' },
  { icon: Bed, title: 'Modern Furnishing', desc: 'Well-equipped rooms with quality beds and furniture.' },
  { icon: Home, title: 'Common Areas', desc: 'Spacious lounges and study areas in each hall.' },
];

export function Accommodation() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/Accommodation-scaled.jpg"
            alt="Campus Accommodation"
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
            <span className="section-label">Student Housing</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              Accommodation
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              Experience the best on-campus accommodation among private universities in Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <span className="section-label">Living Experience</span>
              <h2 className="text-3xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Unrivaled Living Experience</h2>
              <div className="decorative-line-left mb-6" />
              
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  We have one of the best on-campus accommodations among private universities in Nigeria. Each room is designed to accommodate three students comfortably and is ensuite. This model is unrivaled in other tertiary institutions.
                </p>
                
                <p>
                  All undergraduates reside in the halls of residence on campus. There are also porters and security officers to protect the lives and property of students.
                </p>
                
                <p>
                  Our halls of residence are named: <strong>Queen Esther Hall</strong> and <strong>Prophet Moses Hall</strong> for the females and males respectively.
                </p>
              </div>
            </motion.div>

            {/* Side Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] group"
            >
              <img 
                src="/images/accomodation-at-RUN.jpg" 
                alt="Students walking near accommodation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/60 to-transparent mix-blend-multiply" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Amenities</span>
            <h2 className="text-section font-serif mt-3 mb-4">What's Included</h2>
            <div className="decorative-line" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="feature-card flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a365d]/10 flex items-center justify-center shrink-0">
                  <feature.icon className="w-6 h-6 text-[#1a365d]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 cta-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Home className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Welcome to Your Second Home
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8 text-lg">
              Explore a vibrant community designed to foster academic excellence and personal growth.
            </p>
            <a href="/admissions" className="btn-secondary">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
