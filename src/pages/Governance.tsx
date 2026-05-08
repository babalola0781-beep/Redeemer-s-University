import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Users, GraduationCap, Building2, X, Quote } from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export function Governance() {
  const [selectedOfficer, setSelectedOfficer] = useState<any>(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const principalOfficers = [
    { 
      name: 'Pastor Enoch Adejare Adeboye', 
      position: 'Visitor to the University', 
      image: '/images/governance/PastorEnochAdejare AdeboyeVisitortotheUniversity.jpg',
      bio: `Pastor Enoch Adejare Adeboye, the Visitor to the university and the General Overseer of the Redeemed Christian Church of God (RCCG) was born on March 2, 1942 in Ifewara, Osun state, Nigeria.\n\nHe attended Saint Stephen’s Anglican Primary School, Ilesa Grammar School, University of Nigeria, Nsukka; University of Ife (now Obafemi Awolowo University) and University of Lagos. With an M. Sc. in Hydrodynamics and a Ph.D. in Applied Mathematics, the soft spoken Pastor started his teaching career at Okeigbo Ifetedo Grammar School where he taught Mathematics and later moved to the Lagos-based Anglican Girls Grammar School. He, thereafter, lectured at University of Lagos and later University of Ilorin.\n\nHe joined RCCG in 1973 where he became born again on 29th July, 1973. He was ordained a Pastor of the church on September 14, 1975. He succeeded Reverend Akindayomi when the latter went to be with the Lord on November 2, 1980 and was ordained General Overseer of the RCCG in 1981, a church that has spread to several nations of the world from a humble beginning under his able leadership.\n\nPastor E. A. Adeboye is an elder statesman and renowned man of God at home and abroad. He has authored several books and was voted one of the 50 most influential personalities in the world by the International Newsweek Magazine in 2008.`
    },
    { 
      name: 'General Theophilus Yakubu Danjuma, GCON, FSS, psc, (Rtd.)', 
      position: 'Chancellor', 
      image: '/images/governance/GeneralTheophilusYakubuDanjuma,GCON, FSS, psc,(Rtd.)Chancello.jpg',
      bio: `General Theophilus Yakubu Danjuma, GCON, FSS, psc, (Rtd.) was born 9th December, 1938. He is from Takum Local Government Area in Taraba State. He is a highly detribalized Nigerian soldier, respected politician, elder-statesman, multi-millionaire businessman and philanthropist. He was Nigerian Army Chief of Army Staff from July 1975 to October 1979.\n\nHe was also Minister of Defence from 1999 to 2003 under President Olusegun Obasanjo. He is the Chairman of South Atlantic Petroleum (SAPETRO), a petroleum exploration company with corporate headquarters in Lagos. He has also held top advisory positions to previous and the current President of Nigeria as Chairman of Presidential Advisory Councils. It is his impressive track record of philanthropic giving that culminated in the establishment of the T.Y. Danjuma Foundation.\n\nHe has continued to contribute to educational development of this country through many of his philanthropic gestures in many institutions of higher learning which resulted in him being a recipient of several honorary degrees from several universities which were awarded to him in appreciation of his sterling contributions.\n\nHe is the donor of the multi-billion naira T.Y. Danjuma Faculty of Engineering here in Redeemer’s University.\n\n**Duties and Responsibilities**\nThe Chancellor’s role is largely ceremonial with the overall management of the university being undertaken by the Vice-Chancellor and Board of Trustees. How the role is interpreted varies between universities but in Redeemer’s University, the Chancellor visits the university at least once in every five years with the seven members of the University’s Governing Council.`
    },
    { 
      name: 'Pastor Olukayode Pitan', 
      position: 'Chairman, Board of Trustees', 
      image: '/images/governance/Pastor OlukayodePitanChairman,Boardof Trustees.jpg',
      bio: `Pastor Kayode Pitan, Chairman, Board of Trustees, Redeemer’s University, Ede is a Senior Pastor at the Redeemed Christian Church of God, RCCG, City of David, whose emergence at the summit of his career and ministry was full of testimonies of God’s faithfulness.\n\nHe was a seasoned banker and erudite investor who worked assiduously to be an indomitable power broker in investment banking, structural and project finance, and the oil, gas, and power sectors, where he was the Managing Director of ENESEC-energy division. ENESEC is a specialized banking unit in the FSB International Bank Plc that focuses on the energy sector in Nigeria.\n\nAs a financial expert, his fiscal wizardry allowed him to superintend many sensitive financial units such as Managing Director/Chief Executive Officer, First Interstate Bank Plc; Unity Bank Plc- in charge of Corporate Banking and Treasury Management; Arthur Andersen, Nigeria International Bank(Citibank); Head, Trade Finance, Industrial Bank Limited; Assistant General Manager, Public Sector and Middle Tier Market, FSB International Bank Plc; Group Head, Commercial and Consumer Banking Group; Chairman of the Technical Committee that midwives the merger of Centrepoint Securities Limited and FIIST Ventures Ltd., to form Unity Registrars Ltd.\n\nHe also served as the Chairman of the Technical Committee that merged Kapital Insurance Plc, Intercontinental Assurance Company Ltd, and Global Commerce General Assurance Co. Ltd into Unity Kapital Insurance Co Plc, where he served as the Director of the new financial institution and also instrumental in the listing of Unity Bank on the Nigerian Stock Exchange.\n\nWhile he held sway as the Managing Director/Chief Executive Officer of Nigeria’s oldest bank, the Bank of Industry, he resourcefully raised over $ 5 billion from the international bond market, providing buoyancy for the age-long financial institution.\n\nHe is known for his uncompromising standard and someone whose greatest delight is to bring smiles to the downtrodden, he has been the Chairman of the Habitation of Hope. The NGO is a non-governmental organization founded by Pastor Mrs. Folu Adeboye, the wife of the General Overseer of the Redeemed Christian Church of God, RCCG, whose objective is to reach out to the have-nots.\n\nPastor Kayode Pitan must have found the words of Wayne Muller inspiring when he said, “As we serve others, we are working on ourselves; every act, every word, every gesture of genuine compassion naturally nourishes our hearts as well. More healing is made available for others when we attend to ourselves with compassion and mercy. And great healing comes when we serve others with open and generous hearts.”\n\nIf any mortal had impacted lives positively, Pastor Kayode Pitan will come to mind because he has given succor to the lonely in heart, uplifted the dispirited and the dismembered; he has umpteenth times demonstrated that our lives no longer belong to us alone; they belong to all who need us desperately and that our lives are not significant except for its impact on others.\n\nA friend of his once described him as a rare breed that does not have greed. In every of his dealings, he has always taken to active cognizance the word of Albert Pine, who said, “What we do for ourselves dies with us. What we do for others and the world remains and is immortal.”\n\nTo Pastor Kayode Pitan, service to God and humanity is what prayer looks like; it gets up off its knees and walks around the world. The multiplier effect is evident at every given point of service by this enigma, which believes that the best way anyone could find themself is to lose oneself in the service of others. If any, for his selfless service, Pastor Kayode Pitan will receive a gold medal for his compassionate promotion and projection of humanity. He is a proper vessel in the vineyard of God and also typifies what he preaches and acts beyond the verbal proclamation of what he teaches on the pulpit. He detests luxury and the profane. Humility and modesty are his watchwords despite his enviable attainments, both professionally and spiritually.`
    },
    { 
      name: 'Prof. Toyin Ogundipe', 
      position: 'Pro-Chancellor & Chairman, Governing Council', 
      image: '/images/governance/PROF. TOYINOGUNDIPEProChancellor&Chairman,GoverningCouncil.jpeg',
      bio: `Prof. Ogundipe began his early education at Araromi Baptist school on Moloney street before proceeding to secondary school first at Eko Boys’ High School and later C.M.S Grammar School where he started his A levels at 17 in 1977. He gained admission into the University of Ife (now Obafemi Awolowo University), Ile-Ife to study Botany. He bagged his first degree in 1984, and had his National Youth Service Corps scheme at Tai-Eleme in Rivers State. He later returned to the University of Ife for a Master’s and PhD degrees in Botany. His PhD was completed in two and a half years in March 1990. In May of that same year, he began his academic career at the University of Lagos. Prof. Ogundipe rose through the ranks to become a Professor in 2002.\n\nAt various times, he trained at the University of Johannesburg, South Africa, University of Reading, UK, University of Reading, UK; University of Cambridge, UK; University of Johannesburg; Harvard University in the United States; and Kunming Institute of Botany, China; and has researched on Molecular Plant Taxonomy/Biosystematics, Forensic Botany, Cytogenetics, Ethnobotany, Paleobotany and Ecological conservation, with over 90 publications in accredited academic journals. He also co-authored eight books with his research output chiefly in the areas of Molecular Plant Systematics, updating the taxonomy of some plant genera and using the anatomical features in the identification of sterile and fragmentary plant specimens.\n\nThe fellow of the Nigeria Academy of Science Royal Society of Biology, London, Leadership for Environment & Development, Linnaean Society of London, Institute of Security, Institute of Corporate & Business Affairs Management, Nigeria, and National President, Botanical Society of Nigeria, since joining the University of Lagos in 1990, has held different administrative positions.\n\nProf. Ogundipe was head, Department of Botany where he introduced sweeping reforms at the department. As a sub-dean, Faculty of Science, he began the computerization of students’ results and also attracted collaboration from multinational corporations. He later became the dean of the School of Postgraduate Studies where he attracted a lot of town-gown relationships and led the computerization of the entire process in the school.\n\nHe was also the director of the Academic Planning Unit and in 2016 was appointed as deputy vice-chancellor (academics & research) and later appointed as the vice-chancellor of Unilag on November 12, 2017. Prof. Ogundipe successfully completed his term of five years as vice-chancellor in November 2022. He is happily married with children.`
    },
    { 
      name: 'Prof. Shadrach Olufemi Akindele', 
      position: 'Vice-Chancellor', 
      image: '/images/governance/Prof. ShadrachOlufemiAkindeleVICECHANCELLOR.jpg',
      bio: `Professor Shadrach Olufemi Akindele, a distinguished scholar and visionary leader, has been appointed as the new Vice Chancellor of Redeemer’s University, Ede, ushering in an era of innovation and academic excellence. The appointment is for a single term of five years. With a remarkable track record in higher education and a deep commitment to fostering learning and research, Professor Akindele is poised to make a lasting impact on the university and the broader academic community.\n\nProfessor Akindele attended the University of Ibadan where he earned his B.Sc. degree in Forest Resources Management in 1985. After completing his NYSC programme, he returned to the same University for his postgraduate studies and earned M.Sc. and Ph.D. in Forest Biometrics in 1987 and 1990, respectively. Professor Akindele began his academic career as a Teaching Assistant at the University of Ibadan in 1987, and moved to the Federal University of Technology, Akure (FUTA) as an Assistant Lecturer in 1988. At FUTA, he rose through the ranks to become a Professor in 2005.\n\nAt various times, Professor Akindele was a Visiting Professor at the University of British Columbia, Vancouver, Canada, and the University of Alberta, Edmonton, Canada, where he showcased his dedication to research and strong passion for educational development.\n\nIn university administration, Professor Akindele has served in different positions including Head of Department, Dean, Chairman of Committee of Deans, Member of University Governing Council, Director of a University Centre, and Chairman of several University Committees. He has had cause to represent the Vice Chancellor within and outside Nigeria at different times. Professor Akindele has received many awards in recognition of his services and contributions to the development of the University and the society at large.\n\nProfessor Akindele has several years of experience in consulting, having served as consultant on projects funded by the World Bank, the African Development Bank, Food and Agriculture Organization of the United Nations, and Nigeria’s Government at Federal and State levels. These assignments have enabled him to establish a broad network of contacts which can be tapped to contribute to university development.\n\nAs Vice Chancellor, Professor Akindele brings a holistic perspective to university leadership, emphasizing the importance of fostering a dynamic learning environment, fear of God, and community engagement. His vision for Redeemer’s University is to promote a vibrant educational community where staff and students are supported to embrace their faith in the Redeemer, achieve academic excellence, and positively influence the world through love, compassion, and ethical leadership.\n\nProfessor Akindele is a member of the Redeemed Christian Church of God. He was ordained as a full Pastor in 2009, and has served in various capacities as Parish Pastor, Area Pastor, Provincial Music Director, and Director of Visitation and Follow-up Department. He is married to Assistant Pastor (Mrs.) Hannah Oluwatoyin Akindele and they are blessed with two sons and a grandson.`
    },
    { 
      name: 'Prof. Peter Adewuyi Aderonmu', 
      position: 'Deputy Vice-Chancellor (Development)', 
      image: '/images/governance/Prof. PeterAdewuyiAderonmuDeputyViceChancellor(Development).jpg',
      bio: `Prof. Peter Adewuyi Aderonmu is a graduate of the University of Jos in Plateau State, where he earned his Bachelor of Architecture and Master of Architecture degrees in 1999 and 2001, respectively. He later obtained a Doctor of Philosophy in Architecture in 2013.\n\nProf. Aderonmu is widely published and a full member of the Architecture Regulatory Council of Nigeria (ARCON), an apex body for regulating and practicing the Architecture profession in Nigeria. He is a pastor of the Redeemed Christian Church of God and is blessed with a wonderful family.`
    },
    { 
      name: 'Prof. Chiagoziem Otuechere', 
      position: 'Deputy Vice-Chancellor (Academics)', 
      image: '/images/governance/Prof. ChiagoziemOtuechereDeputyViceChancellor (Academics).jpg',
      bio: `Professor Otuechere is a distinguished biochemist and educator, widely recognised for his extensive contributions to biochemical toxicology, phytomedicine, and nanomedicine. He holds a PhD, MSc and BSc in Biochemistry from the University of Ibadan. His immediate past position was Dean of the Faculty of Basic Medical Sciences at Redeemer’s University.\n\nHis academic career encompasses teaching, research and administration. He has held pivotal lecturing positions at Hawassa University, Ethiopia, under both the Nigerian Technical Aids Corps Scheme and the UNDP-World Bank Programme.\n\nAt Redeemer’s University, he advanced from assistant lecturer to professor, demonstrating a consistent record of excellence and a deep commitment to advancing biochemical sciences through research and mentorship. Professor Otuechere has supervised numerous PhD, MSc and undergraduate students, fostering the development of future biomedical scientists. Professor Otuechere has also published widely in his own research niche.\n\nHe is an active member of leading professional bodies including the American Society for Pharmacology and Experimental Therapeutics, Society of Toxicology, Biochemical Society, European Association for Cancer Research, Nigerian Society of Biochemistry and Molecular Biology, and the American Society for Microbiology.`
    },
    { 
      name: 'Pastor David Akintola', 
      position: 'Registrar', 
      image: '/images/governance/PastorDavidAkintolaRegistrar.jpeg',
      bio: `Pastor David Akintola was born on 23rd November 1963 in Minna, Niger State. He is an alumnus of the University of Ibadan, where he obtained a Bachelor of Science (Agriculture) in Crop Science in 1987 and a Master of Science degree in Agronomy (Crop Science) in 1989. He also holds a postgraduate Diploma in Theology.\n\nHe started his career at the University of Ibadan as a Teaching Assistant in the Department of Agronomy from October 1991 to January 1993. He was also an Associate Lecturer at Lagos State University between 1991 and 1994. He worked as an Administrative Manager at Basic Trust International (an NGO) between February 1993 and October 2000.\n\nHe joined the then-proposed Redeemer’s University as the pioneer staff in 2002 and became Deputy Registrar on September 11, 2017. He has served the university in various capacities and Divisions of the University Registry, including as Academic Affairs Officer, Council Affairs Officer, Human Resources Officer, and College Officer.\n\nHe was Deputy Registrar at the Office of the Vice-Chancellor, where he also served as Secretary to the University Management from January 2012 till 31st March 2020, before he was redeployed to the Academic Affairs Division as the Deputy Registrar in charge of the office till 20th November 2023. He assumed office as the Secretary to the College of Postgraduate Studies of the University on the 1st of December 2023. He became the Acting Director of the Directorate of Student Support and Services on the 1st of April 2024, a position he held till his assumption of office as the Acting Registrar on the 15th of February 2025.\n\nHe is a prized member of the university community and a key player in the university’s infrastructural development. He is an ordained pastor and national officer in the Redeemed Christian Church of God (RCCG) and is happily married with children.\n\n**DUTIES AND RESPONSIBILITIES**\nThe Registrar is the Chief Administrative Officer of the university and is responsible to the Vice-Chancellor for the day-to-day administrative work of the university except as regards those for which the Deputy Vice-Chancellor and the Bursar are responsible. He is also the Secretary to the Governing Council, Senate and Congregation.`
    },
    { 
      name: 'Mr. Samuel Momodu', 
      position: 'Bursar', 
      image: '/images/governance/Mr. SamuelMomoduBursar.jpg',
      bio: `Mr. Samuel Momodu obtained a Bachelor of Science from the prestigious University of Benin, Benin City, Edo State, in 2000. He reached the zenith of his professional practice as a fellow of the Institute of Chartered Accountants of Nigeria (ICAN) in 2016. He also bagged a Master of Business Administration from Oduduwa University, Ipetumodu, Osun State, in 2022.\n\nMr. Momodu has also been an associate member of the Chartered Institute of Taxation of Nigeria (CITN) since 2000. He has been one of the industry players in the fields of Accounting and Taxation for a quarter of a century in the country.\n\nHe is a foundation staff of the Redeemer’s University and the most senior in the Bursary Department. He is a pastor in the Redeemed Christian Church of God and happily married with children.`
    },
    { 
      name: 'Dr. (Mrs.) Pauline Oghenekaro Adeniran', 
      position: 'Ag. Librarian', 
      image: '/images/governance/Dr. (Mrs.) PaulineOghenekaroAdeniranAg. Librarian.jpeg',
      bio: `Dr. (Mrs.) Pauline Oghenekaro Adeniran obtained a Bachelor of Science in Library and Information Science from Delta State University, Abraka, in 2003 and a Master of Archives and Record Management from the prestigious University of Ibadan in 2009. She earned a Doctor of Philosophy in Information Resources Management from Babcock University Ilishan-Remo, Ogun State in 2017.\n\nShe is a certified Librarian of Nigeria and a member of the Nigerian Library Association. She joined the university service in 2005 as one of the pioneer staff members and grew through the ranks to become a Deputy University Librarian on 1st October 2022.\n\nThe library units where she has served are the Serials Unit, Technical Unit, Reference Unit, Adeboye Collection, and Church History Research Unit. She has served on various university committees and has been widely published as a scholar. She is also an ordained pastor in the Redeemed Christian Church of God (RCCG) and is happily married.\n\n**Duties and Responsibilities**\nThe University Librarian is the academic head of the university’s library. She is responsible to the Vice-Chancellor for the development of the university library system which includes the main library, college, and departmental libraries.`
    },
  ];

  const botMembers = [
    'Pastor Kayode Pitan - Chairman',
    'Pastor Ben Akabueze - Member',
    'Pastor Abiodun Olaobaju - Member',
    'Dr. Dan Ogun - Member',
    'Barr. Mercy Omoyeni - Member',
    'Dr Bolanle Oyeledun - Member',
    'Pastor Cyprian Orakpor - Member',
    'Professor Toyin Ogundipe - Pro-Chancellor and Chairman, Governing Council.',
    'Professor Shadrach O. Akindele - Vice Chancellor',
    'Dr. Oluseyi Alakija - Secretary',
  ];

  const governingCouncil = [
    { name: 'Professor Oluwatoyin T. Ogundipe, FAS', role: 'Pro-Chancellor (Chairman)' },
    { name: 'Professor Shadrach. O. Akindele, FFAN', role: 'Vice-Chancellor (Member)' },
    { name: 'Professor Peter A. Aderonmu', role: 'Deputy Vice-Chancellor Development (Member)' },
    { name: 'Professor Chiagoziem Otuechere', role: 'Deputy Vice-Chancellor Academics (Member)' },
    { name: 'Professor Emmanuel A. Ajav', role: 'Member, Representing RCCG' },
    { name: 'Pastor (Mrs.) Tomi Somefun', role: 'Member, Representing RCCG' },
    { name: 'Pastor Babasola Olukoya', role: 'Member, Representing RCCG' },
    { name: 'Dr. Aaron O. Salau', role: 'Member, Representing RCCG' },
    { name: 'Professor Babatunde A. Adedibu', role: 'Member, Representing Senate' },
    { name: 'Prof. Oluyinka O. Olajire', role: 'Member, Representing Senate' },
    { name: 'Professor Idowu O. Odebode', role: 'Member, Representing Congregation' },
    { name: 'Mrs. Funmi O. Kolade', role: 'Member, Representing NUC' },
    { name: 'Mr. Tobiloba Aniyi', role: 'Member, Representing Alumni' },
    { name: 'Mr. D. K. T. Akintola', role: 'Ag. Registrar (Secretary)' },
  ];

  const senateMembers = [
    ['Prof. S. O. Akindele', 'Vice-Chancellor'],
    ['Prof. Peter Adewuyi Aderonmu', 'Deputy Vice-Chancellor'],
    ['Dr. Pauline Adeniran', 'University Librarian'],
    ['Prof. A. Osho', 'Provost, College of Postgraduate Studies'],
    ['Prof. O. D. Olukanni', 'Dean, Faculty of Basic Medical Sciences'],
    ['Prof. P. A. Aderonmu', 'Dean, Faculty of Built Environment Studies'],
    ['Prof. I. Adewumi', 'Dean, Faculty of Engineering'],
    ['Prof. I. O. Odebode', 'Dean, Faculty of Humanities'],
    ['Prof. I. J. Koni', 'Dean, Faculty of Law'],
    ['Prof. K. E. Okpala', 'Dean, Faculty of Management Sciences'],
    ['Prof. U. E. Vincent', 'Dean, Faculty of Natural Sciences'],
    ['Prof. (Mrs) O. I. Akinbobola', 'Dean, Faculty of Social Sciences'],
    ['Dr. O. L. Adebayo', 'Ag. Head, Department of Biochemistry'],
    ['Dr. D. R. Omotoso', 'Ag. Head, Department of Human Anatomy'],
    ['Dr. (Mrs) O. O. Daramola', 'Ag. Head, Department of Human Physiology'],
    ['Dr. T. O. Ohiengbomwan', 'Coodinator, Department of Medical Laboratory Science'],
    ['Dr. (Mrs) D. F. Onisile', 'Ag. Head, Department of Nursing Science'],
    ['Dr. O. A. Idowu', 'Ag. Head, Department of Physiotherapy'],
    ['Dr. O. J. Avwioroko', 'Ag. Head, Department of Public Health'],
    ['Dr. (Mrs) O. Izobo-Martins', 'Ag. Head, Department of Architecture'],
    ['Dr. A. Opawole', 'Ag. Head, Department of Quantity Surveying'],
    ['Dr. A. B. Fajobi', 'Ag. Head, Department of Civil Engineering'],
    ['Dr. (Mrs) J. O. Joda', 'Ag. Head, Department of Computer Engineering'],
    ['Prof. O. Osasona', 'Head, Department of Electrical and Electronics Engineering'],
    ['Dr. O. S. Adesina', 'Ag. Head, Department of Mechanical Engineering'],
    ['Prof. B. Adedibu', 'Head, Department of Christian Religious Studies and Philosophy'],
    ['Dr. O. A. Adebayo', 'Ag. Head, Department of English'],
    ['Dr. B. U. Anaemene', 'Ag. Head, Department of History and International Studies'],
    ['Dr. R. Julius-Adeoye', 'Ag. Head, Department of Theatre Arts'],
    ['Dr. A. A. Adepoju', 'Ag. Head, Department of Private and Property Law'],
    ['Dr. (Mrs) T. Worimegbe', 'Ag. Head, Department of Accounting'],
    ['Dr. S. A. Agada', 'Ag. Head, Department of Business Administration and Marketing'],
    ['Dr. (Mrs) O. M. Akinyede', 'Ag. Head, Department of Finance'],
    ['Dr. (Mrs) A. Omitola', 'Ag. Head, Department of Hospitality and Tourism Management'],
    ['Dr. A. B. Irinyemi', 'Ag. Head, Department of Transport Management'],
    ['Prof. (Mrs) O. A. Folarin', 'Head, Department of Biological Sciences'],
    ['Dr. T. T. Oyetunde', 'Ag. Head, Department of Chemical Sciences'],
    ['Dr. (Mrs) B. O. Oguntunde', 'Ag. Head, Department of Computer Science'],
    ['Prof. F. Ayoade', 'Head, Department of Environmental Management and Toxicology and Director, AIP&GG'],
    ['Prof. S. O. Adesanya', 'Head, Department of Mathematics and Statistics'],
    ['Prof. A. A. Willoughby', 'Head, Department of Physical Sciences'],
    ['Dr. O. J. Oyeleke', 'Ag. Head, Department of Economics/Representative of Congregation'],
    ['Dr. E. C. Ifeduba', 'Ag. Head, Department of Mass Communication'],
    ['Dr. O. Oluwalogbon', 'Coordinator, Department of Political Science'],
    ['Dr. (Mrs) A. A. Akintola', 'Ag. Head, Department of Psychology'],
    ['Dr. (Mrs) O. A. Wellington', 'Ag. Head, Department of Sociology and Social Work'],
    ['Dr. A. O. Adedeji', 'Ag. Head, Department of Public Administration'],
    ['Prof. I. B. Oloyede', 'Department of Mass Communication/Chairman, Business Committee of Senate'],
    ['Prof. C. T. Happi', 'Department of Biological Sciences and Director, IGH'],
    ['Prof. A. O. Ogunde', 'Department of Computer Sciences and Director, Directorate of ICT'],
    ['Prof. S. A. Arekete', 'Department of Computer Science and Director, SIWES'],
    ['Prof. O. V. Ekanade', 'Department of History and International Studies & Director, DEST'],
    ['Prof. C. A. Otuechere', 'Department of Biochemistry and Director, DRIPs'],
    ['Dr. A. I. Shittu', 'Department of English and Ag. Director, DGSP'],
    ['Dr. (Mrs) O. O. Ilesanmi', 'Ag. Director, Centre for Gender and Humanitarian Development Studies'],
    ['Dr. O. D. Adeyanju', 'Department of Accounting and Ag. Director, RUNCEDS'],
    ['Prof. (Mrs) A. O. Adebileje', 'Department of English'],
    ['Prof. C. A. Ajayi', 'Department of Estate Management'],
    ['Prof. B. A. Salau', 'Department of Biochemistry'],
    ['Prof. A. O. Dairo', 'Department of Christian Religious Studies and Philosophy'],
    ['Prof. (Mrs.) B. O. Adeleke', 'Department of Hospitality and Tourism Management'],
    ['Prof. (Mrs.) T. Jegede', 'Department of English'],
    ['Prof. (Mrs.) P. O. Adeniji', 'Department of Hospitality and Tourism Management'],
    ['Prof. (Mrs.) F. O. Unuabonah', 'Department of English'],
    ['Prof. O. O. Olajire', 'Department of Sociology and Social Work'],
    ['Prof. J. A. Adeleke', 'Department of English (French Unit)'],
    ['Prof. M. A. Oyinloye', 'Department of Urban and Regional Planning'],
    ['Prof. (Mrs.) A. Ogunlaja', 'Department of Biological Sciences'],
    ['Prof. A. Adewuyi', 'Department of Chemical Sciences'],
    ['Prof. A. N. Happi', 'Research Professor \u2013 IGH'],
    ['Dr. (Mrs.) S. O. Ighomereho', 'Department of Business Administration & Marketing/ Representation of Congregation'],
    ['Dr. B. B. Fyanka', 'Department of History & International Studies/ Representative of Congregation'],
    ['Dr. S. A. Onanaye', 'Department of Mathematics & Statistics/ Representative of Congregation'],
    ['Mr. David K. T. Akintola', 'Acting Registrar'],
  ];

  return (
    <main>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[65vh] flex items-center bg-[#1a365d] overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <img
            src="/images/governance/Untitled-design-1scal.png"
            alt="University Governance"
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
            className="glass-dark inline-block p-8 md:p-12 rounded-3xl backdrop-blur-md"
          >
            <span className="section-label text-[#c9a227]">Leadership</span>
            <h1 className="text-page-hero font-serif font-bold mt-4 mb-6 leading-tight">
              University Governance
            </h1>
            <div className="w-16 h-0.5 bg-[#c9a227] mx-auto mb-6" />
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed font-light">
              Guided by vision, integrity, and excellence in academic and administrative leadership.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principal Officers Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Executive Leadership</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">Principal Officers</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {principalOfficers.map((officer, idx) => (
              <motion.div
                key={officer.name}
                variants={fadeUpItem}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => officer.bio && setSelectedOfficer(officer)}
                className={`group bg-[#f8fafc] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 ${officer.bio ? 'cursor-pointer' : ''}`}
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img 
                    src={officer.image} 
                    alt={officer.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/80 via-transparent to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity" />
                  
                  {officer.bio && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-300 transform translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0 shadow-lg">
                      <Quote className="w-4 h-4 text-[#1a365d]" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-[#1a365d] text-lg mb-1 leading-tight group-hover:text-[#c9a227] transition-colors">{officer.name}</h3>
                  <p className="text-[#c9a227] text-xs font-bold uppercase tracking-wider">{officer.position}</p>
                  
                  {officer.bio && (
                    <motion.div 
                      className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#1a365d] opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity"
                    >
                      Read Bio <span className="text-[#c9a227]">→</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Biography Modal */}
      <AnimatePresence>
        {selectedOfficer && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedOfficer(null)}
              className="absolute inset-0 bg-[#1a365d]/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedOfficer(null)}
                className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/90 shadow-lg flex items-center justify-center text-[#1a365d] hover:bg-[#c9a227] hover:text-white transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={selectedOfficer.image} 
                  alt={selectedOfficer.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/40 to-transparent" />
              </div>

              {/* Content Side */}
              <div className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto custom-scrollbar">
                <div className="mb-8">
                  <span className="section-label text-[#c9a227] mb-2">{selectedOfficer.position}</span>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] leading-tight">
                    {selectedOfficer.name}
                  </h2>
                  <div className="w-12 h-1 bg-[#c9a227] mt-6" />
                </div>

                <div className="prose prose-lg max-w-none">
                  {selectedOfficer.bio.split('\n\n').map((paragraph: string, i: number) => {
                    if (paragraph.startsWith('**')) {
                      const title = paragraph.replace(/\*\*/g, '');
                      return (
                        <h4 key={i} className="text-xl font-bold text-[#1a365d] mt-8 mb-4 border-l-4 border-[#c9a227] pl-4">
                          {title}
                        </h4>
                      );
                    }
                    return (
                      <p key={i} className="text-gray-600 leading-relaxed mb-6 text-lg">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>

                <div className="mt-10 pt-10 border-t border-gray-100 flex items-center gap-6">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#1a365d] flex items-center justify-center border-2 border-white">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center border-2 border-white">
                      <Building2 className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                    Legacy of Service & Leadership
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Board of Trustees & Governing Council */}
      <section className="section-padding bg-[#f8fafc]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Board of Trustees */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1a365d] flex items-center justify-center text-white">
                  <Building2 className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#1a365d]">Board of Trustees</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4">
                {botMembers.map((member, idx) => (
                  <div key={idx} className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#c9a227]" />
                    <span className="text-gray-700 font-medium">{member}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Governing Council */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#c9a227] flex items-center justify-center text-white">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-[#1a365d]">Governing Council</h2>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 space-y-4">
                {governingCouncil.map((member, idx) => (
                  <div key={idx} className="flex flex-col py-3 border-b border-gray-50 last:border-0">
                    <span className="text-[#1a365d] font-bold">{member.name}</span>
                    <span className="text-gray-500 text-sm">{member.role}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* University Senate Members */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <span className="section-label">Academic Governance</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1a365d] mt-3 mb-4">University Senate</h2>
            <div className="decorative-line mx-auto" />
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-gray-100 shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-[#1a365d] text-white">
                    <th className="px-8 py-5 font-serif font-bold text-lg">Name</th>
                    <th className="px-8 py-5 font-serif font-bold text-lg">Position / Department</th>
                  </tr>
                </thead>
                <tbody>
                  {senateMembers.map((member, idx) => (
                    <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-8 py-4 font-bold text-[#1a365d]">{member[0]}</td>
                      <td className="px-8 py-4 text-gray-600">{member[1]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a365d] text-white text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto space-y-6"
          >
            <GraduationCap className="w-16 h-16 text-[#c9a227] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight">
              Committed to Character and Learning
            </h2>
            <p className="text-white/70">
              Governing with wisdom and excellence to build the leaders of tomorrow.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
