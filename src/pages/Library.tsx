import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BookOpen, MonitorPlay, Search, Globe, Library as LibIcon, ArrowRight } from 'lucide-react';

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export function Library() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img src="/images/Library-scaled.jpg" alt="Tekena Tamuno Library" className="w-full h-[130%] object-cover" />
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
            <span className="section-label">Academic Resources</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">Tekena Tamuno Library</h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">Serving as a gateway to the latest information resources needed by University staff and students.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-[#1a365d]">
        <div className="container-custom">
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[{ v: '35,000+', l: 'Books' }, { v: '300+', l: 'Periodical Titles' }, { v: '30', l: 'Computer Stations' }, { v: '6+', l: 'Online Databases' }].map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="text-center">
                <div className="text-3xl md:text-4xl font-serif font-bold text-[#c9a227] mb-1">{s.v}</div>
                <div className="text-white/70 text-sm">{s.l}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="section-label">Overview</span>
              <h2 className="text-3xl font-serif font-bold text-[#1a365d] mt-3 mb-2">Welcome to TTL</h2>
              <div className="decorative-line-left mb-6" />
              <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
                <p>Tekena Tamuno Library (TTL) is the academic Library of the Redeemer's University, Ede and is rich in recent and current information resources carefully selected to support the teaching, learning and research mandates of students and staff.</p>
                <p>The library uses Koha Integrated Library System to manage its routines, including Cataloguing and Circulation. It also deploys DuraSpace to manage its institutional repository.</p>
                <p>Membership is open to all registered students and staff with current ID Cards.</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group">
              <img src="/images/Redeemers-university-libary.jpg" alt="Library" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Resources</span>
            <h2 className="text-section font-serif mt-3 mb-4">Our Collections & Services</h2>
            <div className="decorative-line mx-auto" />
          </div>
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-[#c9a227]/30 transition-all">
              <BookOpen className="w-10 h-10 text-[#c9a227] mb-6" />
              <h3 className="text-xl font-bold font-serif mb-4 text-[#1a365d]">Extensive Collections</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 mr-3 shrink-0" /><span>35,000 books and over 300 titles of periodicals on all academic programmes.</span></li>
                <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 mr-3 shrink-0" /><span><strong>Adeboye Collection:</strong> Publications about Pastor Adeboye, his life and ministry.</span></li>
                <li className="flex items-start"><span className="w-2 h-2 rounded-full bg-[#c9a227] mt-2 mr-3 shrink-0" /><span><strong>Prof. Olusanya's collection:</strong> Works on history, politics, and public administration.</span></li>
              </ul>
            </motion.div>
            <motion.div variants={fadeUp} whileHover={{ y: -6 }} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:border-[#c9a227]/30 transition-all">
              <LibIcon className="w-10 h-10 text-[#c9a227] mb-6" />
              <h3 className="text-xl font-bold font-serif mb-4 text-[#1a365d]">Dedicated Services</h3>
              <p className="text-gray-600 mb-4">Seasoned librarians render both regular and specialized library services.</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227]" /> Reservation & Document Delivery</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227]" /> Interlibrary Loan Services</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227]" /> Fee-paying bindery & reprographics</li>
                <li className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-[#c9a227]" /> Mandatory quality project binding</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-4 mb-4">
                <MonitorPlay className="w-10 h-10 text-[#c9a227]" />
                <div>
                  <span className="section-label">Digital Access</span>
                  <h2 className="text-3xl font-serif font-bold text-[#1a365d]">Virtual Library</h2>
                </div>
              </div>
              <div className="decorative-line-left mb-6" />
              <p className="text-gray-600 mb-6 leading-relaxed">The virtual library provides access to academic materials from open internet sources and subscription-based databases with 30 internet-ready computer workstations.</p>
              <div className="bg-[#f8fafc] p-6 rounded-xl border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><Globe className="w-5 h-5 text-[#1a365d]" /> Accessible Databases</h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[{ n: 'RESEARCH4LIFE', h: 'https://login.research4life.org/' }, { n: 'EBSCOHOST', h: 'http://search.ebscohost.com' }, { n: 'LAW PAVILION', h: 'http://www.lawpavilionplus.com/' }, { n: 'JSTOR', h: 'http://www.jstor.org' }, { n: 'Science Direct', h: '#' }, { n: 'LEGAL PEDIA', h: 'http://resources.legalpediaresources.com/' }].map((db, i) => (
                    <a key={i} href={db.h} target={db.h !== '#' ? '_blank' : undefined} rel="noreferrer" className="text-[#1a365d] hover:text-[#c9a227] text-sm font-medium transition-colors">{db.n}</a>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-4 flex items-center gap-3"><Search className="w-6 h-6 text-[#c9a227]" /> Loan Rights</h3>
              <p className="text-gray-600 mb-6">TTL lends borrowable materials according to user categories via the OPAC system.</p>
              <div className="overflow-x-auto rounded-xl shadow-md border border-gray-200">
                <table className="w-full text-left bg-white border-collapse responsive-table">
                  <thead><tr className="bg-[#1a365d] text-white"><th className="py-4 px-6 font-semibold">Type of Reader</th><th className="py-4 px-6 font-semibold">Loans</th><th className="py-4 px-6 font-semibold">Weeks</th></tr></thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors"><td data-label="Type of Reader" className="md:py-4 md:px-6 font-medium">Undergraduates</td><td data-label="Loans" className="md:py-4 md:px-6">2</td><td data-label="Weeks" className="md:py-4 md:px-6">2</td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors bg-gray-50/50"><td data-label="Type of Reader" className="md:py-4 md:px-6 font-medium">Graduate students</td><td data-label="Loans" className="md:py-4 md:px-6">4</td><td data-label="Weeks" className="md:py-4 md:px-6">4</td></tr>
                    <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors"><td data-label="Type of Reader" className="md:py-4 md:px-6 font-medium">Academic staff</td><td data-label="Loans" className="md:py-4 md:px-6">4</td><td data-label="Weeks" className="md:py-4 md:px-6">4</td></tr>
                    <tr className="hover:bg-gray-50 transition-colors bg-gray-50/50"><td data-label="Type of Reader" className="md:py-4 md:px-6 font-medium">Non-academic staff</td><td data-label="Loans" className="md:py-4 md:px-6">2</td><td data-label="Weeks" className="md:py-4 md:px-6">2</td></tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 cta-gradient">
        <div className="container-custom text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <BookOpen className="w-16 h-16 text-[#c9a227] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Explore Our Academic Resources</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">Visit the Tekena Tamuno Library and discover a world of knowledge at your fingertips.</p>
            <a href="/admissions" className="btn-secondary">Join Redeemer's University <ArrowRight className="w-5 h-5" /></a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
