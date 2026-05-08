import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, 
  History, 
  Briefcase, 
  Award, 
  Globe, 
  ArrowRight,
  CheckCircle2,
  Rocket,
  ShieldCheck
} from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function RUNCEDS() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const partnerships = [
    {
      year: "2014 - 2020",
      title: "Wholistic International Ministry",
      desc: "Partnership with Pastor (Mrs) Folu Adeboye’s ministries for vocational training and transformative certifications."
    },
    {
      year: "2019",
      title: "Tony Elumelu Foundation",
      desc: "Student participation in Africa-wide entrepreneurship competitions with $5,000 seed funding opportunities."
    },
    {
      year: "2019",
      title: "RMRDC & University of Abuja",
      desc: "Collaborative invitations for exhibitions in Research & Development, Science, and Technology."
    },
    {
      year: "2020",
      title: "NUC Curriculum Development",
      desc: "Developed BSc Entrepreneurship Studies curriculum in alignment with NUC searchlight on skill development."
    },
    {
      year: "2021",
      title: "Central Bank of Nigeria (TIES)",
      desc: "Participation in the Tertiary Institutions Entrepreneurial Scheme (TIES) for developmental grants up to N250 million."
    },
    {
      year: "2022",
      title: "TEDx Osogbo",
      desc: "Collaboration for sharing ideas across technology, entertainment, design, and business development."
    },
    {
      year: "2022",
      title: "Side Hustle Nigeria",
      desc: "Partnership aimed at building the African workforce and equipping youth with in-demand global skills."
    },
    {
      year: "2023",
      title: "Realtypoint Business School",
      desc: "Strategic partnership for Real Estate Entrepreneurship modules within the MBA programme."
    },
    {
      year: "2024",
      title: "Corporate Affairs Commission",
      desc: "Training students on business registration processes to become independent owners before graduation."
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/runceds.png"
            alt="RUNCEDS"
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
            <span className="section-label text-[#c9a227]">Specialized Centre</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight max-w-4xl">
              Centre for Entrepreneurial Development Studies (RUNCEDS)
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Transforming the products of this institution into self-employed graduates and future employers of labour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Mission */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Journey</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Established in 2013</h2>
              <div className="decorative-line-left mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Established twelve years ago, RUNCEDS was created with the singular purpose of driving the 
                  University's vision to transform its products into self-employed graduates and future employers.
                </p>
                <p>
                  The Centre anchors its mandate on entrepreneurship development and innovation, managing 
                  compulsory vocational courses (ENT 211 & ENT 212) that bridge the gap between theory and practice.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-8 bg-[#f8fafc] rounded-3xl border border-gray-100 shadow-sm"
                >
                  <Rocket className="w-10 h-10 text-[#c9a227] mb-6" />
                  <h4 className="font-bold text-[#1a365d] mb-2">Innovation</h4>
                  <p className="text-sm text-gray-600">Driving the university's mandate for enterprise engagement.</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="p-8 bg-[#1a365d] text-white rounded-3xl border border-white/5 shadow-xl"
                >
                  <Briefcase className="w-10 h-10 text-[#c9a227] mb-6" />
                  <h4 className="font-bold mb-2">Self-Reliance</h4>
                  <p className="text-sm text-white/70">Equipping students with capacity for lifelong professional success.</p>
                </motion.div>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="bg-[#f8fafc] p-12 rounded-[3.5rem] border border-gray-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a227]/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-6">Our Mandate</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0" /> Vocational and skill acquisition excellence.</p>
                  <p className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0" /> Production of self-reliant graduates.</p>
                  <p className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-[#c9a227] shrink-0" /> Professional ethics and enterprise engagement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal & Achievements */}
      <section className="section-padding bg-[#f8fafc] relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">The Objective</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Vision for Global Competitiveness</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 mb-20">
            <div className="flex flex-col md:flex-row gap-10 items-center">
              <div className="shrink-0 w-24 h-24 rounded-full bg-[#c9a227]/10 flex items-center justify-center">
                <Target className="w-12 h-12 text-[#c9a227]" />
              </div>
              <p className="text-gray-700 text-xl leading-relaxed italic text-center md:text-left">
                "Our goal is the production of graduates who are nationally relevant, globally competitive, 
                intellectually equipped and self-reliant through theoretical and practical real-life work experience."
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div variants={fadeUpItem} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#1a365d] text-lg mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#c9a227]" /> 23 Active Vocations
              </h4>
              <p className="text-gray-600">Currently deploying diverse skill acquisition programmes despite teething challenges.</p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#1a365d] text-lg mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#c9a227]" /> Town & Gown
              </h4>
              <p className="text-gray-600">Bridging the gap between academic theory and real-world industrial practice.</p>
            </motion.div>
            <motion.div variants={fadeUpItem} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h4 className="font-bold text-[#1a365d] text-lg mb-4 flex items-center gap-2">
                <ShieldCheck className="text-[#c9a227]" /> BSc Entrepreneurship
              </h4>
              <p className="text-gray-600">Curriculum developed and ready for deployment in collaboration with the Business Dept.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships Timeline */}
      <section className="section-padding bg-[#1a365d] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Globe className="absolute -top-24 -right-24 w-96 h-96" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <span className="section-label text-[#c9a227]">Strategic Alliances</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-4">Partnerships & Collaborations</h2>
            <div className="w-20 h-1 bg-[#c9a227] mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerships.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-4 py-1 bg-[#c9a227] text-[#1a365d] rounded-full text-xs font-bold">{item.year}</span>
                  <History className="w-5 h-5 text-white/20 group-hover:text-[#c9a227] transition-colors" />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-[#c9a227] transition-colors">{item.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#f8fafc] rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden border border-gray-100 shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a227]/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <Award className="w-16 h-16 text-[#c9a227] mx-auto mb-8" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-8">Empowering Tomorrow's Industry Leaders</h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-12">
                Join our vocational programmes and develop the technical capacity to build your own legacy before you graduate.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6">
                <a href="/contact" className="px-10 py-5 bg-[#1a365d] text-white rounded-2xl font-bold hover:bg-[#c9a227] hover:shadow-2xl transition-all duration-500 flex items-center gap-3">
                  Inquire About Vocations <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="mt-16 flex items-center justify-center gap-2 text-gray-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#c9a227]" />
                Building a Workforce of Self-Reliant Professionals
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
