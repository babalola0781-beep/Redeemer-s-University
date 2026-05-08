import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, Star, TrendingUp, Trophy, Medal, CheckCircle2, Globe } from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function AwardsRankings() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const awards = [
    { title: "Best Use of Technology (Administration) Private University", year: "2022", type: "Institutional" },
    { title: "Private University Website/Portal of the Year", year: "2022", type: "Digital" },
    { title: "Excellence in Adopting Emerging Technologies Private University", year: "2022", type: "Innovation" },
    { title: "Best Private University in Science", year: "2022", type: "Academic" },
    { title: "2nd Overall Best University in Nigeria – NUS", year: "2021", type: "Ranking" },
    { title: "Best Private University in Nigeria", year: "2021", type: "Institutional" },
    { title: "Best Private University in Osun State", year: "2018, 2017, 2016, 2015", type: "Regional" },
    { title: "Best University in Life Sciences and Medicine in Nigeria-NURESDEF", year: "2016", type: "Academic" },
    { title: "Best University in Research – Nigeria Media Nite-Out Award", year: "2021", type: "Research" },
    { title: "Southwest Outstanding Private University of the Year", year: "2019, 2018", type: "Regional" },
    { title: "Winner, Al-Sumait Prize for African Development (Health)", year: "2021", type: "Global" },
    { title: "Winner, Alexander von Humboldt Grant", year: "2020", type: "Research" },
    { title: "Winner, Audacious Sentinel Project", year: "2020", type: "Innovation" },
    { title: "Winner, H3 Africa, USA", year: "2018, 2017, 2016, 2015", type: "Global" },
    { title: "Winner, ICHEM Global Award, UK", year: "2014", type: "Global" },
    { title: "Winner, NAS Gold Award for Best University in Science", year: "2021", type: "Academic" },
    { title: "Winner, Open Access Grant sponsored by INASP and UNESCO", year: "2017", type: "Global" },
    { title: "Winner, Seedling Labs Equipment Grant, USA", year: "2017, 2016", type: "Research" },
    { title: "Winner, UNIDO-Nigeria National Quality Infrastructural Gold Award", year: "2018, 2017", type: "Institutional" },
    { title: "Winner, World Bank-funded African Centre of Excellence for the Genomics of Infectious Diseases", year: "2021", type: "Research" }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/awards-rankings.jpg"
            alt="Awards and Rankings"
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
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10"
          >
            <span className="section-label text-[#c9a227]">Foothold of Excellence</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight max-w-4xl">
              Awards & Global Rankings
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Celebrating our commitment to academic rigour, research innovation, and institutional transparency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Milestones</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Our Roll of Honour</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#f0f4f8] flex items-center justify-center group-hover:bg-[#1a365d] transition-all duration-500">
                    <Award className="w-6 h-6 text-[#c9a227]" />
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-[#f8fafc] text-[#1a365d] text-[10px] font-bold uppercase tracking-widest border border-gray-100">
                    {award.year}
                  </span>
                </div>
                
                <span className="text-[10px] font-bold text-[#c9a227] uppercase tracking-widest mb-2 block">
                  {award.type}
                </span>
                <h3 className="text-lg font-serif font-bold text-[#1a365d] leading-snug group-hover:text-[#c9a227] transition-colors">
                  {award.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { label: 'Global Awards', value: '10+', icon: Globe },
              { label: 'National Rankings', value: '#2 Overall', icon: TrendingUp },
              { label: 'Research Grants', value: '15+', icon: Trophy },
              { label: 'Consecutive Years', value: '20', icon: Medal }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#1a365d]/5 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div className="text-3xl font-serif font-bold text-[#1a365d] mb-1">{stat.value}</div>
                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Impact Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Excellence in Research</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">A World-Class Research Institution</h2>
              <div className="decorative-line-left mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Redeemer's University continues to lead in scientific breakthroughs and institutional excellence. 
                Our recognition by the World Bank, UNESCO, and major international funding bodies is a testament 
                to our rigorous academic standards and impact-driven research environment.
              </p>
              <div className="space-y-4">
                {[
                  "Pioneer in Genomics Research of Infectious Diseases",
                  "Top-Ranked Private University for Digital Adoption",
                  "Leading Regional Hub for Sustainable Development"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#c9a227]" />
                    <span className="text-[#1a365d] font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#f8fafc]">
                <img 
                  src="/images/awards-rankings.jpg" 
                  alt="Institutional Excellence" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#c9a227] p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <Star className="w-10 h-10 mb-4" />
                <p className="text-2xl font-serif font-bold mb-1">Top 2</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Best University in Nigeria (NUS 2021)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
