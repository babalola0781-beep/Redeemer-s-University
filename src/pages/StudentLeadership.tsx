import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

const leaders = [
  {
    level: 1,
    members: [
      {
        name: 'Asaolu Mosimiloluwa',
        position: 'President',
        image: '/images/runsa/AsaoluMosimiloluwaPRESIDENT.jpeg',
        description: 'Serves as the chief executive of the student body, ensuring holistic student welfare and representing RUNSA at all levels.'
      }
    ]
  },
  {
    level: 2,
    members: [
      {
        name: 'Erinle Oluwatobiloba',
        position: 'Vice President',
        image: '/images/runsa/ErinleOluwatobilobaVicePresident.jpeg',
        description: 'Assists the President and coordinates internal committee operations and student engagement programs.'
      }
    ]
  },
  {
    level: 3,
    members: [
      {
        name: 'Aina Oluwafikayomi Pamilerin',
        position: 'General Secretary',
        image: '/images/runsa/AinaOluwafikayomiPamilerinGENERALSECRETARY.jpeg',
        description: 'Manages all administrative duties, correspondence, and records for the student association.'
      },
      {
        name: 'Adeoye Adesoji Toluwalase',
        position: 'Assistant General Secretary',
        image: '/images/runsa/Adeoye AdesojiToluwalaseASSISTANT GENERALSECRETARY.jpeg',
        description: 'Supports the General Secretary in administrative tasks and maintains official communication channels.'
      }
    ]
  },
  {
    level: 4,
    members: [
      {
        name: 'Owoeye Excellence Ayomide',
        position: 'Financial Secretary',
        image: '/images/runsa/OwoeyeExcellenceAyomideFINANCIALSECRETARY.jpeg',
        description: 'Oversees the financial records and budgeting of RUNSA activities.'
      },
      {
        name: 'Oluwatofunmi Olowolagba Peter',
        position: 'Treasurer',
        image: '/images/runsa/OluwatofunmiOlowolagbaPeterTREASURER.jpeg',
        description: 'Safeguards the association\'s funds and ensures transparency in all financial transactions.'
      }
    ]
  },
  {
    level: 5,
    members: [
      {
        name: 'Adedugbe Oluwasemiloore',
        position: 'Public Relations Officer',
        image: '/images/runsa/AdedugbeOluwasemiloorePUBLICRELATIONSOFFICER.jpeg',
        description: 'Manages the public image of RUNSA and disseminates vital information to the student body.'
      },
      {
        name: 'Khalil Amira Ete-ewarami',
        position: 'Welfare Director',
        image: '/images/runsa/Khalil Amira EteewaramiWELFAREDIRECTOR.jpeg',
        description: 'Advocates for students\' rights, health, and general wellbeing on campus.'
      },
      {
        name: 'Dare Koffi Sylvain',
        position: 'Asst. Welfare Director',
        image: '/images/runsa/Dare Koffi SylvainASSISTANTWELFAREDIRECTOR.jpeg',
        description: 'Helps coordinate welfare initiatives and support systems for students in need.'
      },
      {
        name: 'Oso Daniel Ifedayo',
        position: 'Social Director',
        image: '/images/runsa/Oso DanielIfedayoSOCIALDIRECTOR.jpeg',
        description: 'Organizes social events, entertainment, and cultural activities to build a vibrant community.'
      },
      {
        name: 'Olalekan Tunmise',
        position: 'Sports Director',
        image: '/images/runsa/Olalekan TunmiseSPORTSDIRECTOR.jpeg',
        description: 'Coordinates all sporting activities and represents the university in athletic engagements.'
      }
    ]
  }
];

export function StudentLeadership() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/runsa/RUNSA-scaled.jpg"
            alt="RUNSA Student Body"
            className="w-full h-[130%] object-cover"
          />
          <div className="absolute inset-0 bg-[#1a365d]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#1a365d]/90" />
        </motion.div>
        <div className="relative z-10 container-custom text-center text-white pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md"
          >
            <span className="section-label">Student Governance</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6">
              RUNSA
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
              RUNSA stands as the unified voice of the student body, fostering 
              leadership, academic excellence, and a vibrant community spirit.
            </p>
          </motion.div>
        </div>
      </section>

      {/* History of RUNSA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
            >
              <span className="section-label">Our Story</span>
              <h2 className="text-3xl font-serif font-bold text-[#1a365d] mt-3 mb-6">History of RUNSA</h2>
              <div className="decorative-line-left mb-6" />
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  The Redeemer's University Students' Association (RUNSA) was inaugurated by the representative of the Vice-Chancellor and Chairman, Students' Welfare Board, Prof. L.B. Kolawole on 8th January, 2008. Present at the occasion were other Principal Officers of the university including Mr. Adebayo, the Registrar, Mr. William Oloyede, the Acting Bursar and Mr. Olorunshola, the Acting Librarian. Mr. Akintayo, the Students' Affairs Officer, was also in attendance.
                </p>
                <p>
                  It was a dream come true for both the management and students. On the part of the management, it was a big sigh of relief; indeed it was a testimony of a promise kept. The University Management considering the impact of such on other universities, especially the Federal and State owned ones desired a clear line of departure from the conventional universities, so, it designed a unique structure for the association.
                </p>
                <p>
                  One major event organised by this pioneer administration was the RUNSA Week. The hallmark of the week was the Culture and Arts Day called RUNSA Carnival which displayed the rich cultures of the various geo-political zones of the country.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-[500px] group"
            >
              <img src="/images/SIDE-VIEW-OF-SAPETRO-LECTURE-THEATRE-1.jpg" alt="University Campus" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#1a365d]/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Organizational Tree */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Our Leaders</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mt-3 mb-4">RUNSA Executives</h2>
            <div className="decorative-line mx-auto mb-6" />
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              {`The Students' Association is a good platform on which leaders of today and tomorrow can experiment their ideas and put to test their leadership skills which will be needed in the building of a new Nigeria.`}
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {leaders.map((levelGroup, idx) => (
              <motion.div
                key={idx}
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-8"
              >
                {levelGroup.members.map((member, mIdx) => (
                  <motion.div
                    key={mIdx}
                    variants={fadeUpItem}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className={`group relative overflow-hidden rounded-2xl shadow-lg bg-white w-full sm:w-[350px] ${
                      levelGroup.level === 5 ? 'sm:w-[280px]' : ''
                    }`}
                  >
                    <div className="relative h-80">
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Base Gradient for readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-[#1a365d]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply z-10" />
                      
                      {/* Content Block */}
                      <div className="absolute bottom-0 left-0 w-full p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 ease-out z-20 flex flex-col justify-end h-full">
                        <div className="transform transition-transform duration-300">
                          <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                          <p className="text-[#c9a227] text-sm font-semibold uppercase tracking-wider mb-2">{member.position}</p>
                        </div>
                        <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 mt-2">
                          <p className="text-white/90 text-sm leading-relaxed">
                            {member.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto cta-gradient rounded-3xl p-12 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-serif font-bold mb-4">Want to Join the Secretariat?</h2>
              <p className="text-white/80 mb-8 max-w-xl mx-auto">
                Elections are held annually. Become a part of the leadership structure and make a tangible difference in the university.
              </p>
              <button className="btn-secondary inline-flex items-center gap-2 group">
                Learn About Elections
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Decorative background shapes */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 animate-breathe" />
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-white/5 animate-breathe" style={{ animationDelay: '2s' }} />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
