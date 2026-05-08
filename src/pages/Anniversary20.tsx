import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';

export function Anniversary20() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const events = [
    {
      month: "March",
      items: [
        { title: "20 Hours of Prayer", desc: "Focusing on thanksgiving and dedication of the anniversary events to God for successful outcomes." },
        { title: "Release of Anniversary Balloons", desc: "20 balloons will be released after the press conference for publicity and visual impact." },
        { title: "Press Conference", desc: "Commencing the anniversary at an agreed date in honour of the Visioner, Pastor E. A. Adeboye." },
        { title: "1st Anniversary Lecture", desc: "Theme: 'Accelerating the Vision towards global Transformation', marking the Visitor's birthday month." }
      ]
    },
    {
      month: "April",
      items: [
        { title: "Tree Planting", desc: "A symbol of growth and sustainability, aligning with the university's vision for environmental responsibility." },
        { title: "Community Outreaches", desc: "Visits and support to orphanages and motherless homes, reflecting our commitment to social responsibility." },
        { title: "Love Showcase", desc: "Gifts of useful items for the needy, encouraging sustainable giving across the university community." }
      ]
    },
    {
      month: "May",
      items: [
        { title: "Career Day", desc: "Exposing students to career paths and professional mentorship to bridge the gap to employment." },
        { title: "Sporting Competition", desc: "Promoting health, teamwork, and unity while nurturing athletic talents among students." },
        { title: "Literary & Essay Competitions", desc: "Debates for secondary schools and undergraduates to improve public speaking and research skills." },
        { title: "Entrepreneurship Competitions", desc: "Promoting creative thinking and equipping students with skills to start and sustain businesses." },
        { title: "RUN Got Talents", desc: "A platform for students to express talents in music, dance, poetry, and creative arts." }
      ]
    },
    {
      month: "June",
      items: [
        { title: "Adopt-a-child Initiative", desc: "Uplifting the less privileged through education and fostering a spirit of collective philanthropy." },
        { title: "Research Fair", desc: "Showcasing cutting-edge research and encouraging collaboration between academia and industry." },
        { title: "Drug Abuse Awareness Day", desc: "Promoting a healthy, drug-free campus environment through education and advocacy." }
      ]
    },
    {
      month: "July",
      items: [
        { title: "Celebrating the Female Gender", desc: "In honour of Mummy GO, Pastor (Mrs.) Folu Adeboye. 2nd Anniversary Lecture: 'The Role of Women of Faith in Conflicts Resolution'." }
      ]
    },
    {
      month: "August",
      items: [
        { title: "Benefactor’s Day", desc: "Recognising and honouring individuals and organisations who have contributed to the university's development." },
        { title: "CEO’s Roundtable", desc: "A platform for business executives and students to engage on leadership and industry trends." },
        { title: "Trade Fair", desc: "Networking and marketing opportunities for companies in banking, IT, telecoms, and hospitality." },
        { title: "Corporate Nigeria Day", desc: "Strengthening university-industry collaboration for national development and innovation." },
        { title: "Alumni Events", desc: "Celebrating the legacy of the university and strengthening global alumni networks." }
      ]
    },
    {
      month: "September",
      items: [
        { title: "Recognition Night", desc: "Celebrating staff and partners who have played significant roles in the university's success." },
        { title: "Outreach at Timi’s Palace", desc: "Medical outreach and CSR initiatives to show appreciation to the host community in Ede." },
        { title: "Grand Finale of Competitions", desc: "Unveiling and rewarding the winners of all anniversary competitions." },
        { title: "Launching of Publications", desc: "Unveiling the 20th anniversary book and commemorative magazine." },
        { title: "Fire Station Dedication", desc: "Dedication of the new fire station and truck donated by the university staff." },
        { title: "3rd Anniversary Lecture", desc: "Final lecture on the theme: 'Accelerating the Vision towards global Transformation'." },
        { title: "Photo Gallery", desc: "A historic display documenting 20 years of milestones and transformations." }
      ]
    }
  ];

  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/20th-anniversary.jpg"
            alt="20th Anniversary"
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
            <span className="section-label text-[#c9a227]">Two Decades of Excellence</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight max-w-4xl">
              Celebrating 20 Years of Global Transformation
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Accelerating the vision towards global transformation and academic standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Theme Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-[#f8fafc]">
                <img 
                  src="/images/20th-anniversary.jpg" 
                  alt="University Vision" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#1a365d] p-8 rounded-3xl text-white shadow-xl hidden md:block">
                <Sparkles className="w-10 h-10 text-[#c9a227] mb-4" />
                <p className="text-2xl font-serif font-bold mb-1">20 Years</p>
                <p className="text-xs font-bold uppercase tracking-widest opacity-80">Of Continuous Impact</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="section-label">The Anniversary Theme</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-6">
                Accelerating the Vision towards Global Transformation
              </h2>
              <div className="decorative-line-left mb-8" />
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Our vision—“To be the foremost academic institution setting standards through continuous commitment to excellence geared towards making a transformative impact on society”—has guided us for two decades.
                </p>
                <p>
                  We have made a clear statement of our commitment by playing a leading role in combating global health crises like Lassa Fever, Ebola, and COVID-19. This anniversary underscores our unwavering commitment to realizing our mission with even greater momentum.
                </p>
                <p className="italic border-l-4 border-[#c9a227] pl-6 py-2 bg-[#f8fafc] rounded-r-xl">
                  "...to change the world for God..." — University Anthem
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className="section-padding bg-[#f8fafc] relative">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Timeline of Events</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Anniversary Calendar</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto space-y-12">
            {events.map((month, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative grid md:grid-cols-[150px_1fr] gap-8"
              >
                <div className="flex flex-col items-center">
                  <div className="w-full py-4 bg-[#1a365d] rounded-2xl text-center text-white shadow-lg sticky top-32">
                    <span className="text-2xl font-serif font-bold">{month.month}</span>
                    <div className="w-8 h-1 bg-[#c9a227] mx-auto mt-2" />
                  </div>
                  <div className="hidden md:block w-px h-full bg-gray-200 mt-4" />
                </div>

                <div className="grid sm:grid-cols-2 gap-6 pb-12">
                  {month.items.map((event, eventIdx) => (
                    <div 
                      key={eventIdx}
                      className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-xl bg-[#f0f4f8] flex items-center justify-center mb-6 group-hover:bg-[#1a365d] transition-all duration-500">
                        <Sparkles className="w-5 h-5 text-[#c9a227]" />
                      </div>
                      <h3 className="text-lg font-serif font-bold text-[#1a365d] mb-3 group-hover:text-[#c9a227] transition-colors leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {event.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-[#1a365d] text-white relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#c9a227]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <Star className="w-12 h-12 text-[#c9a227] mx-auto mb-8" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-6 italic leading-relaxed">
                "Our impact should transcend the African region to the global society, fulfilling the mandate to be among the top ten Universities in the World."
              </h3>
              <div className="w-16 h-1 bg-[#c9a227] mx-auto mb-6" />
              <p className="text-[#c9a227] font-bold tracking-widest uppercase text-sm">
                Vision 2025 and Beyond
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
