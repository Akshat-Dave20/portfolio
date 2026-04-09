import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TerminalSquare, Server, ShieldCheck } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.about-heading', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: '.about-heading', start: 'top 80%' } }
      );

      cardsRef.current.forEach((card, index) => {
        gsap.fromTo(card,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1, delay: index * 0.2, scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' } }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section id="about" className="section container" ref={sectionRef}>
      <h2 className="section-title about-heading">
        <span className="text-neon-blue">01.</span> About Me
      </h2>
      
      <div className="grid-2">
        <div className="about-content" ref={addToRefs}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Hello! My name is <strong className="text-neon-green">Akshat Dave</strong>, a B.Tech IT student profoundly passionate about bridging the gap between <strong className="text-primary">Web Development</strong> and <strong className="text-primary">Cybersecurity</strong>. 
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to build secure, robust applications that provide exceptional digital experiences while adhering to modern aesthetic standards.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            My mindset revolves around a hacker's perspective—understanding how systems are built to know exactly how they can be broken, and ultimately fortified.
          </p>
        </div>

        <div className="about-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" ref={addToRefs} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <TerminalSquare color="var(--accent-neon-blue)" size={32} />
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Frontend Engineering</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Building responsive, pixel-perfect interfaces with React, GSAP, and advanced CSS techniques.</p>
            </div>
          </div>
          <div className="glass-panel" ref={addToRefs} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <ShieldCheck color="var(--accent-neon-green)" size={32} />
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Cybersecurity Mindset</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Focus on Vulnerability Assessment, Network Security, and Ethical Hacking principles.</p>
            </div>
          </div>
          <div className="glass-panel" ref={addToRefs} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <Server color="var(--accent-neon-blue)" size={32} />
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Backend Structures</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>Architecting solid scalable APIs with Node.js, Express, and Database Systems.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
