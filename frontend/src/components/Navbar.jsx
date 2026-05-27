import React, { useEffect, useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar glass-panel" style={{ top: '1rem', left: '50%', transform: 'translateX(-50%)' }}>
      <div className="logo d-flex align-items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
        <Terminal color="var(--accent-neon-green)" size={24} />
        <span className="text-mono">AD<span className="text-neon-green">_</span></span>
      </div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`} style={{ margin: 0, padding: 0 }}>
        <li><a href="#home" className="text-mono" style={{ fontSize: '0.9rem', transition: 'color 0.3s' }} onClick={() => setIsOpen(false)}>// Home</a></li>
        <li><a href="#about" className="text-mono" style={{ fontSize: '0.9rem', transition: 'color 0.3s' }} onClick={() => setIsOpen(false)}>// About</a></li>
        <li><a href="#contact" className="text-mono" style={{ fontSize: '0.9rem', transition: 'color 0.3s' }} onClick={() => setIsOpen(false)}>// Contact</a></li>
        <li className="mobile-resume-only" style={{ display: 'none' }}>
          <a href="/resume.docx" download className="btn btn-primary text-mono shadow-neon" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }} onClick={() => setIsOpen(false)}>
            &lt;Resume /&gt;
          </a>
        </li>
      </ul>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <a href="/resume.docx" download className="btn btn-primary text-mono shadow-neon desktop-resume" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
          &lt;Resume /&gt;
        </a>
        
        <button className="menu-btn" onClick={toggleMenu} aria-label="Toggle navigation menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
