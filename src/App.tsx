import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { IntroScreen } from './components/IntroScreen';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Academics } from './pages/Academics';
import { Admissions } from './pages/Admissions';
import { CampusLife } from './pages/CampusLife';
import { News } from './pages/News';
import { Contact } from './pages/Contact';
import { StudentLeadership } from './pages/StudentLeadership';
import { Accommodation } from './pages/Accommodation';
import { Library } from './pages/Library';
import { Sports } from './pages/Sports';
import { Dining } from './pages/Dining';
import { OurHistory } from './pages/OurHistory';
import { MottoLogoAnthem } from './pages/MottoLogoAnthem';
import { Governance } from './pages/Governance';
import { DirectoratesCentres } from './pages/DirectoratesCentres';
import { DAPQA } from './pages/DAPQA';
import { DEST } from './pages/DEST';
import { DGSP } from './pages/DGSP';
import { InternalAudit } from './pages/InternalAudit';
import { CGHDS } from './pages/CGHDS';
import { RUNCEDS } from './pages/RUNCEDS';
import { AwardsRankings } from './pages/AwardsRankings';
import { Anniversary20 } from './pages/Anniversary20';
import { FoundationJUPEB } from './pages/FoundationJUPEB';

const pageTransition = {
  initial: { opacity: 0, scale: 0.98, y: 10 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 1.02, y: -10 },
  transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] as const },
};

function ScrollRestoration() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <>
      <ScrollRestoration />
      <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={pageTransition.transition}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/student-leadership" element={<StudentLeadership />} />
          <Route path="/accommodation" element={<Accommodation />} />
          <Route path="/library" element={<Library />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/dining" element={<Dining />} />
          <Route path="/history" element={<OurHistory />} />
          <Route path="/motto-logo-anthem" element={<MottoLogoAnthem />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/directorates-centres" element={<DirectoratesCentres />} />
          <Route path="/dapqa" element={<DAPQA />} />
          <Route path="/dest" element={<DEST />} />
          <Route path="/foundation-jupeb" element={<FoundationJUPEB />} />
          <Route path="/dgsp" element={<DGSP />} />
          <Route path="/internal-audit" element={<InternalAudit />} />
          <Route path="/cghds" element={<CGHDS />} />
          <Route path="/runceds" element={<RUNCEDS />} />
          <Route path="/awards-rankings" element={<AwardsRankings />} />
          <Route path="/20th-anniversary" element={<Anniversary20 />} />
        </Routes>
      </motion.div>
      </AnimatePresence>
    </>
  );
}

function App() {
  // Only show intro on a fresh page load / refresh — never during internal navigation
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('introShown');
  });

  const handleIntroComplete = () => {
    sessionStorage.setItem('introShown', 'true');
    setShowIntro(false);
  };

  // When intro is active, render ONLY the intro — nothing else mounts
  if (showIntro) {
    return <IntroScreen onComplete={handleIntroComplete} />;
  }

  return (
    <Router>
      <div className="min-h-screen bg-white w-full overflow-x-hidden flex flex-col">
        <Navigation />
        <AnimatedRoutes />
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
