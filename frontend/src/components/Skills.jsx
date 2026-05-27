import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.skills-heading', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: '.skills-heading', start: 'top 80%' } }
      );

      gsap.fromTo('.skill-item',
        { opacity: 0, scale: 0.8, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.08, scrollTrigger: { trigger: '.skills-container', start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const securitySkills = [
    'Network Security', 
    'Ethical Hacking', 
    'Vulnerability Assessment', 
    'Cryptography', 
    'Penetration Testing', 
    'Linux / Kali Linux', 
    'Burp Suite', 
    'Wireshark', 
    'Metasploit', 
    'OWASP Top 10', 
    'Active Directory Security', 
    'Git & GitHub'
  ];

  const renderSkillTags = (skills) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '1.5rem', justifyContent: 'center' }}>
      {skills.map((skill, index) => (
        <span key={index} className="skill-item text-mono" style={{
          padding: '0.75rem 1.5rem',
          background: 'rgba(0, 240, 255, 0.03)',
          border: '1px solid var(--accent-neon-blue)',
          borderRadius: '4px',
          color: 'var(--text-primary)',
          fontSize: '1rem',
          boxShadow: '0 0 15px rgba(0, 240, 255, 0.08)',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={e => {
          e.currentTarget.style.background = 'rgba(0, 255, 65, 0.08)';
          e.currentTarget.style.borderColor = 'var(--accent-neon-green)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 255, 65, 0.2)';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseOut={e => {
          e.currentTarget.style.background = 'rgba(0, 240, 255, 0.03)';
          e.currentTarget.style.borderColor = 'var(--accent-neon-blue)';
          e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 240, 255, 0.08)';
          e.currentTarget.style.transform = 'translateY(0)';
        }}>
          {skill}
        </span>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section container" ref={sectionRef} style={{ justifyContent: 'center', minHeight: '80vh' }}>
      <h2 className="section-title skills-heading">
        <span className="text-neon-green">02.</span> Technical Arsenal
      </h2>

      <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', maxWidth: '800px', margin: '0 auto' }}>
        <div className="skill-category" style={{ width: '100%', textAlign: 'center' }}>
          <h3 className="text-mono" style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.3rem' }}>
            <span className="text-neon-blue">&gt;</span> Core Cybersecurity Competencies
          </h3>
          {renderSkillTags(securitySkills)}
        </div>
      </div>
    </section>
  );
};

export default Skills;
