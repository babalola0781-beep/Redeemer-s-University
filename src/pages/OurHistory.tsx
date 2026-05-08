import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, MapPin, Target, Award } from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function OurHistory() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[75vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/History-scaled.jpg"
            alt="Redeemer's University Heritage"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-[#1a365d]/70 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#1a365d]" />
        </motion.div>
        
        <div className="relative z-10 container-custom text-center text-white pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md"
          >
            <span className="section-label">A Legacy of Faith</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              Our History
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
              Traces of excellence, service, and a vision to transform the world 
              through university education rooted in Christian values.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Beginning Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="section-label">The Foundation</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">The Dream & The Vision</h2>
              <div className="decorative-line-left mb-8" />
              
              <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p>
                  It has always been the desire of the Redeemed Christian Church of God (RCCG) to make input into university education in Nigeria, having been convinced of the great role university education can play in the social and technological development of a nation.
                </p>
                <p>
                  This dream could not come true because of the existence of Decree No. 19 of 1984, which proscribed and banned the establishment and operation of private universities. 
                </p>
                <p>
                  The opportunity was however made available by the Federal Government of Nigeria, when Decree No. 9 of 1993 was promulgated, allowing private individuals or organisations to establish universities in Nigeria, provided they meet certain criteria laid down by the Federal Government through the National Universities Commission (NUC).
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[550px]">
                <img 
                  src="/images/history-img-1.jpg" 
                  alt="Historical Milestone" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-[#1a365d]/20 mix-blend-overlay" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Expansion Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Strategic Growth</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Acquisition & Expansion</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="grid grid-cols-2 gap-4 h-[600px]"
             >
                <div className="space-y-4">
                  <div className="h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/history-school-overview-2.jpg" alt="Campus Overview" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[35%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/histroy-img-2.jpg" alt="University Event" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                   <div className="h-[35%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/043A4070.jpg" alt="University Facility" className="w-full h-full object-cover" />
                  </div>
                  <div className="h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                    <img src="/images/DJI_0702-scaled.jpg" alt="Aerial View" className="w-full h-full object-cover" />
                  </div>
                </div>
             </motion.div>

             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="space-y-8"
             >
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    In order to realise its dream, the RCCG and the proprietors of the university initially acquired a large expanse of land in Ede South Local Government Area of Osun State, having obtained the Certificate of Statutory Right of Occupancy in 1997. The site of the university covers an area of about 812 hectares.
                  </p>
                  <p>
                    However, during an assessment visit of facilities for the take-off of the university, the NUC advised the acquisition of a parcel of land within the vicinity of the take-off campus as the permanent site.
                  </p>
                  <p>
                    Therefore, the university, through the proprietor, acquired about 500 hectares of land close to the take-off campus situated between Ibafo and Asese Junction at Obafemi Owode Local Government Area of Ogun State on Lagos/Ibadan Expressway.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a365d]">Ede Campus</h4>
                      <p className="text-sm text-gray-500">812 Hectares (Osun State)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-[#c9a227]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1a365d]">Permanent Site</h4>
                      <p className="text-sm text-gray-500">500 Hectares (Ogun State)</p>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy & Manpower Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-center mb-16"
             >
                <span className="section-label">Our Philosophy</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">A Noble Effort</h2>
                <div className="decorative-line mx-auto mb-8" />
                <p className="text-xl text-gray-600 leading-relaxed">
                  The proprietors of RUN have followed with keen interest the development of university education in Nigeria and are poised not only to provide additional places but to considerably improve upon the existing standard of delivery.
                </p>
             </motion.div>

             <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Target,
                    title: "Entrepreneurship",
                    text: "Nurturing the spirit of entrepreneurship so graduates create jobs rather than relying on scarce employment."
                  },
                  {
                    icon: Award,
                    title: "Quality Control",
                    text: "Focusing on both quantity and quality, adopting phased development of major disciplines."
                  },
                  {
                    icon: GraduationCap,
                    title: "Requisite Manpower",
                    text: "Producing high-level manpower required for the social and technological development of the nation."
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeUpItem}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-[#f8fafc] p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="w-14 h-14 rounded-full bg-[#1a365d] flex items-center justify-center mb-6 group-hover:bg-[#c9a227] transition-colors">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-[#1a365d] mb-4">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                  </motion.div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* Closing Statement */}
      <section className="py-24 cta-gradient relative overflow-hidden text-white text-center">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 italic">
              "To satisfy the requirements of NUC and professional bodies for accreditation while staying true to our objectives."
            </h2>
            <div className="w-24 h-1 bg-[#c9a227] mx-auto mb-8" />
            <p className="text-white/80 text-lg uppercase tracking-widest font-semibold">
              Redeemer's University
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </section>
    </main>
  );
}
