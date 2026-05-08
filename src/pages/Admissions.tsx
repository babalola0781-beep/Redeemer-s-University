import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FileText, CreditCard, Award, ArrowRight, ChevronDown, Users, GraduationCap, Repeat, Globe } from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const admissionPathways = [
  {
    id: 'utme',
    title: 'UTME',
    icon: FileText,
    description: 'Candidates with 5 O\' Level Credits in relevant subjects including Mathematics and English language are eligible to apply for admission provided they sit for the UTME of the year in which admission is sought and they meet the cut-off mark as stipulated by Joint Admission Matriculation Board (JAMB).',
    cta: 'Visit our Admissions site to complete the admission application form',
    link: 'https://adms.run.edu.ng',
  },
  {
    id: 'direct-entry',
    title: 'Direct Entry (DE)',
    icon: GraduationCap,
    description: 'Candidates with 5 O\' Level Credits in relevant subjects including Mathematics and English language are eligible to apply through A Levels, JUPEB, OND, etc. provided they obtain the JAMB DE form of the year in which admission is sought.',
    cta: 'Visit our Admissions site to complete the admission application form',
    link: 'https://adms.run.edu.ng',
  },
  {
    id: 'transfer',
    title: 'Inter-University Transfer',
    icon: Repeat,
    steps: [
      'Write an application to The Registrar, Redeemer\'s University, indicating your intention to transfer from your current university to Redeemer\'s University.',
      'Visit adms.run.edu.ng to complete the admission application form.',
      'Sit for the screening test and oral interview at the selected venue and date.',
      'Download two copies of the Inter-University Transfer form. The form should be completed by you, appropriate Officers of your current University and should be submitted to the Admissions Office, Redeemer\'s University.',
      'Request your current University to forward your academic transcripts to The Registrar, Redeemer\'s University.',
    ],
    link: 'https://adms.run.edu.ng',
  },
];

const fees = [
  { program: 'Undergraduate (New Students)', amount: '₦2,500,000', note: 'Per Session' },
  { program: 'Undergraduate (Returning)', amount: '₦2,300,000', note: 'Per Session' },
  { program: 'Postgraduate (Masters)', amount: '₦1,800,000', note: 'Per Session' },
  { program: 'Postgraduate (PhD)', amount: '₦2,200,000', note: 'Per Session' },
  { program: 'Part-Time Undergraduate', amount: '₦1,500,000', note: 'Per Session' },
];

const scholarships = [
  {
    name: 'Academic Excellence Scholarship',
    description: 'For students with outstanding academic performance (5.0 CGPA and above).',
    coverage: '50% Tuition Waiver',
  },
  {
    name: 'Sports Scholarship',
    description: 'For talented athletes representing the university in competitions.',
    coverage: 'Up to 100% Tuition Waiver',
  },
  {
    name: 'Need-Based Scholarship',
    description: 'For students from disadvantaged backgrounds with good academic standing.',
    coverage: '25-50% Tuition Waiver',
  },
  {
    name: 'Leadership Scholarship',
    description: 'For students demonstrating exceptional leadership qualities.',
    coverage: '30% Tuition Waiver',
  },
];

const faqs = [
  {
    question: 'What are the admission requirements?',
    answer: 'Applicants must have a minimum of 5 O\'level credits including English and Mathematics, and meet the JAMB cut-off mark for their chosen program.',
  },
  {
    question: 'When does the admission process start?',
    answer: 'The admission process typically begins in March for the new academic session starting in September.',
  },
  {
    question: 'Is accommodation guaranteed for all students?',
    answer: 'Yes, all admitted students are guaranteed on-campus accommodation in our modern halls of residence.',
  },
  {
    question: 'Can I transfer from another university?',
    answer: 'Yes, we accept transfer students. Write an application to The Registrar, visit adms.run.edu.ng to complete the application form, sit for screening, and submit the Inter-University Transfer form along with your academic transcripts.',
  },
];

export function Admissions() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activePathway, setActivePathway] = useState('utme');
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/why-choose-banner.jpg"
            alt="Admissions"
            className="w-full h-[130%] object-cover"
          />
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
            <span className="section-label">Admissions</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              Begin Your Journey
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Take the first step towards a world-class education. We're here to guide you through the admission process.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Pathways */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">How to Apply</span>
            <h2 className="text-section font-serif mt-3 mb-4">Admission Pathways</h2>
            <div className="decorative-line" />
            <p className="text-gray-600 max-w-2xl mx-auto mt-6">
              Admission into Redeemer's University undergraduate programmes can be through:
            </p>
          </div>

          {/* Pathway Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {admissionPathways.map((pathway) => (
              <button
                key={pathway.id}
                onClick={() => setActivePathway(pathway.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activePathway === pathway.id
                    ? 'bg-[#1a365d] text-white shadow-lg shadow-[#1a365d]/20'
                    : 'bg-[#f8fafc] text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <pathway.icon className={`w-5 h-5 ${activePathway === pathway.id ? 'text-[#c9a227]' : 'text-gray-400'}`} />
                {pathway.title}
              </button>
            ))}
          </div>

          {/* Pathway Content */}
          <AnimatePresence mode="wait">
            {admissionPathways.map((pathway) => (
              activePathway === pathway.id && (
                <motion.div
                  key={pathway.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="bg-[#f8fafc] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#1a365d] flex items-center justify-center shadow-lg">
                        <pathway.icon className="w-7 h-7 text-[#c9a227]" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-[#1a365d]">{pathway.title}</h3>
                        <p className="text-[#c9a227] text-sm font-bold uppercase tracking-widest">Admission Pathway</p>
                      </div>
                    </div>

                    {/* UTME & Direct Entry content */}
                    {pathway.description && (
                      <div className="space-y-6">
                        <p className="text-gray-600 leading-relaxed text-lg">{pathway.description}</p>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100">
                          <p className="text-gray-700 font-medium mb-4">{pathway.cta}</p>
                          <a
                            href={pathway.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1a365d] text-white font-semibold hover:bg-[#c9a227] transition-all duration-300 shadow-lg"
                          >
                            <Globe className="w-5 h-5" />
                            adms.run.edu.ng
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Inter-University Transfer steps */}
                    {pathway.steps && (
                      <div className="space-y-4">
                        {pathway.steps.map((step, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-gray-100 shadow-sm"
                          >
                            <div className="w-8 h-8 rounded-full bg-[#1a365d] flex items-center justify-center shrink-0 mt-0.5">
                              <span className="text-white text-sm font-bold">{idx + 1}</span>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{step}</p>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Fees */}
      <section id="fees" className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Investment</span>
            <h2 className="text-section font-serif mt-3 mb-4">Tuition & Fees</h2>
            <div className="decorative-line" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-[#1a365d] text-white p-6">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-6 h-6 text-[#c9a227]" />
                  <h3 className="text-xl font-serif font-semibold">Fee Structure (2024/2025)</h3>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {fees.map((fee, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{fee.program}</p>
                      <p className="text-sm text-gray-500">{fee.note}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-[#1a365d]">{fee.amount}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-500 text-sm mt-6">
              * Fees are subject to change. Additional charges may apply for accommodation and other services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Financial Aid</span>
            <h2 className="text-section font-serif mt-3 mb-4">Scholarship Opportunities</h2>
            <div className="decorative-line" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {scholarships.map((scholarship, index) => (
              <motion.div
                key={index}
                variants={fadeUpItem}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#f8fafc] rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#c9a227]/30"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif font-semibold mb-2">{scholarship.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{scholarship.description}</p>
                    <span className="inline-block px-3 py-1 bg-[#1a365d] text-white text-sm rounded-full">
                      {scholarship.coverage}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs — with animated accordion */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Help</span>
            <h2 className="text-section font-serif mt-3 mb-4">Frequently Asked Questions</h2>
            <div className="decorative-line" />
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between text-left"
                >
                  <span className="font-medium pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openFaq === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 flex-shrink-0 ${openFaq === index ? 'text-[#c9a227]' : 'text-gray-400'}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 cta-gradient">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Users className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
              Need More Information?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Our admissions team is ready to assist you with any questions you may have.
            </p>
            <a href="/contact" className="btn-secondary">
              Contact Admissions
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
