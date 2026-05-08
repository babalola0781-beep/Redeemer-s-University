import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  BookOpen, 
  GraduationCap, 
  Globe, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight,
  Info,
  Clock,
  LayoutGrid,
  ScrollText
} from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function DEST() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const jupebCombinations = [
    { subjects: "CRS/IRS, Government, Literature", code: "JUPEB SC-001" },
    { subjects: "CRS/IRS, Government, Yoruba/Igbo", code: "JUPEB SC-002" },
    { subjects: "CRS/IRS, Government, Music", code: "JUPEB SC-003" },
    { subjects: "CRS/IRS, Government, Visual Art", code: "JUPEB SC-004" },
    { subjects: "CRS/IRS, FRENCH, Government", code: "JUPEB SC-005" },
    { subjects: "CRS/IRS, FRENCH, Literature", code: "JUPEB SC-006" },
    { subjects: "CRS/IRS, Literature, Music", code: "JUPEB SC-007" },
    { subjects: "CRS/IRS, History, Literature", code: "JUPEB SC-008" },
    { subjects: "CRS/IRS, History, Visual Art", code: "JUPEB SC-009" },
    { subjects: "CRS/IRS, Igbo/Yoruba, Literature", code: "JUPEB SC-010" },
    { subjects: "CRS/IRS, Igbo/Yoruba, Visual Art", code: "JUPEB SC-011" },
    { subjects: "CRS/IRS, Music, Visual Art", code: "JUPEB SC-012" },
    { subjects: "Economics, History, Literature", code: "JUPEB SC-013" },
    { subjects: "French, Igbo/Yoruba, Literature", code: "JUPEB SC-014" },
    { subjects: "Government, Music, Literature", code: "JUPEB SC-015" },
    { subjects: "Government, Music, Visual Art", code: "JUPEB SC-016" },
    { subjects: "Literature, Government, French", code: "JUPEB SC-017" },
    { subjects: "Literature, Music, Visual Art", code: "JUPEB SC-018" },
    { subjects: "Accounts, Business Studies, Economics", code: "JUPEB SC-019" },
    { subjects: "Accounts, Economics, Geography", code: "JUPEB SC-020" },
    { subjects: "Accounts, Economics, Government", code: "JUPEB SC-021" },
    { subjects: "Business Studies, Economics, Geography", code: "JUPEB SC-022" },
    { subjects: "Business Studies, Economics, Government", code: "JUPEB SC-023" },
    { subjects: "Business Studies, Economics, Mathematics", code: "JUPEB SC-024" },
    { subjects: "Economics, Government, CRS/IRS", code: "JUPEB SC-025" },
    { subjects: "Economics, Government, Literature", code: "JUPEB SC-026" },
    { subjects: "Economics, Government, Mathematics", code: "JUPEB SC-027" },
    { subjects: "Economics, Government, Biology", code: "JUPEB SC-028" },
    { subjects: "Economics, Geography, Government", code: "JUPEB SC-029" },
    { subjects: "Economics, Geography, Mathematics", code: "JUPEB SC-030" },
    { subjects: "Biology, Chemistry, Physics", code: "JUPEB SC-031" },
    { subjects: "Biology, Chemistry, Economics", code: "JUPEB SC-032" },
    { subjects: "Biology, Chemistry, Mathematics", code: "JUPEB SC-033" },
    { subjects: "Biology, Chemistry, Agric. Science", code: "JUPEB SC-034" },
    { subjects: "Biology, Mathematics, Physics", code: "JUPEB SC-035" },
    { subjects: "Chemistry, Mathematics, Economics", code: "JUPEB SC-036" },
    { subjects: "Chemistry, Physics, Geography", code: "JUPEB SC-037" },
    { subjects: "Chemistry, Physics, Mathematics", code: "JUPEB SC-038" },
    { subjects: "Chemistry, Physics, Agric. Science", code: "JUPEB SC-039" },
    { subjects: "Mathematics, Physics, Agric. Science", code: "JUPEB SC-040" },
    { subjects: "Mathematics, Physics, Economics", code: "JUPEB SC-041" },
    { subjects: "Mathematics, Physics, Geography", code: "JUPEB SC-042" },
    { subjects: "Mathematics, Physics, Visual Art", code: "JUPEB SC-043" },
  ];

  const availableCourses = [
    "Physics with Electronics", "Computer Science", "Biochemistry", "Industrial chemistry",
    "Microbiology", "Industrial Mathematics", "Statistics", "Accounting",
    "Banking and Finance", "Economics", "Actuarial Science", "Marketing",
    "Business Administration", "Law", "Christian Religious Studies", "Mass Communication",
    "English", "Political Science", "Public Administration", "Philosophy",
    "Sociology", "Social Work", "Theatre Art/Films Studies", "History & international Studies",
    "Tourism Studies", "Transport management", "Nursing Science", "Human Physiotherapy",
    "Human Physiology", "Anatomy", "Medical Laboratory Science", "Public Health",
    "Civil Engineering", "Mechanical Engineering", "Electrical and Electronic Engineering", "Computer Engineering",
    "Cyber Security", "Information Technology", "Industrial Mathematics and Computer Science", "Statistics and Data Science",
    "Applied Geophysics", "Meteorology", "Architecture", "Building Technology",
    "Urban and Regional Planning", "Quality Surveying", "Geology", "Environmental Management & Toxicology",
    "Surveying & Geo informatics", "Estate Management", "Building Technology"
  ];

  const partTimeProgrammes = [
    "Accounting (B.Sc.)",
    "Banking and Finance (B.Sc.)",
    "Marketing (B.Sc.)",
    "Business Administration (B.Sc.)",
    "Christian Religious Studies (B. A.)",
    "Economics (B.Sc.)",
    "Statistics (B.Sc.)",
    "Political Science (B.Sc.)",
    "History and International Studies (B.A)"
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/dest.jpg"
            alt="DEST"
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
              Educational Services & Training (DEST)
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Providing unlimited educational opportunities and professional training for the modern world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brief History & Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Our Mission</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Brief History & Mandate</h2>
              <div className="decorative-line-left mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  Established in September 2015, DEST provides a wide spectrum of educational opportunities including 
                  A-Level studies, Pre-Degree, part-time, and JAMB/UTME preparatory classes.
                </p>
                <p>
                  Our mandate is to equip students, staff, and the public intellectually and professionally to meet modern challenges. 
                  This includes remedial classes for professional certifications such as French Language, CIPM, CIB, and ATS/ICAN.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] p-10 rounded-[2.5rem] border border-gray-100 shadow-xl"
            >
              <Info className="w-12 h-12 text-[#c9a227] mb-6" />
              <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">Philosophy & Objectives</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                DEST aims to be a leader in delivering high-quality training and basic preparatory education, 
                equipping members of the public to meet 21st-century organizational challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                {['High-Quality Training', '21st Century Skills', 'Professional Excellence'].map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-bold text-[#1a365d] border border-gray-100 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Pathways</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Educational Programmes</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-lg group hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#1a365d] flex items-center justify-center mb-8 group-hover:bg-[#c9a227] transition-all duration-500">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">Pre-Degree Programme</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A one-year intensive preparation for UTME/Post-UTME examinations. Ideal for students who need to rectify 
                O'Level deficiencies or prepare for admission into 100-Level degree programmes.
              </p>
              <div className="flex items-center gap-2 text-[#c9a227] font-bold text-sm uppercase tracking-wider">
                <Clock className="w-4 h-4" /> 1 Academic Session
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpItem}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#1a365d] p-10 rounded-[2.5rem] text-white group hover:shadow-2xl transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#c9a227] flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 text-white">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">Foundation Programme (JUPEB)</h3>
              <p className="text-white/70 leading-relaxed mb-6">
                Designed for direct entry into 200-Level. This intensive programme prepares candidates for external 
                examinations conducted by the Joint Universities Preliminary Examination Boards (JUPEB).
              </p>
              <div className="flex items-center gap-2 text-[#c9a227] font-bold text-sm uppercase tracking-wider">
                <Clock className="w-4 h-4" /> 2 Semesters (Minimum)
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* JUPEB Subject Combinations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label text-[#c9a227]">Course Details</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">JUPEB Subject Combinations</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-gray-100 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white responsive-table">
                <thead>
                  <tr className="bg-[#1a365d] text-white">
                    <th className="px-8 py-5 font-serif font-bold text-lg">Subject Combinations</th>
                    <th className="px-8 py-5 font-serif font-bold text-lg">Designation</th>
                  </tr>
                </thead>
                <tbody>
                  {jupebCombinations.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td data-label="Subjects" className="md:px-8 md:py-4 text-[#1a365d] font-bold">{item.subjects}</td>
                      <td data-label="Designation" className="md:px-8 md:py-4 font-bold text-gray-400">{item.code}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 200 Level Entry & Courses */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="section-label">Requirements</span>
                <h2 className="text-3xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Direct Entry Admission</h2>
                <div className="decorative-line-left mb-8" />
              </div>
              
              <div className="space-y-4">
                {[
                  "Obtain JAMB Direct Entry application form choosing Redeemer’s University.",
                  "Offer of admission is strictly for courses enrolled during the Foundation Programme.",
                  "Candidates must pass all subjects in the Foundation Programme at a satisfactory level.",
                  "Submit the University admission form for Direct Entry."
                ].map((req, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white rounded-2xl border border-gray-50 shadow-sm hover:shadow-md transition-shadow">
                    <div className="shrink-0 w-8 h-8 rounded-lg bg-[#c9a227]/10 flex items-center justify-center text-[#c9a227] font-bold">
                      {idx + 1}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{req}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#1a365d] rounded-[2.5rem] p-10 text-white relative overflow-hidden"
            >
              <LayoutGrid className="absolute -top-10 -right-10 w-40 h-40 text-white/5" />
              <h3 className="text-2xl font-serif font-bold mb-8">Available 200L Courses</h3>
              <div className="grid sm:grid-cols-2 gap-4 max-h-[600px] overflow-y-auto custom-scrollbar pr-4 text-white/80">
                {availableCourses.map((course, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <CheckCircle2 className="w-4 h-4 text-[#c9a227]" />
                    <span className="text-sm group-hover:text-[#c9a227] transition-colors">{course}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Part-Time Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Flexible Learning</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Part-Time Degree Programmes</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
              {partTimeProgrammes.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUpItem}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-100 flex items-center gap-4 hover:bg-[#1a365d] hover:text-white transition-all duration-300 group"
                >
                  <ScrollText className="w-5 h-5 text-[#c9a227]" />
                  <span className="font-bold group-hover:text-white transition-colors">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-[#c9a227] p-10 rounded-[2.5rem] text-white flex flex-col justify-center"
            >
              <h4 className="text-xl font-serif font-bold mb-6">Part-Time Requirements</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  5 Credit Passes in SSCE/GCE/NECO in relevant subjects (max 2 sittings).
                </li>
                <li className="flex gap-3 text-white/90">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                  OND/HND in relevant discipline.
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-sm font-bold uppercase tracking-widest text-white/80">Affiliations</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-white/10 rounded text-xs">CIPM</span>
                  <span className="px-3 py-1 bg-white/10 rounded text-xs">ICAN</span>
                  <span className="px-3 py-1 bg-white/10 rounded text-xs">ATS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* International Programmes */}
      <section className="section-padding bg-[#1a365d] text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <Globe className="absolute -top-20 -right-20 w-96 h-96" />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <Globe className="w-16 h-16 text-[#c9a227] mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-white leading-tight">
              Global Partnerships & International Programmes
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Through our curricula integration, we offer unique pathways to admission and certification with our partner 
              institutions in the United Kingdom, including the **University of Sunderland** and the **University of Wolverhampton**.
            </p>
            <div className="inline-flex flex-col sm:flex-row items-center gap-6">
              <a 
                href="https://riis.run.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Visit RIIS Website <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="http://www.jupeb.edu.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#c9a227] font-bold border-b-2 border-transparent hover:border-[#c9a227] transition-all py-1"
              >
                Learn More about JUPEB
              </a>
            </div>
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
            <Briefcase className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Advance Your Education?
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are preparing for entry-level university exams or seeking professional certification, 
              DEST provides the guidance and academic rigour to ensure your success.
            </p>
            <a href="/admissions" className="btn-secondary">
              Apply to DEST Today <ArrowRight className="w-5 h-5" />
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
