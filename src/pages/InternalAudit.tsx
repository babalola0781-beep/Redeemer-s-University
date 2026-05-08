import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  ClipboardCheck,
  Target,
  FileSearch
} from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function InternalAudit() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const roles = [
    "Internal control measures are instituted which, as far as is reasonably possible, safeguard all assets, in addition to preventing fraud and other irregularities.",
    "Ensuring that management policies are executed at the right time.",
    "Applicable accounting standards are properly and consistently followed.",
    "Balances shown in the records are actually in existence and accurate.",
    "Relevant controls are instituted and effected with respect to expenditure.",
    "The University receives value for money spent.",
    "Determining the effectiveness of the existing internal controls through regular review and test of the systems of internal controls.",
    "Making recommendations for policies and procedures to safeguard the University’s assets.",
    "Carrying out continuous audit of the accounts and records of revenue, expenditure, stores, and other properties.",
    "Ensuring strict compliance with University’s laws, rules and regulations by all members of staff.",
    "All monies due to the University are collected, recorded and accurately accounted for."
  ];

  const coverage = [
    "Institute of Genomics and Global Health (IGH)",
    "RUN Business Ventures (RUNBV)",
    "Redeemer’s University School of Remedial Studies (RUNSORs)",
    "Directorate of Educational Services and Training (DEST)",
    "Redeemer’s University Staff School (RUNSS)",
    "Redeemer’s University Cafeteria (Manna Palace)",
    "Redeemer’s University Chaplaincy",
    "Guest House",
    "Farming and Agricultural Projects"
  ];

  const staff = [
    { name: "Akinlawon, Olusola K.", qual: "MSc, FCA, AMNIM", role: "Deputy Director" },
    { name: "Banjo, Adeyemi A.", qual: "MBA, FCA", role: "Chief Internal Auditor" },
    { name: "Jayeoba Victoria I.", qual: "MSc., ACA", role: "Chief Internal Auditor" },
    { name: "Meshioye, Toyin S.", qual: "BSc., ATS", role: "Principal Executive Officer 1" },
    { name: "Ogunsipe Adefunke I.", qual: "BSc., ACA", role: "Internal Auditor 2" },
    { name: "Jayeoba, Adeyemi A", qual: "BSc.", role: "Internal Auditor II" },
    { name: "Oluwadirepo Oluwatosin I.", qual: "MSc", role: "Internal Auditor II" },
    { name: "Oladipo Margaret T.", qual: "BSc., ACA", role: "Executive Officer" },
    { name: "John-Olorunfemi Fadekemi A.", qual: "BSc.", role: "Executive Officer" },
    { name: "Fawehinmi Temitayo W.", qual: "BSc.", role: "Chief Clerical Officer" },
    { name: "Adegbola Blessing O.", qual: "", role: "Corps Member" },
    { name: "Olatunji Boluwatife O.", qual: "", role: "Corps Member" }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/internal-audit.webp"
            alt="Internal Audit"
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
            <span className="section-label text-[#c9a227]">VC's Office Unit</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight max-w-4xl">
              Directorate of Internal Audit
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Ensuring transparency, accountability, and value-for-money through independent appraisal and rigorous controls.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History & Philosophy Section */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <span className="section-label">Our Legacy</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Brief History & Mandate</h2>
              <div className="decorative-line-left mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                <p>
                  The Directorate of Internal Audit, a unit in the Vice-Chancellor’s office, commenced operation on 
                  September 1st, 2005 as Internal Audit Unit. It was upgraded to a Directorate in 2012, reflecting its 
                  growing importance in the university's governance structure.
                </p>
                <p>
                  From an initial staff strength of three, the Directorate has expanded significantly to meet the 
                  increasing complexity of university operations, currently boasting a diverse team of twelve professionals.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#f8fafc] p-10 rounded-[2.5rem] border border-gray-100 shadow-xl relative overflow-hidden"
            >
              <ShieldCheck className="absolute -bottom-10 -right-10 w-48 h-48 text-[#1a365d]/5" />
              <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-6 flex items-center gap-3">
                <Target className="text-[#c9a227] w-6 h-6" />
                The Auditor's Role
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Our role is to support the achievement of corporate objectives by conducting an independent appraisal 
                of all University’s activities, financial and otherwise. We conduct value-for-money audits and 
                systematic evaluations of internal controls.
              </p>
              <div className="flex gap-4 items-center p-4 bg-white rounded-2xl border border-gray-50">
                <ClipboardCheck className="w-8 h-8 text-[#c9a227]" />
                <span className="font-bold text-[#1a365d]">Risk-Based Audit Framework</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Fiduciary Duties</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Core Responsibilities</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#f0f4f8] flex items-center justify-center mb-6 group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-500">
                  <CheckCircle2 className="w-6 h-6 text-[#c9a227]" />
                </div>
                <p className="text-gray-700 leading-relaxed font-medium">
                  {role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="section-padding bg-white overflow-hidden relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">Operational Reach</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Internal Audit Coverage</h2>
              <div className="decorative-line-left mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                The scope of internal audit activities extends beyond the central administration to encompass 
                all specialized arms and ventures of the University, ensuring a unified standard of excellence.
              </p>
              <div className="bg-[#1a365d] text-white p-8 rounded-[2rem] border border-white/10 shadow-2xl relative overflow-hidden">
                <FileSearch className="absolute -bottom-10 -right-10 w-40 h-40 opacity-5" />
                <h4 className="font-bold text-xl mb-4 text-[#c9a227]">ERM Management</h4>
                <p className="text-white/70">
                  Aside control and internal auditing matters, the Directorate also manages the 
                  <strong> Enterprise Risk Management (ERM) Framework</strong> of the University.
                </p>
              </div>
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              {coverage.map((unit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="p-6 bg-[#f8fafc] rounded-2xl border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all group"
                >
                  <div className="w-2 h-2 rounded-full bg-[#c9a227]" />
                  <span className="text-[#1a365d] font-bold text-sm leading-snug group-hover:pl-1 transition-all">{unit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Staff Table Section */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">The Team</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Current Staff List</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-2xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse responsive-table">
                <thead>
                  <tr className="bg-[#1a365d] text-white">
                    <th className="px-8 py-6 font-serif font-bold text-lg">Name</th>
                    <th className="px-8 py-6 font-serif font-bold text-lg">Qualification</th>
                    <th className="px-8 py-6 font-serif font-bold text-lg">Role</th>
                  </tr>
                </thead>
                <tbody>
                  {staff.map((member, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-[#f8fafc] transition-colors group">
                      <td data-label="Name" className="md:px-8 md:py-4 font-bold text-[#1a365d]">{member.name}</td>
                      <td data-label="Qualification" className="md:px-8 md:py-4 text-gray-500 font-medium">{member.qual}</td>
                      <td data-label="Role" className="md:px-8 md:py-4">
                        <span className="px-4 py-1.5 rounded-full bg-[#f0f4f8] text-[#1a365d] text-xs font-bold uppercase tracking-widest border border-gray-100 shadow-sm group-hover:bg-[#1a365d] group-hover:text-white transition-all">
                          {member.role}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
            <ShieldCheck className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Committed to Institutional Integrity
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Our continuous auditing and risk management strategies are designed to safeguard 
              the university's mission and ensure every resource is utilized effectively.
            </p>
            <a href="/admissions" className="btn-secondary">
              Learn More About Governance <ArrowRight className="w-5 h-5" />
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
