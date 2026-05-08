import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shield, Music, Star, BookOpen } from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function MottoLogoAnthem() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const colors = [
    { name: 'Blue', hex: '#1a365d', desc: 'Represents the love of God which is shed abroad in our hearts and which binds all cadres of the university together.', image: '/images/runlog/blue.png' },
    { name: 'White', hex: '#ffffff', desc: 'Represents holiness and purity of thought, word and deed – essential ingredients of peace.', image: '/images/runlog/white.png' },
    { name: 'Green', hex: '#059669', desc: 'Signifies power, fruitfulness and progress.', image: '/images/runlog/Green.png' },
    { name: 'Gold', hex: '#c9a227', desc: 'Represents the colour of light and knowledge, empowering students to take the nation to greater heights.', image: '/images/runlog/Gold.png' }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/runlog/RUN-Motto-Logo-Anthem-scaled.jpg"
            alt="Redeemer's University Identity"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-[#1a365d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#1a365d]" />
        </motion.div>
        
        <div className="relative z-10 container-custom text-center text-white pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md"
          >
            <span className="section-label text-[#c9a227]">Our Identity</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight">
              Motto, Logo & Anthem
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              The sacred symbols and guiding principles that define the spirit of Redeemer's University.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="section-label">The Motto</span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] italic">
                "Running With The Vision"
              </h2>
              <div className="decorative-line mx-auto" />
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                The vision is to be the foremost institution for producing graduates who combine academic excellence 
                in the practice of their profession with God-fearing attributes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="section-label">Our Logo</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Symbolism & Design</h2>
                <div className="decorative-line-left mb-6" />
              </div>
              
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  The logo of the university includes a **dove** and an **open book**. The dove is a symbol of the Holy Spirit shining the light of knowledge on students of the university from all nations of the world.
                </p>
                <div className="flex items-center gap-6 p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-16 h-16 rounded-xl bg-[#1a365d]/5 flex items-center justify-center shrink-0">
                    <Shield className="w-8 h-8 text-[#1a365d]" />
                  </div>
                  <p className="text-sm italic text-gray-500">
                    The open book signifies our commitment to character and learning, illuminated by spiritual wisdom.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white p-12 rounded-[2rem] shadow-2xl relative z-10 flex items-center justify-center">
                <img 
                  src="/images/runlog/colored-logo (1).png" 
                  alt="Redeemer's University Logo" 
                  className="max-w-full h-auto"
                />
              </div>
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#c9a227]/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-[#1a365d]/10 rounded-full blur-2xl -z-10" />
            </motion.div>
          </div>

          {/* Color Palette */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-serif font-bold text-[#1a365d]">The Colors of RUN</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {colors.map((color, idx) => (
                <motion.div
                  key={color.name}
                  variants={fadeUpItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <div className="h-24 rounded-xl mb-6 overflow-hidden flex items-center justify-center bg-gray-50">
                    <img src={color.image} alt={color.name} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a365d] mb-2">{color.name}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{color.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anthem Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <Music className="w-96 h-96 absolute -top-24 -left-24 rotate-12" />
          <Music className="w-64 h-64 absolute -bottom-12 -right-12 -rotate-12" />
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">Our Song</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">University Anthem</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Verse 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] p-10 rounded-3xl border border-gray-100"
            >
              <h4 className="text-[#c9a227] font-bold uppercase tracking-widest text-xs mb-6">Stanza I</h4>
              <div className="space-y-2 text-xl font-serif text-[#1a365d] leading-relaxed italic">
                <p>The vision has been planted</p>
                <p>With all our hearts set on high</p>
                <p>For the truth we’ll always stand</p>
                <p>In this great land far and wide</p>
                <p>We are running day by day</p>
                <p>With the vision we have seen</p>
                <p>To change the world we are living in</p>
                <p>As we are ablaze for God!</p>
              </div>
            </motion.div>

            {/* Verse 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#f8fafc] p-10 rounded-3xl border border-gray-100"
            >
              <h4 className="text-[#c9a227] font-bold uppercase tracking-widest text-xs mb-6">Stanza II</h4>
              <div className="space-y-2 text-xl font-serif text-[#1a365d] leading-relaxed italic">
                <p>United a team we are</p>
                <p>In Redeemer’s Varsity</p>
                <p>Declaring to the whole world</p>
                <p>What character’nd learning can do</p>
                <p>We are building day by day</p>
                <p>Taking charge with humble hearts</p>
                <p>And onward pressing marching on</p>
                <p>To change the world for God!</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a365d] text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <div className="flex justify-center gap-4">
              <Star className="w-8 h-8 text-[#c9a227]" />
              <BookOpen className="w-8 h-8 text-[#c9a227]" />
              <Star className="w-8 h-8 text-[#c9a227]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold italic">
              "To change the world we are living in, As we are ablaze for God!"
            </h2>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
