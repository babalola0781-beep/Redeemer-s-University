import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, Coffee, Pizza, Croissant, ChefHat, ArrowRight, Clock, Truck } from 'lucide-react';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const cafeterias = [
  { name: 'Manna Palace', icon: Coffee },
  { name: 'National Kitchen', icon: Utensils },
  { name: 'Double Portion', icon: Pizza },
  { name: "Mimi's", icon: Croissant },
  { name: 'Divine Hands', icon: Utensils },
];

export function Dining() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src="/images/Feeding-scaled.jpg" alt="Campus Dining" className="w-full h-[130%] object-cover" />
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
            <span className="section-label">Student Nutrition</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">Dining on Campus</h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">Experience diverse, high-quality local and continental dishes provided across strategic locations.</p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Options</span>
              <h2 className="text-3xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Cafeteria Options</h2>
              <div className="decorative-line-left mb-6" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg mb-8">
                <p>There are five cafeterias at strategic points on campus that provide both local and continental dishes for staff and students.</p>
                <p>These cafeterias provide pay-as-you-eat options or a subscription feeding package for a semester. Some also provide direct delivery services to the halls of residence.</p>
              </div>

              <div className="bg-[#f8fafc] p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold font-serif mb-4 flex items-center gap-2 text-[#1a365d]">
                  <ChefHat className="w-6 h-6 text-[#c9a227]" /> Our Cafeterias
                </h3>
                <motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-y-4 gap-x-2">
                  {cafeterias.map((cafe, idx) => (
                    <motion.li key={idx} variants={fadeUp} className="flex items-center gap-3 group">
                      <div className="w-8 h-8 rounded-full bg-[#1a365d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#c9a227] transition-colors duration-300">
                        <cafe.icon className="w-4 h-4 text-[#1a365d] group-hover:text-white transition-colors" />
                      </div>
                      <span className="font-semibold text-gray-800">{cafe.name}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-2xl h-[600px] group">
              <img src="/images/Feeding-options-at-RUN.jpg" alt="Dining Facilities" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/50 to-transparent mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meal Highlights */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Features</span>
            <h2 className="text-section font-serif mt-3 mb-4">Dining Highlights</h2>
            <div className="decorative-line" />
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Utensils, title: 'Local & Continental', desc: 'A diverse menu featuring traditional Nigerian cuisine and international dishes.' },
              { icon: Clock, title: 'Flexible Plans', desc: 'Choose between pay-as-you-eat or semester subscription packages.' },
              { icon: Truck, title: 'Room Delivery', desc: 'Select cafeterias offer direct delivery to halls of residence.' },
            ].map((item, idx) => (
              <motion.div key={idx} variants={fadeUp} whileHover={{ y: -6 }} className="feature-card text-center">
                <div className="w-16 h-16 rounded-full bg-[#1a365d]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#c9a227]" />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 cta-gradient">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Utensils className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Taste the RUN Experience</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">Enjoy nutritious, diverse meals that fuel both your body and mind throughout your academic journey.</p>
            <a href="/admissions" className="btn-secondary">Apply Now <ArrowRight className="w-5 h-5" /></a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
