import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  Building2, 
  FlaskConical,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronRight,
  Star,
  Quote
} from 'lucide-react';

// Stagger container variant
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

// Animated Counter Component
function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

// Hero Section
function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img
          src="/images/SIDE-VIEW-OF-SAPETRO-LECTURE-THEATRE-1.jpg"
          alt="Redeemer's University Campus"
          className="w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-[#c9a227]/20 backdrop-blur-sm rounded-full text-[#c9a227] text-sm font-medium mb-6 border border-[#c9a227]/30">
            Welcome to Excellence
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-hero font-serif font-bold text-white mb-6 max-w-4xl mx-auto"
        >
          Running with the Vision
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10"
        >
          A world-class Christian university dedicated to academic excellence, 
          character development, and producing future leaders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/academics" className="btn-secondary">
            Explore Programs
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link to="/admissions" className="btn-outline border-white text-white hover:bg-white hover:text-[#1a365d]">
            Apply Now
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: 9, label: 'Faculties', suffix: '' },
            { value: 50, label: 'Programs', suffix: '+' },
            { value: 5480, label: 'Students', suffix: '+' },
            { value: 20, label: 'Years', suffix: '+' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="stat-number text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Quick Links Section
function QuickLinksSection() {
  const links = [
    { icon: BookOpen, title: 'Our Programmes', desc: 'Explore courses', href: '/academics' },
    { icon: Calendar, title: 'How to Apply', desc: 'Admission guide', href: '/admissions' },
    { icon: Building2, title: 'Tuition & Fees', desc: 'Fee structure', href: '/admissions#fees' },
    { icon: Award, title: 'Scholarships', desc: 'Financial aid', href: '/admissions#scholarships' },
    { icon: MapPin, title: 'Location', desc: 'Find us', href: '/contact' },
    { icon: Users, title: 'Student Portal', desc: 'Login', href: '#' },
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container-custom">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {links.map((link, index) => (
            <motion.div key={index} variants={fadeUpItem}>
              <Link
                to={link.href}
                className="flex flex-col items-center p-4 rounded-xl hover:bg-[#f8fafc] hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#1a365d]/10 flex items-center justify-center mb-3 group-hover:bg-[#c9a227] group-hover:scale-110 transition-all duration-300">
                  <link.icon className="w-6 h-6 text-[#1a365d] group-hover:text-white transition-colors" />
                </div>
                <span className="font-medium text-sm text-center">{link.title}</span>
                <span className="text-xs text-gray-500">{link.desc}</span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">About Us</span>
            <h2 className="text-section font-serif mt-3 mb-6">
              Foothold of Excellence
            </h2>
            <div className="decorative-line-left mb-6" />
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded on a Christian mission mindset, Redeemer's University is a rapidly expanding, 
              vision-driven institution dedicated to leading the way in innovative learning. Our vision 
              is to develop a new generation of African leaders who will transform society.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              With state-of-the-art facilities, world-class faculty, and a commitment to holistic 
              education, we prepare students not just for careers, but for life.
            </p>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {[
                '3-Person Ensuite Accommodation',
                'E-Learning Facilities',
                'Serene Learning Environment',
                'Scholarship Opportunities',
              ].map((item, index) => (
                <motion.div key={index} variants={fadeUpItem} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
                    <Star className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-gray-700">{item}</span>
                </motion.div>
              ))}
            </motion.div>

            <Link to="/about" className="btn-primary">
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src="/images/Pastor-Enoch-Adejare-Adeboye.jpg"
                alt="Founder"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <Quote className="w-8 h-8 text-[#c9a227] mb-3" />
              <p className="text-gray-700 italic text-sm mb-3">
                "Education is not just about acquiring knowledge; it's about developing character."
              </p>
              <p className="text-[#c9a227] font-medium text-sm">— Pastor E.A. Adeboye</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Programs Section
function ProgramsSection() {
  const programs = [
    {
      title: 'Undergraduate',
      description: 'Fully accredited programmes designed to prepare students for the world of work.',
      image: '/images/RUN-Full-Time-Undergraduate-Programmes (1).jpg',
      duration: '4-5 Years',
      href: '/academics#undergraduate',
    },
    {
      title: 'Postgraduate',
      description: 'Advanced degrees through mentoring by seasoned researchers and faculty members.',
      image: '/images/RUN-Post-Graduate-Programmes-1 (1).jpg',
      duration: '1-3 Years',
      href: '/academics#postgraduate',
    },
    {
      title: 'Part-Time',
      description: 'Flexible learning options for working professionals with busy schedules.',
      image: '/images/RN-Part-Time-Undergraduate-Programmes.jpg',
      duration: '5-6 Years',
      href: '/academics#parttime',
    },
    {
      title: 'Foundation / JUPEB',
      description: 'An accelerated pathway into 200-Level via the JUPEB Direct Entry option.',
      image: '/images/jupeb-hero.jpg',
      duration: '1 Year',
      href: '/foundation-jupeb',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">Academics</span>
          <h2 className="text-section font-serif mt-3 mb-4">Our Programmes</h2>
          <div className="decorative-line" />
          <p className="text-gray-600 max-w-2xl mx-auto mt-6">
            Discover a wide range of accredited programmes designed to help you achieve your academic and career goals.
          </p>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {programs.map((program, index) => (
            <motion.div key={index} variants={fadeUpItem}>
              <Link to={program.href} className="block group">
                <div className="card overflow-hidden">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-[#1a365d]">{program.duration}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-semibold mb-3 group-hover:text-[#c9a227] transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                    <div className="flex items-center text-[#c9a227] font-medium text-sm">
                      Learn More
                      <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link to="/academics" className="btn-outline">
            View All Programmes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// Awards Section
function AwardsSection() {
  const awards = [
    {
      title: 'Best Private University',
      year: '2021',
      description: 'Nigeria Media Nite-Out Award',
      icon: Award,
    },
    {
      title: 'African Centre of Excellence',
      year: '2014',
      description: 'World Bank-Funded Research Center',
      icon: FlaskConical,
    },
    {
      title: 'Al-Sumait Prize',
      year: '2021',
      description: 'For African Development in Health',
      icon: Star,
    },
    {
      title: 'NAS Gold Award',
      year: '2022',
      description: 'Best University in Science',
      icon: GraduationCap,
    },
  ];

  return (
    <section className="section-padding cta-gradient text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Recognition</span>
            <h2 className="text-section font-serif mt-3 mb-6 text-white">
              Award-Winning Institution
            </h2>
            <div className="w-16 h-1 bg-[#c9a227] mb-6" />
            <p className="text-white/80 mb-6 leading-relaxed">
              Redeemer's University has been consistently recognized for its commitment to academic 
              excellence, research innovation, and student development.
            </p>
            <p className="text-white/80 mb-8 leading-relaxed">
              Our achievements reflect the dedication of our faculty, staff, and students in maintaining 
              the highest standards of education.
            </p>
            <Link to="/about#awards" className="btn-secondary">
              View All Awards
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {awards.map((award, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="award-card bg-white/10 backdrop-blur-sm border-white/20"
              >
                <div className="award-icon w-14 h-14 mb-4">
                  <award.icon className="w-7 h-7" />
                </div>
                <div className="text-[#c9a227] text-sm font-semibold mb-1">{award.year}</div>
                <h3 className="text-lg font-serif font-semibold mb-2 text-white">{award.title}</h3>
                <p className="text-white/70 text-sm">{award.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// News Section
function NewsSection() {
  const articles = [
    {
      title: 'Business School Debuts in Executive Education',
      excerpt: 'Redeemer\'s University Business School has made its debut in executive business education in Nigeria.',
      date: 'March 15, 2025',
      category: 'Featured',
      image: '/images/FSS.jpeg',
    },
    {
      title: 'Sickle Cell Awareness Campaign',
      excerpt: 'RUN partners with Sickle Cell Foundation to host one-day sensitisation program.',
      date: 'March 10, 2025',
      category: 'University News',
      image: '/images/CGHDS2.jpeg',
    },
    {
      title: 'Preparing Finalists for NYSC',
      excerpt: 'RUN hosts pre-mobilisation briefing with NYSC officials for graduating students.',
      date: 'March 5, 2025',
      category: 'Announcement',
      image: '/images/043A4070.jpg',
    },
  ];

  return (
    <section className="section-padding bg-[#f8fafc]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-label">Latest Updates</span>
            <h2 className="text-section font-serif mt-3">News & Events</h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/news" className="btn-outline mt-4 md:mt-0">
              View All News
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {articles.map((article, index) => (
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
                  <span className="badge">{article.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </div>
                <h3 className="text-lg font-serif font-semibold mb-3 group-hover:text-[#c9a227] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">{article.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      text: "Having attended public schools all my life, I was sceptical about private universities in Nigeria. That conviction stayed with me until I came in contact with RUN.",
      name: "Dele Olayinka Ayo",
      role: "Alumni, FCA",
      image: "/images/WhatsApp-Image-2024-07-18-at-4.41.08-AM.jpeg",
    },
    {
      text: "I can confidently attest to RUN's unwavering commitment to holistic student development. Redeemer's University truly stands as a beacon of quality education.",
      name: "Dr Olubukola Omobowale",
      role: "Vice Chairman, Family Forum",
      image: "/images/WhatsApp-Image-2024-07-18-at-4.41.09-AM.jpeg",
    },
    {
      text: "Redeemer's University focus on delivering high-quality education, in a campus that is well equipped with modern facilities for training and research.",
      name: "Pastor Johnson Olupona",
      role: "Parent",
      image: "/images/WhatsApp-Image-2024-07-17-at-5.47.54-AM.jpeg",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="section-label">Testimonials</span>
          <h2 className="text-section font-serif mt-3 mb-4">Proofs of Running with the Vision</h2>
          <div className="decorative-line" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeUpItem}
              className="quote-block"
            >
              <p className="text-gray-700 italic mb-6 relative z-10">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-[#c9a227]/30"
                />
                <div>
                  <p className="font-semibold text-[#1a365d]">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-20 cta-gradient">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
            Join thousands of students who have chosen Redeemer's University as their path to excellence. 
            Applications are now open for the upcoming academic session.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/admissions" className="btn-secondary">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-[#1a365d]">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Home Component
export function Home() {
  return (
    <main>
      <HeroSection />
      <QuickLinksSection />
      <AboutSection />
      <ProgramsSection />
      <AwardsSection />
      <NewsSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
