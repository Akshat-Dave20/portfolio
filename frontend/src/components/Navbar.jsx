import React, { useEffect } from 'react';
import { Terminal } from 'lucide-react';
import gsap from 'gsap';

const Navbar = () => {
  useEffect(() => {
    gsap.fromTo('.navbar', 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <nav className="navbar glass-panel" style={{
      position: 'fixed',
      top: '1rem',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '90%',
      maxWidth: '1200px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      zIndex: 1000,
      borderRadius: '50px'
    }}>
      <div className="logo d-flex align-items-center" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
        <Terminal color="var(--accent-neon-green)" size={24} />
        <span className="text-mono">AD<span className="text-neon-green">_</span></span>
      </div>
      <ul className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
        <li><a href="#home" className="text-mono" style={{ fontSize: '0.9rem', transition: 'color 0.3s' }}>// Home</a></li>
        <li><a href="#about" className="text-mono" style={{ fontSize: '0.9rem', transition: 'color 0.3s' }}>// About</a></li>
        <li><a href="#projects" className="text-mono" style={{ fontSize: '0.9rem', transition: 'color 0.3s' }}>// Projects</a></li>
        <li><a href="#contact" className="text-mono" style={{ fontSize: '0.9rem', transition: 'color 0.3s' }}>// Contact</a></li>
      </ul>
      <a href="/resume.pdf" download className="btn btn-primary text-mono shadow-neon" style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>
        &lt;Resume /&gt;
      </a>
    </nav>
  );
};

export default Navbar;
