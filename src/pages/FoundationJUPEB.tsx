import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, GraduationCap, CheckCircle2, Globe } from 'lucide-react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';

const fadeUpItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const courses = [
  "Accounting", "Actuarial Science", "Anatomy", "Architecture", "Banking & Finance",
  "Biochemistry", "Building Technology", "Business Administration", "Christian Religious Studies",
  "Civil Engineering", "Computer Engineering", "Computer Science", "Economics",
  "Electrical and Electronic Engineering", "English", "Estate Management", 
  "History & International Studies", "Industrial Chemistry", "Industrial Mathematics", "Law",
  "Marketing", "Mass Communication", "Mechanical Engineering", "Microbiology",
  "Nursing Science", "Physics with Electonics", "Physiology", "Physiotherapy",
  "Political Science", "Quantity Surveying", "Surveying & Geoinformatics", 
  "Theatre Arts / Film Studies", "Tourism Studies", "Transport Management", 
  "Urban & Regional Planning"
];

export function FoundationJUPEB() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/jupeb-hero.jpg"
            alt="Foundation and JUPEB"
            className="w-full h-[130%] object-cover opacity-50"
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
            <GraduationCap className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Foundation / JUPEB Programme
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Your accelerated pathway to a degree at Redeemer's University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUpItem}>
                <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-4">Foundation Programme</h2>
                <div className="w-12 h-1 bg-[#c9a227] mb-6" />
                <p className="text-gray-600 leading-relaxed text-lg">
                  The Foundation programme has been designed to run intensively for one academic session to prepare candidates for external examination conducted by the Joint Universities Preliminary Examination Boards (JUPEB). Successful candidates may proceed into the degree programmes of Redeemer's University via the Direct-entry option into 200-Level.
                </p>
              </motion.div>

              <motion.div variants={fadeUpItem} className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100">
                <h3 className="text-xl font-bold text-[#1a365d] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#c9a227]" />
                  Admission Requirement
                </h3>
                <p className="text-gray-600">
                  Candidates must possess a minimum of five (5) credit passes in SSCE/GCE/NECO in relevant subjects at a sitting or two sittings.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              <motion.div variants={fadeUpItem}>
                <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-4">Conditions for 200 Level</h2>
                <div className="w-12 h-1 bg-[#c9a227] mb-6" />
                <ul className="space-y-4">
                  {[
                    "Candidates must obtain JAMB Direct Entry application form and choose Redeemer's University.",
                    "Candidates can only be offered admission into 200 level for courses enrolled at Foundation Programme.",
                    "Candidates must pass all the subjects offered in the Foundation Programme at a satisfactory level.",
                    "Candidates must obtain and submit the University admission form for Direct Entry."
                  ].map((condition, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-[#1a365d]/10 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle2 className="w-4 h-4 text-[#1a365d]" />
                      </div>
                      <span className="text-gray-600 leading-relaxed">{condition}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JUPEB Section */}
      <section className="section-padding bg-[#1a365d] text-white">
        <div className="container-custom">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-12"
          >
            <motion.div variants={fadeUpItem} className="text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">About JUPEB</h2>
              <div className="w-16 h-1 bg-[#c9a227] mx-auto mb-8" />
              <p className="text-white/80 leading-relaxed text-lg mb-6">
                JUPEB is the Joint Universities Preliminary Examinations Board, with its headquarters in Lagos. It was set up through a consortium of some Nigeria Universities to unify the admission process of partner institutions through their respective preliminary programmes.
              </p>
            </motion.div>

            <motion.div variants={fadeUpItem} className="grid md:grid-cols-2 gap-8">
              <div className="glass-dark p-8 rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-[#c9a227] mb-4">Eligibility Requirements</h3>
                <p className="text-white/80 leading-relaxed mb-4 text-sm">
                  To be eligible to take examinations leading to the award of JUPEB's Direct Entry Certificates, the candidate must have undergone an intensive academic work relevant to his/her proposed university course.
                </p>
                <ul className="space-y-3 text-white/70 text-sm">
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227] shrink-0 mt-2" />Register, sit for Examinations and satisfy the Board in three subjects and a General Studies course.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227] shrink-0 mt-2" />Take twelve (12) courses, six per semester, and a General Studies course.</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227] shrink-0 mt-2" />Each subject is broken into four courses (two per semester).</li>
                  <li className="flex gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#c9a227] shrink-0 mt-2" />Must satisfy all other conditions prescribed by the university of choice.</li>
                </ul>
              </div>
              <div className="glass-dark p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#c9a227] mb-4">Duration</h3>
                  <p className="text-white/80 leading-relaxed">
                    The duration of the Programme of courses for the Board's Examination is a minimum of one academic session of two semesters.
                  </p>
                </div>
                <div className="mt-8">
                  <a href="https://www.jupeb.edu.ng" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#c9a227] text-white font-semibold hover:bg-white hover:text-[#1a365d] transition-all duration-300 w-full">
                    <Globe className="w-5 h-5" /> Visit JUPEB Official Site
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Available Courses */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">200 Level</span>
            <h2 className="text-section font-serif mt-3 mb-4">Available Courses</h2>
            <div className="decorative-line" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Candidates who meet the JUPEB requirements for admission may be admitted into 200 Level after successful completion of the Foundation Programme.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {courses.map((course, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow hover:border-[#c9a227]/30 flex items-center gap-3 group"
              >
                <div className="w-2 h-2 rounded-full bg-[#1a365d] group-hover:bg-[#c9a227] transition-colors" />
                <span className="text-gray-700 font-medium text-sm">{course}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#1a365d] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-serif font-bold text-white mb-6">Contact Information</h2>
                <div className="w-12 h-1 bg-[#c9a227] mb-8" />
                
                <div className="space-y-6 text-white/90">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#c9a227] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">DEST Office</h4>
                      <p>Redeemer's University, Ede, Osun State</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#c9a227] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-white mb-1">Redeemer's University Liaison Office</h4>
                      <p>RCCG Camp, Mowe, Ogun State</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-[#c9a227] shrink-0" />
                    <div>
                      <p>0806 059 3785, 0815 046 5869</p>
                      <p>0815 046 5868, 0807 300 4715</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-[#c9a227] shrink-0" />
                    <a href="mailto:info.dest@run.edu.ng" className="hover:text-[#c9a227] transition-colors">
                      info.dest@run.edu.ng
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-[#c9a227] shrink-0" />
                    <a href="https://dest.run.edu.ng" target="_blank" rel="noopener noreferrer" className="hover:text-[#c9a227] transition-colors">
                      www.dest.run.edu.ng
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="relative min-h-[400px] bg-[#c9a227]">
                <img 
                  src="/images/dest.jpg" 
                  alt="Students" 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
