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
      // Main Text Reveal
      gsap.fromTo('.hero-title-main', 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, delay: 0.2, ease: "power3.out" }
      );
      
      gsap.fromTo('.hero-title-name', 
        { x: -50, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power3.out" }
      );

      // Typing Effect
      gsap.to(typingRef.current, {
        duration: 3,
        text: "Web Developer | Cybersecurity Enthusiast",
        delay: 1,
        ease: "none",
      });

      // Actions stagger
      gsap.fromTo('.hero-action',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 1.5, ease: "power2.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="section container" ref={containerRef} style={{ justifyContent: 'center', minHeight: '100vh', paddingTop: '100px' }}>
      <div className="hero-content" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <p className="hero-title-main text-mono text-neon-green" style={{ fontSize: '1.2rem', margin: 0 }}>System.out.println("Hello, World!");</p>
        <h1 style={{ fontSize: '4.5rem', margin: 0, lineHeight: 1.1 }}>
          I'm <span className="hero-title-name text-neon-blue">Akshat Dave</span>
        </h1>
        <h2 className="text-mono" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', height: '2rem' }}>
          <span className="text-neon-green">&gt;</span> <span ref={typingRef}></span><span className="cursor-blink">|</span>
        </h2>
        
        <p className="hero-action text-secondary" style={{ fontSize: '1.1rem', maxWidth: '600px', marginTop: '1rem', color: 'var(--text-secondary)' }}>
          Building secure, scalable, and visually stunning web applications with a hacker's mindset and a designer's eye.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
          <a href="#projects" className="btn btn-primary hero-action">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="#contact" className="btn btn-secondary glass-panel hero-action" style={{ padding: '0.75rem 1.5rem' }}>
            Contact Me
          </a>
        </div>

        <div className="hero-action" style={{ display: 'flex', gap: '1.5rem', marginTop: '2rem' }}>
          <a href="https://github.com/akshatraja" target="_blank" rel="noreferrer" style={{ transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-neon-green)"} onMouseOut={e=>e.currentTarget.style.color="inherit"}>
            <Code2 size={28} />
          </a>
          <a href="https://linkedin.com/in/akshat-dave-52972225b" target="_blank" rel="noreferrer" style={{ transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-neon-blue)"} onMouseOut={e=>e.currentTarget.style.color="inherit"}>
            <UserCircle size={28} />
          </a>
          <a href="#" style={{ transition: 'color 0.3s' }} onMouseOver={e=>e.currentTarget.style.color="#ff0055"} onMouseOut={e=>e.currentTarget.style.color="inherit"}>
            <Shield size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
