import React, { useEffect, useRef } from 'react';
import { ArrowRight, Code2, UserCircle, Shield } from 'lucide-react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Hero = () => {
  const typingRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-title-name', 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
      );

      // Typing Effect
      gsap.to(typingRef.current, {
        duration: 3,
        text: "Cybersecurity Analyst | Ethical Hacker",
        delay: 0.8,
        ease: "none",
      });

      // Actions stagger
      gsap.fromTo('.hero-action',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 1.2, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="section container" ref={containerRef} style={{ justifyContent: 'center', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="hero-content" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 className="hero-title">
          I'm <span className="hero-title-name text-neon-blue">Akshat Dave</span>
        </h1>
        <h2 className="text-mono" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', height: '2rem' }}>
          <span className="text-neon-green">&gt;</span> <span ref={typingRef}></span><span className="cursor-blink">|</span>
        </h2>
        
        <p className="hero-action text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', marginTop: '1rem', color: 'var(--text-secondary)' }}>
          Securing systems, analyzing vulnerabilities, and implementing robust security frameworks with a hacker's mindset and an analyst's precision.
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
          <a href="https://github.com/Akshat-Dave20" target="_blank" rel="noreferrer" className="btn btn-primary hero-action">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary glass-panel hero-action" style={{ padding: '0.75rem 1.5rem' }}>
            Contact Me
          </a>
        </div>

        <div className="hero-action text-mono" style={{ 
          marginTop: '1.5rem', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '0.5rem', 
          fontSize: '0.95rem',
          color: 'var(--text-secondary)',
          borderLeft: '2px solid var(--accent-neon-green)',
          paddingLeft: '1rem'
        }}>
          <div>
            <span style={{ color: 'var(--accent-neon-blue)' }}>Email:</span>{' '}
            <a href="mailto:daveakshat20@gmail.com" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-neon-green)"} onMouseOut={e=>e.currentTarget.style.color="var(--text-primary)"}>
              daveakshat20@gmail.com
            </a>
          </div>
          <div>
            <span style={{ color: 'var(--accent-neon-blue)' }}>GitHub:</span>{' '}
            <a href="https://github.com/Akshat-Dave20" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-neon-green)"} onMouseOut={e=>e.currentTarget.style.color="var(--text-primary)"}>
              Akshat-Dave20
            </a>
          </div>
          <div>
            <span style={{ color: 'var(--accent-neon-blue)' }}>LinkedIn:</span>{' '}
            <a href="https://linkedin.com/in/akshat-dave-52972225b" target="_blank" rel="noreferrer" style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-neon-green)"} onMouseOut={e=>e.currentTarget.style.color="var(--text-primary)"}>
              akshat-dave-52972225b
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
