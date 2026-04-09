import React, { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef();

  useEffect(() => {
    // Basic context for GSAP scoped to this app for potential cleanup
    const ctx = gsap.context(() => {
    }, appRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="portfolio-app" ref={appRef}>
      <div className="scanline"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer style={{ padding: '2rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)' }}>
        <p className="text-mono" style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
          Designed & Built by <span className="text-neon-blue">Akshat Dave</span> &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;
