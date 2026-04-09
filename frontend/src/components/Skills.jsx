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
        { opacity: 1, scale: 1, y: 0, duration: 0.6, stagger: 0.1, scrollTrigger: { trigger: '.skills-container', start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const frontendSkills = ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'GSAP', 'Vite'];
  const securitySkills = ['Network Security', 'Ethical Hacking', 'Vulnerability Assessment', 'Cryptography'];
  const toolSkills = ['Git', 'GitHub', 'VS Code', 'Linux/Kali', 'Burp Suite', 'Postman', 'Node.js', 'MongoDB'];

  const renderSkillTags = (skills) => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1rem' }}>
      {skills.map((skill, index) => (
        <span key={index} className="skill-item text-mono" style={{
          padding: '0.5rem 1rem',
          background: 'rgba(0, 240, 255, 0.05)',
          border: '1px solid var(--accent-neon-blue)',
          borderRadius: '4px',
          color: 'var(--text-primary)',
          fontSize: '0.9rem',
          boxShadow: '0 0 10px rgba(0, 240, 255, 0.1)'
        }}>
          {skill}
        </span>
      ))}
    </div>
  );

  return (
    <section id="skills" className="section container" ref={sectionRef}>
      <h2 className="section-title skills-heading">
        <span className="text-neon-green">02.</span> Technical Arsenal
      </h2>

      <div className="skills-container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        <div className="skill-category">
          <h3 className="text-mono" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.2rem' }}>
            <span className="text-neon-blue">&gt;</span> Frontend Development
          </h3>
          {renderSkillTags(frontendSkills)}
        </div>

        <div className="skill-category">
          <h3 className="text-mono" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.2rem' }}>
            <span className="text-neon-blue">&gt;</span> Cybersecurity
          </h3>
          {renderSkillTags(securitySkills)}
        </div>

        <div className="skill-category">
          <h3 className="text-mono" style={{ color: 'var(--text-secondary)', marginBottom: '1rem', fontSize: '1.2rem' }}>
            <span className="text-neon-blue">&gt;</span> Tools & Backend
          </h3>
          {renderSkillTags(toolSkills)}
        </div>

      </div>
    </section>
  );
};

export default Skills;
