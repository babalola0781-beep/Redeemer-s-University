import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Users, 
  Clock, 
  History, 
  BookOpen,
  Mail,
  HelpCircle,
  CheckCircle2
} from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function DGSP() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const pillars = [
    {
      title: "Communication & Literacy",
      desc: "Mastering the art of expression through courses like Communication Skills in English, ensuring you can articulate complex ideas clearly, concisely, and persuasively.",
      icon: MessageSquare
    },
    {
      title: "Critical Thinking & Logic",
      desc: "Developing the capacity to analyze information, question assumptions, solve problems creatively, and make sound, reasoned judgments in a complex world.",
      icon: Lightbulb
    },
    {
      title: "Ethics, Culture & Citizenship",
      desc: "Grounding your success in strong moral and ethical principles, informed by faith-based values and deep appreciation for diverse cultures.",
      icon: ShieldCheck
    }
  ];

  const directors = [
    { name: "Professor Ademola Dasylva", years: "2014 - 2015" },
    { name: "Professor Adebola Adebileje", years: "2015 - 2016" },
    { name: "Professor Foluke Unuabonah", years: "2016 - 2018", role: "Ag Director" },
    { name: "Professor Bayo Oloyede", years: "Jan - July 2018" },
    { name: "Professor Afolorunso Dairo", years: "Aug 2018 - March 2019" },
    { name: "Prof Idowu Odebode", years: "March 2019 - July 2023" },
    { name: "Dr Ayodeji Isaac Shittu", years: "Aug 2023 - July 2025", role: "Ag Director" },
    { name: "Dr Leke Abraham Oluwalogbon", years: "Aug 2025 - Till Date", role: "Ag Director" }
  ];

  const courses = [
    { code: "RUN-FIC 101", title: "Foundation Truths", units: 2, level: 100 },
    { code: "RUN-FIC 102", title: "Christian Spiritual Formation and Discipleship", units: 2, level: 100 },
    { code: "GST 107", title: "Science, Technology & Health Studies", units: 2, level: 100 },
    { code: "GST 111", title: "Communication Skill in English I", units: 2, level: 100 },
    { code: "GST 114", title: "Communication Skill in English II", units: 2, level: 100 },
    { code: "RUN-FIC 201", title: "Christian Worldview and Contemporary Culture", units: 2, level: 200 },
    { code: "RUN-FIC 202", title: "Principles and Fundamentals of Christian Personality", units: 2, level: 200 },
    { code: "GST 212", title: "Philosophy, Logic & Human Existence", units: 2, level: 200 },
    { code: "RUN-FIC 301", title: "Christian Ethics and Moral Philosophy", units: 2, level: 300 },
    { code: "RUN-FIC 303", title: "Theology of Science and Innovation", units: 2, level: 300 },
    { code: "RUN-FIC 305", title: "Christianity and Social Justice", units: 2, level: 300 },
    { code: "RUN-FIC 302", title: "Special Topics on Relationships and Family", units: 2, level: 300 },
    { code: "GST 312", title: "Peace and Conflict Resolution", units: 2, level: 300 },
    { code: "RUN-FIC 401", title: "Faith, Work and Vocation", units: 2, level: 400 },
    { code: "RUN-FIC 402", title: "Career Concepts and Professional Development Strategies", units: 2, level: 400 }
  ];

  const descriptions = [
    { code: "RUN-FIC 101", desc: "Overview and Nature of Vision, Foundation and Dynamics of the Christian Faith, Understanding the New Birth and its benefits, Jesus as the Only way to eternal life, Exposition on the works of Grace, Discipleship and Stewardship." },
    { code: "RUN-FIC 102", desc: "Foundations of Christian Spiritual Formation, The Role of the Holy Spirit and Scripture, Classical Spiritual Disciplines, Discipleship and Mentoring, Spiritual Formation in Daily Life, Creating a Rule of Life." },
    { code: "GST 107", desc: "ICT, Microbes in Everyday Life, Physics and Everyday Appliances, Chemicals: Use and Challenges, Health, Wellness, Substance Abuse, First Aid, Infectious/Chronic Diseases, SDGs, Climate Change, Generative AI Ethics, Renewable Energy." },
    { code: "GST 111 & 114", desc: "Communication skills (listening, speaking, reading, writing), Word classes, Phrases, Clauses, Sentences, Tense and Aspect, Concord, Speech and Voice, Mechanics of Writing, The English Sound System, Literary Appreciation." },
    { code: "RUN-FIC 201", desc: "Introduction to Worldview, Biblical Framework vs Secular Worldviews, Faith and Reason, Christian Engagement with Media/Pop Culture, Justice, Gender and Identity, Personal Worldview Integration." },
    { code: "RUN-FIC 202", desc: "Introduction to Christian Personality, Personality Types, Character Studies (Moses, David, Joshua, Samson, Daniel, Paul, Peter), Temptations, Anger Management, Emotional Intelligence in Leadership." },
    { code: "RUN-FIC 301", desc: "Moral Philosophy, Biblical Foundations for Ethics, Christian vs Secular Moral Theories, Personal Morality, Ethical Issues in Society, Professional Ethics, Christian Witness." },
    { code: "RUN-FIC 303", desc: "Science and Christian Theology, Creation and Order, Fall and Scientific Ethics, Redemption and Innovation, Faith and Doubt, Contemporary Ethical Issues in Science." },
    { code: "RUN-FIC 305", desc: "Biblical Foundations of Justice, Sin and Broken Systems, The Church and Social Justice, Christian Ethics of Advocacy, Social Entrepreneurship, Capstone: My Role in God’s Justice Movement." },
    { code: "RUN-FIC 302", desc: "Biblical principles of Marriage, Conflict Resolution in the Family, Sexual Perversions, Fundamentals of good parenting, Maintaining Godly Relationships." },
    { code: "GST 312", desc: "Causes/Consequences of Conflict, Peacebuilding & Prevention Strategies, Conflict Analysis, Youth in Post-Conflict, Environment & Security, Gender-based Violence, Religion and Conflict Resolution, Media and Conflict." },
    { code: "RUN-FIC 401", desc: "The Theology of Work, Vocation as Calling, Faithful Presence in the Marketplace, Ethical Challenges, Work-Life Balance and Sabbath Rest, Entrepreneurship as Mission." },
    { code: "RUN-FIC 402", desc: "Career Concepts, Strategic Career Plans, Social Conditions Affecting Career, Negotiation Skills, Entrepreneurship, Investment and Financial Practice, Faith Integration in Discipline." }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/dgsp.png"
            alt="DGSP"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-[#1a365d]/85 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a365d]" />
        </motion.div>
        
        <div className="relative z-10 container-custom text-center text-white pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md border border-white/10"
          >
            <span className="section-label text-[#c9a227]">Academic Directorate</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight max-w-4xl">
              General Studies Programme (DGSP)
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light italic">
              "Beyond the Discipline: Raising Holistic and Ethically Conscious Global Citizens."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="section-padding bg-white relative">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="glass-card p-10 md:p-14 rounded-[2.5rem] border border-gray-100 shadow-2xl relative z-10">
                <MessageSquare className="w-12 h-12 text-[#c9a227] mb-8" />
                <h2 className="text-3xl font-serif font-bold text-[#1a365d] mb-6">A Warm Welcome</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed text-lg italic">
                  <p>
                    "I extend a very warm welcome to all our visitors—our esteemed students, prospective candidates, 
                    parents, faculty members, and the general public—to the official webpage of the DGSP at Redeemer’s University."
                  </p>
                </div>
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="font-bold text-[#1a365d] text-xl">Dr Leke A. Oluwalogbon</p>
                  <p className="text-[#c9a227] font-medium uppercase tracking-wider text-sm mt-1">Acting Director, DGSP</p>
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#c9a227]/5 rounded-full blur-3xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <span className="section-label">Our Vision</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">Beyond the Discipline</h2>
                <div className="decorative-line-left mb-8" />
                <p className="text-gray-600 text-lg leading-relaxed">
                  We firmly believe that while your core course provides the depth of expertise, 
                  the General Studies courses provide the crucial breadth and adaptability necessary for lifelong success. 
                  Our singular purpose is to ensure every graduate is a holistic, well-rounded, 
                  and ethically conscious global citizen.
                </p>
              </div>
              
              <div className="bg-[#f8fafc] p-8 rounded-3xl border border-gray-100">
                <div className="flex gap-4 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center text-white">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1a365d] text-lg mb-2">The Academic Bridge</h4>
                    <p className="text-gray-600">Connecting specialized degrees to the wider world of knowledge and professional competence.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Pillars */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Curriculum Foundations</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Three Core Pillars</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#f0f4f8] flex items-center justify-center mb-8 group-hover:bg-[#1a365d] group-hover:text-white transition-all duration-500">
                  <pillar.icon className="w-8 h-8 group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1a365d] mb-4">{pillar.title}</h3>
                <p className="text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Timeline */}
      <section className="section-padding bg-[#1a365d] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <History className="absolute -top-20 -left-20 w-96 h-96" />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <span className="section-label text-[#c9a227]">Our Journey</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mt-3 mb-8 leading-tight">Evolution of the Directorate</h2>
              <div className="w-20 h-1 bg-[#c9a227] mb-10" />
              <div className="space-y-6 text-white/80 text-lg leading-relaxed">
                <p>
                  Originally domiciled in the Faculty of Humanities starting in 2005, the Directorate was established 
                  in 2013 following the decision of the University Senate. This move was guided by NUC Benchmarks 
                  and global best practices in general education.
                </p>
                <p>
                  The concept is to expose Medicine, Science, and Technology students to the Arts/Humanities, and vice-versa, 
                  ensuring a balanced perspective for every student.
                </p>
                <div className="inline-block px-6 py-4 bg-white/5 rounded-2xl border border-white/10 mt-6">
                  <p className="text-[#c9a227] font-bold text-sm uppercase tracking-widest mb-2">Did You Know?</p>
                  <p className="text-white/70 italic text-sm">"Older universities use 'GES' codes, but Redeemer's adopted the NUC-standard 'GST' code."</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-[3rem] p-10 border border-white/10 backdrop-blur-md">
              <h3 className="text-2xl font-serif font-bold mb-10 flex items-center gap-4">
                <Users className="text-[#c9a227] w-8 h-8" />
                Directors Through History
              </h3>
              <div className="space-y-6 max-h-[500px] overflow-y-auto custom-scrollbar pr-4">
                {directors.map((dir, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#c9a227] font-bold text-sm border border-white/5 group-hover:bg-[#c9a227] group-hover:text-[#1a365d] transition-all duration-300">
                      {directors.length - idx}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg group-hover:text-[#c9a227] transition-colors">{dir.name}</h4>
                      <p className="text-white/50 text-sm flex items-center gap-2 mt-1">
                        <Clock className="w-3 h-3" /> {dir.years} {dir.role && <span className="text-[#c9a227]/70">• {dir.role}</span>}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Table */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Curriculum</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Approved General Studies Courses</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-[2.5rem] border border-gray-100 shadow-2xl bg-white">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse responsive-table">
                <thead>
                  <tr className="bg-[#1a365d] text-white">
                    <th className="px-8 py-6 font-serif font-bold text-lg">Code</th>
                    <th className="px-8 py-6 font-serif font-bold text-lg">Course Title</th>
                    <th className="px-8 py-6 font-serif font-bold text-lg text-center">Units</th>
                    <th className="px-8 py-6 font-serif font-bold text-lg text-center">Level</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((course, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-[#f8fafc] transition-colors group">
                      <td data-label="Code" className="md:px-8 md:py-4 font-bold text-[#c9a227]">{course.code}</td>
                      <td data-label="Course Title" className="md:px-8 md:py-4 text-[#1a365d] font-bold md:group-hover:pl-10 transition-all">{course.title}</td>
                      <td data-label="Units" className="md:px-8 md:py-4 md:text-center font-bold text-gray-400">{course.units}</td>
                      <td data-label="Level" className="md:px-8 md:py-4 md:text-center">
                        <span className="px-4 py-1 rounded-full bg-[#f0f4f8] text-[#1a365d] text-xs font-bold uppercase tracking-widest border border-gray-100 shadow-sm">
                          {course.level}L
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

      {/* Course Descriptions */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">In-Depth</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Course Descriptions</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {descriptions.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="px-5 py-2 bg-[#1a365d] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#1a365d]/20">
                    {item.code}
                  </span>
                  <BookOpen className="w-6 h-6 text-[#c9a227] opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-600 leading-relaxed group-hover:text-[#1a365d] transition-colors">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-[#1a365d] rounded-[3.5rem] p-6 md:p-12 lg:p-24 text-center text-white relative overflow-hidden">
            {/* Background Decorative Circles */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#c9a227]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
            
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-[#c9a227] rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl rotate-3">
                <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 md:mb-8">Need Support?</h2>
              <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 md:mb-12">
                Our team is here to assist with course registrations, feedback, and any general inquiries 
                regarding the GST curriculum.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <a href="mailto:dirgsp@run.edu.ng" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-[#1a365d] transition-all duration-500 group overflow-hidden">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] group-hover:bg-[#1a365d] group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-left overflow-hidden w-full">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c9a227] mb-0.5 md:mb-1">Director Email</p>
                    <p className="font-medium group-hover:text-[#1a365d] transition-colors truncate text-sm md:text-base">dirgsp@run.edu.ng</p>
                  </div>
                </a>
                
                <a href="mailto:gstcomplaints@run.edu.ng" className="flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white hover:text-[#1a365d] transition-all duration-500 group overflow-hidden">
                  <div className="shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-xl bg-[#c9a227]/20 flex items-center justify-center text-[#c9a227] group-hover:bg-[#1a365d] group-hover:text-white transition-colors">
                    <HelpCircle className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div className="text-left overflow-hidden w-full">
                    <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#c9a227] mb-0.5 md:mb-1">Complaints</p>
                    <p className="font-medium group-hover:text-[#1a365d] transition-colors truncate text-sm md:text-base">gstcomplaints@run.edu.ng</p>
                  </div>
                </a>
              </div>

              <div className="mt-16 flex items-center justify-center gap-2 text-white/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#c9a227]" />
                Committed to Student Excellence & Holistic Growth
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
