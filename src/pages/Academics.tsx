import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, FlaskConical, Calculator, Scale, Building2, Settings, Heart, Users, GraduationCap, Clock, ChevronRight, Cpu, Mail, Phone, Info, Globe } from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const faculties = [
  { name: 'Computing and Digital Technology', icon: Cpu, programs: 3, href: 'https://fcdt.run.edu.ng' },
  { name: 'Basic Medical Sciences', icon: Heart, programs: 7, href: 'https://fbms.run.edu.ng' },
  { name: 'Engineering', icon: Settings, programs: 4, href: 'https://foe.run.edu.ng' },
  { name: 'Built Environment Studies', icon: Building2, programs: 5, href: 'https://fbes.run.edu.ng' },
  { name: 'Humanities', icon: BookOpen, programs: 6, href: 'https://foh.run.edu.ng' },
  { name: 'Law', icon: Scale, programs: 1, href: 'https://fol.run.edu.ng' },
  { name: 'Management Sciences', icon: Calculator, programs: 9, href: 'https://fms.run.edu.ng' },
  { name: 'Natural Sciences', icon: FlaskConical, programs: 10, href: 'https://fns.run.edu.ng' },
  { name: 'Social Sciences', icon: Users, programs: 6, href: 'https://fss.run.edu.ng' },
];

const programs = {
  undergraduate: [
    // Basic Medical Sciences
    { name: 'Biochemistry', duration: '4 Years', faculty: 'Basic Medical Sciences' },
    { name: 'Human Anatomy', duration: '4 Years', faculty: 'Basic Medical Sciences' },
    { name: 'Human Physiology', duration: '4 Years', faculty: 'Basic Medical Sciences' },
    { name: 'Public Health', duration: '4 Years', faculty: 'Basic Medical Sciences' },
    { name: 'Nursing Science', duration: '5 Years', faculty: 'Basic Medical Sciences' },
    { name: 'Physiotherapy', duration: '5 Years', faculty: 'Basic Medical Sciences' },
    { name: 'Medical Laboratory Science', duration: '5 Years', faculty: 'Basic Medical Sciences' },
    // Engineering
    { name: 'Civil Engineering', duration: '5 Years', faculty: 'Engineering' },
    { name: 'Computer Engineering', duration: '5 Years', faculty: 'Engineering' },
    { name: 'Electrical & Electronic Engineering', duration: '5 Years', faculty: 'Engineering' },
    { name: 'Mechanical Engineering', duration: '5 Years', faculty: 'Engineering' },
    // Built Environment Studies
    { name: 'Architecture', duration: '4 Years', faculty: 'Built Environment Studies' },
    { name: 'Building Technology', duration: '4 Years', faculty: 'Built Environment Studies' },
    { name: 'Estate Management', duration: '4 Years', faculty: 'Built Environment Studies' },
    { name: 'Quantity Surveying', duration: '4 Years', faculty: 'Built Environment Studies' },
    { name: 'Urban & Regional Planning', duration: '4 Years', faculty: 'Built Environment Studies' },
    // Humanities
    { name: 'Christian Religious Studies', duration: '4 Years', faculty: 'Humanities' },
    { name: 'English', duration: '4 Years', faculty: 'Humanities' },
    { name: 'French', duration: '4 Years', faculty: 'Humanities' },
    { name: 'History & International Studies', duration: '4 Years', faculty: 'Humanities' },
    { name: 'Philosophy', duration: '4 Years', faculty: 'Humanities' },
    { name: 'Theatre Arts', duration: '4 Years', faculty: 'Humanities' },
    // Law
    { name: 'Law', duration: '5 Years', faculty: 'Law' },
    // Management Sciences
    { name: 'Accounting', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Banking & Finance', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Business Administration', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Public Administration', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Hospitality & Tourism Management', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Insurance', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Marketing', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Transport Management', duration: '4 Years', faculty: 'Management Sciences' },
    { name: 'Actuarial Science', duration: '4 Years', faculty: 'Management Sciences' },
    // Natural Sciences
    { name: 'Environmental Management & Toxicology', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Geology', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Industrial Chemistry', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Industrial Mathematics', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Industrial Mathematics and Computer Science', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Microbiology', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Petroleum Chemistry', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Physics with Electronics', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Statistics', duration: '4 Years', faculty: 'Natural Sciences' },
    { name: 'Statistics & Data Science', duration: '4 Years', faculty: 'Natural Sciences' },
    // Social Sciences
    { name: 'Economics', duration: '4 Years', faculty: 'Social Sciences' },
    { name: 'Mass Communication', duration: '4 Years', faculty: 'Social Sciences' },
    { name: 'Political Science', duration: '4 Years', faculty: 'Social Sciences' },
    { name: 'Psychology', duration: '4 Years', faculty: 'Social Sciences' },
    { name: 'Sociology', duration: '4 Years', faculty: 'Social Sciences' },
    { name: 'Social Work', duration: '4 Years', faculty: 'Social Sciences' },
    // Computing and Digital Technology
    { name: 'Computer Science', duration: '4 Years', faculty: 'Computing and Digital Technology' },
    { name: 'Cyber Security', duration: '4 Years', faculty: 'Computing and Digital Technology' },
    { name: 'Information Technology', duration: '4 Years', faculty: 'Computing and Digital Technology' },
  ],
  postgraduate: [
    { name: 'MBA', duration: '2 Years', faculty: 'Management' },
    { name: 'MSc Computer Science', duration: '2 Years', faculty: 'Engineering' },
    { name: 'MSc Biochemistry', duration: '2 Years', faculty: 'Natural Sciences' },
    { name: 'PhD Programs', duration: '3-5 Years', faculty: 'Various' },
  ],
  parttime: [
    { name: 'Accounting (B.Sc.)', duration: '5 Years', faculty: 'Management Sciences' },
    { name: 'Banking and Finance (B.Sc.)', duration: '5 Years', faculty: 'Management Sciences' },
    { name: 'Marketing (B.Sc.)', duration: '5 Years', faculty: 'Management Sciences' },
    { name: 'Business Administration (B.Sc.)', duration: '5 Years', faculty: 'Management Sciences' },
    { name: 'Christian Religious Studies (B. A.)', duration: '5 Years', faculty: 'Humanities' },
  ],
};

const tabLabels: Record<string, string> = {
  undergraduate: 'Undergraduate',
  postgraduate: 'Postgraduate',
  parttime: 'Part-Time',
};

export function Academics() {
  const [activeTab, setActiveTab] = useState<'undergraduate' | 'postgraduate' | 'parttime'>('undergraduate');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/043A3555.jpg"
            alt="Academics"
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
            <span className="section-label">Academics</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              Academics at Redeemer's
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Discover our wide range of accredited programmes designed to prepare you for success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Faculties */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Our Faculties</span>
            <h2 className="text-section font-serif mt-3 mb-4">9 Faculties, Endless Possibilities</h2>
            <div className="decorative-line" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {faculties.map((faculty, index) => (
              <motion.a
                key={index}
                href={faculty.href || '#'}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                className="group relative block h-full bg-[#f8fafc] rounded-3xl p-8 text-center transition-all duration-500 hover:bg-[#1a365d] hover:shadow-2xl overflow-hidden min-h-[320px] flex flex-col items-center justify-center border border-gray-100 shadow-sm"
              >
                {/* Top-right "Visit Site" Badge */}
                <div className="absolute top-6 right-6 translate-y-0 opacity-100 lg:-translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
                  <span className="bg-[#c9a227] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    Visit Site
                  </span>
                </div>

                {/* Icon Container */}
                <div className="w-20 h-20 rounded-full bg-[#1a365d] group-hover:bg-[#c9a227] flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 shadow-lg group-hover:shadow-[#c9a227]/20">
                  <faculty.icon className="w-10 h-10 text-white transition-transform duration-500" />
                </div>

                {/* Faculty Details */}
                <h3 className="text-xl font-serif font-bold mb-3 text-[#1a365d] group-hover:text-white transition-colors duration-500 leading-tight">
                  {faculty.name}
                </h3>
                <p className="text-gray-500 group-hover:text-white/70 transition-colors duration-500 font-medium">
                  {faculty.programs} Programmes
                </p>

                {/* Bottom "Learn More" Link */}
                <div className="mt-8 flex items-center gap-2 text-[#c9a227] font-bold text-sm translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 transition-all duration-500 ease-out">
                  Learn More <ChevronRight className="w-4 h-4" />
                </div>

                {/* Subtle Background Glow */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#c9a227]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Programs */}
      <section id="undergraduate" className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">Programmes</span>
            <h2 className="text-section font-serif mt-3 mb-4">Explore Our Programmes</h2>
            <div className="decorative-line" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(['undergraduate', 'postgraduate', 'parttime'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? 'bg-[#1a365d] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tabLabels[tab]}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#c9a227] rounded-full"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                  />
                )}
              </button>
            ))}
            <Link
              to="/foundation-jupeb"
              className="px-6 py-3 rounded-lg font-medium transition-all duration-300 bg-white text-[#c9a227] hover:bg-[#c9a227] hover:text-white border border-[#c9a227]/30"
            >
              Foundation/JUPEB
            </Link>
          </div>

          {/* Program List */}
          {/* Program List */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            {activeTab === 'undergraduate' ? (
              <div className="space-y-16">
                {faculties.map((faculty, fIdx) => {
                  const facultyPrograms = programs.undergraduate.filter(p => p.faculty === faculty.name);
                  if (facultyPrograms.length === 0) return null;

                  return (
                    <motion.div 
                      key={fIdx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fIdx * 0.1 }}
                      className="space-y-8"
                    >
                      <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
                        <div className="w-12 h-12 rounded-xl bg-[#1a365d] flex items-center justify-center text-white shadow-lg">
                          <faculty.icon className="w-6 h-6 text-[#c9a227]" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-serif font-bold text-[#1a365d]">{faculty.name}</h3>
                          <p className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">{facultyPrograms.length} Programmes Offered</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facultyPrograms.map((program, pIdx) => (
                          <motion.div
                            key={pIdx}
                            whileHover={{ y: -4 }}
                            className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#c9a227]/20 group"
                          >
                            <div className="flex items-start justify-between mb-4">
                              <h4 className="text-lg font-bold text-[#1a365d] group-hover:text-[#c9a227] transition-colors leading-tight pr-4">
                                {program.name}
                              </h4>
                              <ChevronRight className="w-5 h-5 text-gray-300 group-hover:text-[#c9a227] group-hover:translate-x-1 transition-all flex-shrink-0" />
                            </div>
                            <div className="flex items-center gap-3 text-gray-500 text-sm">
                              <div className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 rounded-full group-hover:bg-[#1a365d]/5 transition-colors">
                                <Clock className="w-3.5 h-3.5" />
                                <span>{program.duration}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {programs[activeTab].map((program, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-between group hover:border-l-4 hover:border-l-[#c9a227]"
                  >
                    <div>
                      <h3 className="text-lg font-semibold mb-1 group-hover:text-[#c9a227] transition-colors">
                        {program.name}
                      </h3>
                      <p className="text-gray-500 text-sm">{program.faculty}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#c9a227] group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Part-Time Specific Info */}
          {activeTab === 'parttime' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 grid lg:grid-cols-2 gap-8"
            >
              {/* Requirements */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227]">
                    <Info className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold text-[#1a365d]">Admission Requirements</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Candidate must possess a minimum of Five (5) Credits Passes in SSCE/GCE or NECO in relevant subjects 
                  at not more than two sittings; in addition to OND/HND in relevant discipline.
                </p>
              </div>

              {/* Enquiries */}
              <div className="bg-[#1a365d] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227] flex items-center justify-center text-[#1a365d]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">For Enquiries</h3>
                </div>
                <div className="space-y-4 relative z-10">
                  <a href="https://dest.run.edu.ng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#c9a227] transition-colors">
                    <Globe className="w-5 h-5 opacity-60" />
                    <span>dest.run.edu.ng</span>
                  </a>
                  <a href="mailto:info.dest@run.edu.ng" className="flex items-center gap-3 hover:text-[#c9a227] transition-colors">
                    <Mail className="w-5 h-5 opacity-60" />
                    <span>info.dest@run.edu.ng</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 opacity-60" />
                    <span>0806 059 3785</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Postgraduate Specific Info */}
          {activeTab === 'postgraduate' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-16 max-w-2xl mx-auto"
            >
              <div className="bg-[#1a365d] rounded-3xl p-8 text-white shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-[#c9a227] flex items-center justify-center text-[#1a365d]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-bold">For Enquiries or to Apply</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 relative z-10">
                  For enquiries, contact the Secretary, College of Postgraduate Studies.
                </p>
                <div className="space-y-4 relative z-10">
                  <a href="https://cpgs.run.edu.ng" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#c9a227] transition-colors">
                    <Globe className="w-5 h-5 opacity-60" />
                    <span>cpgs.run.edu.ng</span>
                  </a>
                  <a href="mailto:sec.pgs@run.edu.ng" className="flex items-center gap-3 hover:text-[#c9a227] transition-colors">
                    <Mail className="w-5 h-5 opacity-60" />
                    <span>sec.pgs@run.edu.ng</span>
                  </a>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 opacity-60" />
                    <span>08033520396</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Research */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Research</span>
              <h2 className="text-section font-serif mt-3 mb-6">Research at RUN</h2>
              <div className="decorative-line-left mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">
                Redeemer's University is committed to advancing knowledge through cutting-edge research. 
                Our African Centre of Excellence for Genomics of Infectious Diseases (ACEGID) is a 
                World Bank-funded initiative that puts us at the forefront of biomedical research in Africa.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[#f8fafc] rounded-lg p-4 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-[#1a365d] mb-1">50+</div>
                  <div className="text-gray-500 text-sm">Research Projects</div>
                </motion.div>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-[#f8fafc] rounded-lg p-4 text-center hover:shadow-md transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-[#1a365d] mb-1">100+</div>
                  <div className="text-gray-500 text-sm">Publications</div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src="/images/research-lab.jpg"
                alt="Research Laboratory"
                className="rounded-2xl shadow-xl transition-transform duration-700 group-hover:scale-[1.02]"
              />
            </motion.div>
          </div>
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
            <GraduationCap className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Start Your Academic Journey
            </h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-8 max-w-xl mx-auto border border-white/20">
              <p className="text-white font-semibold mb-3 tracking-wide uppercase text-sm">For Enquiries or to Apply</p>
              <div className="space-y-2 text-white/90">
                <p className="flex items-center justify-center gap-2">
                  <span className="font-bold">Portal:</span> adms.run.edu.ng
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="font-bold">Email:</span> adms@run.edu.ng
                </p>
                <p className="flex items-center justify-center gap-2">
                  <span className="font-bold">Tel:</span> 07044482305
                </p>
              </div>
            </div>
            <a href="https://adms.run.edu.ng" target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Apply Now
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
