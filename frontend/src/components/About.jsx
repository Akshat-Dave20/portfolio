import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck } from 'lucide-react';

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
          { opacity: 0, y: 50 },
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
      
      <div className="grid-2" style={{ alignItems: 'center' }}>
        <div className="about-content" ref={addToRefs}>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            Hello! My name is <strong className="text-neon-green">Akshat Dave</strong>, a B.Tech IT student profoundly passionate about <strong className="text-primary">Cybersecurity</strong> and <strong className="text-primary">Ethical Hacking</strong>. 
          </p>
          <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
            I focus on identifying system vulnerabilities, securing network infrastructures, and applying offensive and defensive security strategies to protect digital assets. My goal is to analyze, build, and secure environments against sophisticated cyber threats.
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            My mindset revolves around a hacker's perspective—understanding how systems are built to know exactly how they can be broken, and ultimately fortified.
          </p>
        </div>

        <div className="about-cards" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" ref={addToRefs} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', padding: '2.5rem 2rem' }}>
            <ShieldCheck color="var(--accent-neon-green)" size={48} style={{ flexShrink: 0 }} />
            <div>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)', fontSize: '1.4rem' }}>Cybersecurity Role</h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                Vulnerability Assessment, Network Security, Penetration Testing, and Ethical Hacking principles to build secure cyber environments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
