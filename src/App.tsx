import { useCustomCursor } from './hooks/useCustomCursor';
import { useStarField } from './hooks/useStarField';
import { useTypewriter } from './hooks/useTypewriter';
import { useScrollReveal } from './hooks/useScrollReveal';
import { useNavbarScroll } from './hooks/useNavbarScroll';

import PrintHeader from './components/PrintHeader';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  useCustomCursor();
  useStarField();
  useTypewriter();
  useScrollReveal();
  useNavbarScroll();

  return (
    <>
      {/* Custom cursor elements are required by useCustomCursor hook */}
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      <PrintHeader />
      <Navigation />
      <Hero />
      <div className="section-divider"></div>
      <About />
      <div className="section-divider"></div>
      <Skills />
      <div className="section-divider"></div>
      <Experience />
      <div className="section-divider"></div>
      <Projects />
      <div className="section-divider"></div>
      <Achievements />
      <div className="section-divider"></div>
      <Contact />
      <Footer />
    </>
  );
}
