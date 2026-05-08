import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, 
  Settings, 
  Users, 
  Globe, 
  ShieldCheck, 
  Lightbulb, 
  MessageSquare, 
  LifeBuoy, 
  Hammer, 
  Briefcase,
  Heart,
  Droplets,
  Zap,
  GraduationCap
} from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const Section = ({ title, subtitle, icon: Icon, children, dark = false }: any) => (
  <section className={`section-padding ${dark ? 'bg-[#1a365d] text-white' : 'bg-white'}`}>
    <div className="container-custom">
      <div className="flex flex-col items-center text-center mb-16">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-xl ${dark ? 'bg-[#c9a227] text-white' : 'bg-[#1a365d] text-white'}`}>
          <Icon className="w-8 h-8" />
        </div>
        <span className={`section-label ${dark ? 'text-[#c9a227]' : 'text-[#c9a227]'}`}>{subtitle}</span>
        <h2 className={`text-3xl md:text-4xl font-serif font-bold mt-3 mb-6 ${dark ? 'text-white' : 'text-[#1a365d]'}`}>
          {title}
        </h2>
        <div className="decorative-line mx-auto" />
      </div>
      {children}
    </div>
  </section>
);

export function DirectoratesCentres() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const directorates = [
    { name: 'Directorate of Academic Planning and Quality Assurance (DAPQA)', icon: BookOpen },
    { name: 'Directorate of Chaplaincy and Counselling', icon: Heart },
    { name: 'Directorate of Corporate Affairs (DCA)', icon: Briefcase },
    { name: 'Directorate of Educational Services and Training (DEST)', icon: GraduationCap },
    { name: 'Directorate of General Studies Programmes (DGSP)', icon: Settings },
    { name: 'Directorate of Internal Audit', icon: ShieldCheck },
    { name: 'Directorate of Research, Innovation and Partnerships (DRIPs)', icon: Lightbulb },
    { name: 'Directorate of Strategic Communications and Development (DSCD)', icon: MessageSquare },
    { name: 'Directorate of Students’ Services and Support (DSSS)', icon: LifeBuoy },
    { name: 'Directorate of Works and Physical Planning', icon: Hammer },
    { name: 'Students’ Industrial Work Experience Scheme (SIWES)', icon: Users },
  ];

  const institutes = [
    { 
      name: 'Adeboye Institute for Peace and Good Governance (AIPGG)', 
      desc: 'Advancing leadership, ethics, and peaceful coexistence across the continent.',
      icon: ShieldCheck,
      href: 'https://aipgg.run.edu.ng'
    },
    { 
      name: 'Institute of Global Health (ACEGID)', 
      desc: 'A world-class hub for genomics research and infectious disease surveillance.',
      icon: Globe,
      href: 'https://ighresearch.org'
    },
  ];

  const centres = [
    { 
      name: 'African Centre of Excellence for Water and Environmental Research (ACEWATER)', 
      desc: 'Solving Africa’s water and environmental challenges through research.',
      icon: Droplets,
      href: 'https://run-acewater.org'
    },
    { 
      name: 'Centre for Gender, Humanitarian and Development Studies (CGHDS)', 
      desc: 'Empowering communities through gender equity and humanitarian research.',
      icon: Users,
      href: '/cghds'
    },
    { 
      name: 'Redeemer’s University Centre for Entrepreneurial Development Studies (RUNCEDS)', 
      desc: 'Fostering the next generation of African entrepreneurs and innovators.',
      icon: Zap,
      href: '/runceds'
    },
    { 
      name: 'Career Services Centre Redeemer’s University (CASEC)', 
      desc: 'Bridging the gap between academic learning and professional excellence.',
      icon: Briefcase,
      href: 'https://casec.run.edu.ng'
    },
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/directorates-centres.jpg"
            alt="Directorates & Centres"
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
            <span className="section-label text-[#c9a227]">Units & Entities</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight">
              Directorates, Institutes & Centres
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              The specialized arms of Redeemer's University dedicated to research, 
              strategic development, and community impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Directorates Section */}
      <Section title="University Directorates" subtitle="Governance & Support" icon={Settings}>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {directorates.map((item, idx) => {
            const isDAPQA = item.name.includes('Academic Planning and Quality Assurance');
            const isDEST = item.name.includes('Educational Services and Training');
            const isDGSP = item.name.includes('General Studies Programmes');
            
            const getHref = () => {
              if (isDAPQA) return '/dapqa';
              if (isDEST) return '/dest';
              if (isDGSP) return '/dgsp';
              if (item.name.includes('Internal Audit')) return '/internal-audit';
              if (item.name.includes('Strategic Communications')) return 'https://dsc.run.edu.ng';
              return null;
            };

            const href = getHref();

            return (
              <motion.div
                key={item.name}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => href && (window.location.href = href)}
                className={`group p-8 bg-[#f8fafc] rounded-3xl border border-gray-100 hover:bg-[#1a365d] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${href ? 'cursor-pointer' : ''}`}
              >
                <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
                  <item.icon className="w-6 h-6 text-[#1a365d]" />
                </div>
                <h3 className="text-lg font-bold text-[#1a365d] group-hover:text-white transition-colors leading-snug">
                  {item.name}
                  {href && (
                    <span className="block mt-4 text-xs font-bold text-[#c9a227] uppercase tracking-widest opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                      {href.startsWith('http') ? 'Visit Website →' : 'View Profile →'}
                    </span>
                  )}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </Section>

      {/* Institutes Section */}
      <Section title="Academic Institutes" subtitle="Research Excellence" icon={GraduationCap} dark={true}>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {institutes.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => item.href && (window.location.href = item.href)}
              className={`group glass-dark p-10 rounded-[2.5rem] border border-white/10 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${item.href ? 'cursor-pointer hover:border-[#c9a227]/50' : ''}`}
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <item.icon className="w-10 h-10 text-[#c9a227]" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.name}</h3>
              <p className="text-white/70 leading-relaxed mb-6">{item.desc}</p>
              {item.href && (
                <span className="text-xs font-bold text-[#c9a227] uppercase tracking-widest flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                  Visit Institute Website →
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Centres Section */}
      <Section title="Specialized Centres" subtitle="Innovation & Impact" icon={Lightbulb}>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {centres.map((item, idx) => (
            <motion.div
              key={item.name}
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => item.href && (window.location.href = item.href)}
              className={`flex gap-8 p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-100 border border-gray-50 hover:shadow-2xl transition-all duration-500 group ${item.href ? 'cursor-pointer hover:-translate-y-2' : ''}`}
            >
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-[#f8fafc] flex items-center justify-center group-hover:bg-[#c9a227] transition-colors duration-500">
                <item.icon className="w-8 h-8 text-[#1a365d] group-hover:text-white transition-colors" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-3 leading-tight">{item.name}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                {item.href && (
                  <span className="text-xs font-bold text-[#c9a227] uppercase tracking-widest flex items-center gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity">
                    Visit Centre Website →
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Footer Branding Section */}
      <section className="py-24 bg-[#f8fafc] overflow-hidden relative">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-[#1a365d] flex items-center justify-center shadow-2xl">
                <Globe className="w-12 h-12 text-[#c9a227]" />
              </div>
            </motion.div>
            <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">
              A Global Hub for Excellence
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Through our directorates and specialized centres, we continue to push the 
              boundaries of research and innovation, fostering a culture of excellence 
              that impacts our community and the world at large.
            </p>
          </div>
        </div>
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c9a227]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1a365d]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
      </section>
    </main>
  );
}
