import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Dumbbell, 
  Users, 
  Utensils, 
  Wifi, 
  Shield, 
  Heart,
  Music,
  Camera,
  ArrowRight
} from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const facilities = [
  {
    icon: Home,
    title: 'Accommodation',
    description: 'Modern 3-person ensuite rooms with 24/7 power, water, and security.',
    image: '/images/Accommodation-scaled.jpg',
    link: '/accommodation',
  },
  {
    icon: BookOpen,
    title: 'Library',
    description: 'Tekena Tamuno Library with 50,000+ volumes and digital resources.',
    image: '/images/Library-scaled.jpg',
    link: '/library',
  },
  {
    icon: Dumbbell,
    title: 'Sports Complex',
    description: 'Modern gym, basketball court, football field, and tennis courts.',
    image: '/images/Sports-scaled.jpg',
    link: '/sports',
  },
  {
    icon: Utensils,
    title: 'Dining',
    description: 'Multiple cafeterias offering nutritious meals at affordable prices.',
    image: '/images/Feeding-scaled.jpg',
    link: '/dining',
  },
  {
    icon: Users,
    title: 'Student Leadership',
    description: 'Redeemer\'s University Student Association (RUNSA) representing the vibrant student body.',
    image: '/images/RUNSA-scaled.jpg',
    link: '/student-leadership',
  },
];

const clubs = [
  { name: 'Drama Club', icon: Users },
  { name: 'Music Society', icon: Music },
  { name: 'Photography Club', icon: Camera },
  { name: 'Debate Society', icon: Users },
  { name: 'Sports Club', icon: Dumbbell },
  { name: 'Tech Hub', icon: Wifi },
];

export function CampusLife() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/043A4120.jpg"
            alt="Campus Lifestyle"
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
            <span className="section-label">Experience</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              Campus Life
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              A vibrant community where learning extends beyond the classroom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Facilities</span>
            <h2 className="text-section font-serif mt-3 mb-4">World-Class Amenities</h2>
            <div className="decorative-line" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group"
              >
                <Link to={facility.link} className="block cursor-pointer">
                  <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center">
                        <facility.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-serif font-semibold text-white">{facility.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 group-hover:text-[#1a365d] transition-colors">{facility.description}</p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Student Life */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Community</span>
              <h2 className="text-section font-serif mt-3 mb-6">Student Life at RUN</h2>
              <div className="decorative-line-left mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Life at Redeemer's University is more than just academics. Our vibrant campus community 
                offers numerous opportunities for personal growth, social engagement, and extracurricular 
                activities.
              </p>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4 mb-8"
              >
                {[
                  { icon: Shield, text: '24/7 Security' },
                  { icon: Wifi, text: 'Free WiFi' },
                  { icon: Heart, text: 'Health Center' },
                  { icon: Users, text: 'Counseling' },
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeUpItem} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-[#c9a227]" />
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src="/images/043A0884-scaled.jpg"
                alt="Student Life"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Activities</span>
            <h2 className="text-section font-serif mt-3 mb-4">Clubs & Societies</h2>
            <div className="decorative-line" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Join one of our many student organizations and pursue your passions while making lifelong friends.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {clubs.map((club, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-[#f8fafc] rounded-xl p-6 text-center hover:bg-[#1a365d] hover:text-white transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a365d] group-hover:bg-[#c9a227] flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                  <club.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold">{club.name}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Home className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Experience RUN Firsthand
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Schedule a campus tour and see why Redeemer's University is the perfect place for your education.
            </p>
            <a href="/contact" className="btn-secondary">
              Book a Tour
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
