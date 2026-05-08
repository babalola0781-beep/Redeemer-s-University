import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  History, 
  Target, 
  Trophy, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  ClipboardList
} from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function DAPQA() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const functions = [
    "Annually update, analyze and project population data for planning",
    "Liaise with the Bursar in the preparation of the annual recurrent budget estimates",
    "Monitor resource allocation and utilization of same in the University based on the approved budget",
    "Assist in the development of new guidelines and criteria and the review of the existing ones",
    "Collect data on trends in university activities such as enrolments, staffing, staff training, graduate output, etc. and make such data available for research",
    "Collect, analyze and interpret relevant data from all university units",
    "Document and store information on all academic programmes",
    "Ensure that the university complies to and maintains minimum academic standards",
    "Make projections and advise the Vice-Chancellor on areas of major concern and vigilance",
    "Organize the drafting and review of university academic brief",
    "Participate in curricula review activities and to ensure compliance with guidelines and procedures for establishment of new programs",
    "Provide data backed information on academic operations of the university",
    "Publish university records, statistics, research reports, etc",
    "Liaise with the National Universities Commission for delivery and implementation of appropriate policies in the management of the University",
    "Coordinate activities involved in the accreditation of academic and professional programmes in the University",
    "Regularly update and evaluate data from relevant university units to analyze the performance of the university."
  ];

  const achievements = [
    "Coordinated resource verification visits by NUC and professional bodies, securing approval for new undergraduate and postgraduate programmes since 2007.",
    "Coordinated accreditation visits by NUC and professional bodies, achieving Interim and Full status for numerous programmes since 2007.",
    "Submitted annual statistical data to NUC and stakeholders for effective monitoring of university progress since inception.",
    "Played a key role in the 2021 NUC ranking, leading to Redeemer’s University being ranked the Best Private University and Overall Second Best in Nigeria.",
    "Coordinated data submission to international agencies like Times Higher Education (THE) and Clarivate Global Analytics for regional and global rankings.",
    "Coordinated the Association of African Universities (AAU) - African Quality Rating Mechanism (AQRM) institutional evaluation.",
    "Coordinated National Quality Assurance (NQA) assessment exercises in 2017 and 2018.",
    "Successfully revised the University Academic Brief in 2008 and 2018.",
    "Produced standardized instruments for university examination questions and lecture monitoring.",
    "Developed comprehensive mechanisms for course evaluation and assessments (student-lecturer feedback).",
    "Coordinated strategic training workshops for both teaching and non-teaching staff.",
    "Led the production and coordination of the University Strategic Plan for 2021-2026."
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/dapqa.jpg"
            alt="DAPQA"
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
            <span className="section-label text-[#c9a227]">Directorate</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight max-w-4xl">
              Academic Planning & Quality Assurance
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Ensuring excellence in academic standards, strategic planning, and quality service delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brief History Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-[#c9a227]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <span className="section-label">Our Legacy</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Brief History</h2>
                <div className="decorative-line-left mb-8" />
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    The Directorate of Academic Planning and Quality Assurance (DAPQA) started as Directorate of Academic Planning (DAP) on 1st August, 2006. 
                    It began with two pioneer Academic Planning Officers, reporting directly to the Registrar.
                  </p>
                  <p>
                    Over nearly two decades, the directorate has evolved through several leadership eras, from its renaming in 2013 to its current expanded 
                    structure. Today, it stands as a cornerstone of the university's administrative and academic framework.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden"
            >
              <History className="absolute -bottom-10 -right-10 w-40 h-40 text-[#1a365d]/5" />
              <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-8 flex items-center gap-3">
                <ShieldCheck className="text-[#c9a227] w-6 h-6" />
                Current Leadership & Staff
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-50 hover:shadow-md transition-shadow">
                  <p className="text-sm font-bold text-[#c9a227] uppercase tracking-wider mb-2">Directorate Composition</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a365d]" />
                      Two Deputy Directors
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a365d]" />
                      Academic Planning Officer II
                    </li>
                    <li className="flex items-center gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a365d]" />
                      Clerical Officer
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Functions Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Roles & Responsibility</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Core Functions</h2>
            <div className="decorative-line mx-auto" />
            <p className="text-gray-600 max-w-3xl mx-auto mt-6 text-lg">
              The Directorate is responsible to the Vice-Chancellor for planning academic programmes 
              and ensuring the highest quality of service delivery across all units.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {functions.map((func, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-[#f0f4f8] flex items-center justify-center mb-6 group-hover:bg-[#1a365d] group-hover:text-white transition-colors">
                  <ClipboardList className="w-5 h-5" />
                </div>
                <p className="text-gray-700 font-medium leading-relaxed">
                  {func}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-padding bg-[#1a365d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#c9a227] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="section-label text-[#c9a227]">Impact</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3">Achievements & Giant Strides</h2>
              <div className="w-20 h-1 bg-[#c9a227] mt-6" />
            </div>
            <Trophy className="w-20 h-20 text-[#c9a227]/20 hidden lg:block" />
          </div>

          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-10">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-[#c9a227] transition-colors duration-500">
                  <CheckCircle2 className="w-6 h-6 text-[#c9a227] group-hover:text-white" />
                </div>
                <p className="text-white/80 text-lg leading-relaxed pt-2 group-hover:text-white transition-colors">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 cta-gradient relative overflow-hidden text-white text-center">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Target className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Driving Academic Excellence
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Through strategic monitoring and rigorous quality assurance, DAPQA remains committed 
              to maintaining Redeemer’s University as a premier destination for learning.
            </p>
            <a href="/admissions" className="btn-secondary">
              Explore Our Standards <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
      </section>
    </main>
  );
}
