import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Trophy, Medal, Star, Users, ArrowRight, Dumbbell } from 'lucide-react';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function Sports() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src="/images/Sports-scaled.jpg" alt="Campus Sports Complex" className="w-full h-[130%] object-cover" />
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
            <span className="section-label">Athletics & Recreation</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">Sports at RUN</h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">We take sports as a critical extracurricular activity because of its importance to life.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Athletics</span>
              <h2 className="text-3xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Championing Excellence</h2>
              <div className="decorative-line-left mb-6" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>In Redeemer's University, students are encouraged to participate in different sporting activities such as football, basketball, volleyball, lawn tennis, table tennis, athletics, and indoor games.</p>
                <p>We partake in the annual Nigeria Private University Games Association (NPUGA), and have won various medals since we started participating.</p>
              </div>
              <motion.div whileHover={{ y: -4 }} className="bg-[#f8fafc] border border-gray-100 p-6 rounded-xl mt-8 hover:shadow-md transition-all">
                <h4 className="font-bold text-[#1a365d] flex items-center gap-2 mb-2"><Star className="w-5 h-5 text-[#c9a227]" /> Scholarship Opportunities</h4>
                <p className="text-gray-600 text-base">Students who excel in these events are given scholarships to support their ongoing academic and athletic careers simultaneously.</p>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-4 h-[600px]">
              <div className="space-y-4">
                <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group">
                  <img src="/images/Sports-at-RUN-1.jpg" alt="RUN Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group">
                  <img src="/images/Sports-at-RUN-2.jpg" alt="RUN Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group">
                  <img src="/images/Sports-at-RUN-3.jpg" alt="RUN Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="h-1/2 rounded-2xl overflow-hidden shadow-md group">
                  <img src="/images/Sports-at-RUN-4.jpg" alt="RUN Sports" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Events</span>
            <h2 className="text-section font-serif mt-3 mb-4">Competitions & Events</h2>
            <div className="decorative-line mx-auto" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">Various sporting competitions are organised to foster teamwork, health, and a dynamic student spirit.</p>
          </div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Vice-Chancellor's Cup", icon: Trophy },
              { title: "League of Champions", icon: Target },
              { title: "RUNSA Marathon", icon: Medal },
              { title: "Inter-level Sports", icon: Users },
            ].map((comp, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="feature-card flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#1a365d]/10 flex items-center justify-center mb-6">
                  <comp.icon className="w-8 h-8 text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a365d]">{comp.title}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 cta-gradient">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Dumbbell className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Join the Sporting Spirit</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">Be part of a vibrant athletic community and represent Redeemer's University on the national stage.</p>
            <a href="/admissions" className="btn-secondary">Apply Now <ArrowRight className="w-5 h-5" /></a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
