import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Target, 
  Globe, 
  BookOpen, 
  Heart, 
  ExternalLink,
  Zap,
  CheckCircle2,
  Search
} from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function CGHDS() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const mandates = [
    {
      title: "Research Mandate",
      desc: "Forging alliance and collaborating with researchers in local and international sister institutions to facilitate multi-sectoral and transdisciplinary development-oriented research.",
      icon: Search
    },
    {
      title: "Academic Mandate",
      desc: "Production of knowledge through teaching, research, seminars, and conferences via degree and non-degree programmes.",
      icon: BookOpen
    },
    {
      title: "Social Policy Mandate",
      desc: "Enhancing the institutionalization of gender-responsive learning; town-gown community-development services targeting vulnerable groups.",
      icon: Heart
    }
  ];

  const objectives = [
    "Design and develop academic programmes in Gender, Humanitarian and Development Studies.",
    "Work with other Departments and Colleges to engender their academic courses.",
    "Equip staff/students and policymakers with analytical skills for gender and development issues.",
    "Mainstream gender analytical frameworks into curricula and administrative systems.",
    "Initiate training programmes on gender mainstreaming in higher institutions.",
    "Build national capacity on humanitarian response and social development planning.",
    "Promote inter/transdisciplinary research for sustainable development.",
    "Promote research on contemporary issues of equity, equality, and human rights.",
    "Maintain a database on gender, humanitarian and development issues.",
    "Establish professional courses for policymakers and NGOs.",
    "Build partnerships with government and civil society organizations.",
    "Initiate research fellowships and forge linkages with international institutions.",
    "Organize national and international conferences and workshops."
  ];

  const initiatives = [
    { year: "2021", title: "Gender Methodology Workshop", desc: "Raising institutional awareness and engendering behavioural change." },
    { year: "2021", title: "16 Days of Activism", desc: "Theme: 'Together We Can: Ending Gender-based Violence in Nigeria'." },
    { year: "2023", title: "International Women’s Day", desc: "Theme: 'DigitALL: Innovation and Technology'." },
    { year: "2023", title: "CGHDS-IC Launch", desc: "Raising awareness about pressing global challenges in Nigeria." },
    { year: "2023", title: "RUN Sickle Cell+ Club", desc: "Resuscitation of the club to support community health." },
    { year: "2023", title: "Institutional Migration Training", desc: "Promoting effective labour migration and standardized recruitment." },
    { year: "2024", title: "International Women’s Day", desc: "Theme: 'Inspire Inclusion, Count Her In and Accelerate Progress'." },
    { year: "2024", title: "World Sickle Cell Day", desc: "Theme: 'Hope Through Progress: Advancing Sickle Cell Care Globally'." }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/cghds.png"
            alt="CGHDS"
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
            <span className="section-label text-[#c9a227]">Centre of Excellence</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight max-w-4xl">
              Centre for Gender, Humanitarian and Development Studies (CGHDS)
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Ensuring that no one is left behind in the process of sustainable development through interdisciplinary research and advocacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Philosophy */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Foundation</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Established in Excellence</h2>
              <div className="decorative-line-left mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Established in October 2020, CGHDS was founded as a centre of excellence for research, 
                  consultancies, and the interdisciplinary study of Gender, Humanitarian and Development Studies.
                </p>
                <p>
                  Our philosophy is committed to research, training, and advocacies that reduce social inequalities 
                   and accelerate the creation of inclusive, resilient, and secure societies.
                </p>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-[#f8fafc] rounded-3xl border border-gray-100 shadow-sm"
              >
                <Target className="w-10 h-10 text-[#c9a227] mb-6" />
                <h4 className="font-bold text-[#1a365d] mb-2">Vision</h4>
                <p className="text-sm text-gray-600 leading-relaxed">Attainment of equity, inclusion and sustainable development through policy analysis.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 bg-[#1a365d] text-white rounded-3xl border border-white/5 shadow-xl"
              >
                <Zap className="w-10 h-10 text-[#c9a227] mb-6" />
                <h4 className="font-bold mb-2">Mission</h4>
                <p className="text-sm text-white/70 leading-relaxed">Promoting studies globally accepted as strategies for the attainment of development.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mandates */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Our Mandate</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Core Strategic Pillars</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {mandates.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#f0f4f8] flex items-center justify-center mb-8 group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-500">
                  <item.icon className="w-8 h-8 text-[#c9a227]" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <Globe className="absolute -top-20 -right-20 w-96 h-96" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <span className="section-label">The Roadmap</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Strategic Objectives</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {objectives.map((obj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 bg-[#f8fafc] rounded-2xl border border-gray-100 hover:border-[#c9a227]/30 transition-colors"
              >
                <CheckCircle2 className="w-6 h-6 text-[#c9a227] shrink-0 mt-1" />
                <p className="text-gray-700 font-medium leading-relaxed">{obj}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Consortium & Timeline */}
      <section className="section-padding bg-[#1a365d] text-white relative">
        <div className="container-custom relative z-10">
          <div className="text-center mb-20">
            <span className="section-label text-[#c9a227]">Global Impact</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-4">Consortium & Initiatives</h2>
            <div className="w-20 h-1 bg-[#c9a227] mx-auto" />
          </div>

          <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:left-1/2 md:-translate-x-1/2 space-y-12">
            {initiatives.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative pl-10 md:pl-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right md:ml-0' : 'md:pl-16 md:ml-auto'}`}
              >
                <div className={`absolute top-0 w-8 h-8 rounded-full bg-[#c9a227] border-4 border-[#1a365d] shadow-xl z-20 ${idx % 2 === 0 ? 'left-[-17px] md:right-[-17px] md:left-auto' : 'left-[-17px]'}`} />
                
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group">
                  <span className="inline-block px-4 py-1 bg-[#c9a227] text-[#1a365d] rounded-full text-xs font-bold mb-4">{item.year}</span>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[#c9a227] transition-colors">{item.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Link Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#f8fafc] rounded-[3.5rem] p-12 md:p-20 text-center relative overflow-hidden border border-gray-100">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#c9a227]/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <Globe className="w-16 h-16 text-[#c9a227] mx-auto mb-8" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mb-6">Explore Our Digital Presence</h2>
              <p className="text-gray-600 text-lg mb-12">
                Stay updated with our latest research, events, and community interventions through our official portal.
              </p>
              
              <a 
                href="https://cghds.run.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[#1a365d] text-white rounded-2xl font-bold hover:bg-[#c9a227] hover:shadow-2xl transition-all duration-500 group"
              >
                Visit Official Website <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
