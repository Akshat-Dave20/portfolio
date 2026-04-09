import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Code2, Search } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.projects-heading', 
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: '.projects-heading', start: 'top 80%' } }
      );

      gsap.fromTo('.search-container',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.2, scrollTrigger: { trigger: '.search-container', start: 'top 85%' } }
      );

      gsap.fromTo('.project-card',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, scrollTrigger: { trigger: '.projects-grid', start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      duration: 0.4,
      ease: 'power2.out'
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: 'power2.out'
    });
  };

  const projectData = [
    {
      title: "E-Commerce Interface",
      description: "Responsive, high-performance landing page layout focused on pristine UI/UX. Includes smooth transitions, modern layouts, and accessible HTML/CSS structure.",
      tech: ["HTML", "CSS", "JavaScript", "GSAP"],
      github: "https://github.com/akshatraja",
      live: "#"
    },
    {
      title: "Security Scanner Tool",
      description: "A python-based console utility that scans web applications for common vulnerabilities. Identifies misconfigurations and returns structured audit logs.",
      tech: ["Python", "Networking", "Security"],
      github: "https://github.com/akshatraja",
      live: "" // no live link
    }
  ];

  const filteredProjects = projectData.filter(project => 
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="projects" className="section container" ref={sectionRef}>
      <h2 className="section-title projects-heading">
        <span className="text-neon-blue">03.</span> Featured Projects
      </h2>

      <div className="search-container" style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
          <Search style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} size={20} />
          <input 
            type="text" 
            placeholder="Search projects by name, tech, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '1rem 1rem 1rem 3.5rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-main)',
              fontSize: '1rem',
              outline: 'none',
              transition: 'border-color 0.3s, box-shadow 0.3s'
            }}
            onFocus={e => {
              e.target.style.borderColor = 'var(--accent-neon-blue)';
              e.target.style.boxShadow = '0 0 10px rgba(0, 195, 255, 0.2)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'var(--border-color)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>
      </div>

      <div className="grid-2 projects-grid" style={{ perspective: '1000px' }}>
        {filteredProjects.length > 0 ? filteredProjects.map((project, i) => (
          <div 
            key={i} 
            className="project-card glass-panel"
            style={{ 
              position: 'relative', 
              transition: 'box-shadow 0.3s', 
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '300px'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <FolderIcon />
                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.github && <a href={project.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-neon-green)"} onMouseOut={e=>e.currentTarget.style.color="var(--text-secondary)"}><Code2 size={20} /></a>}
                  {project.live && <a href={project.live} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }} onMouseOver={e=>e.currentTarget.style.color="var(--accent-neon-blue)"} onMouseOut={e=>e.currentTarget.style.color="var(--text-secondary)"}><ExternalLink size={20} /></a>}
                </div>
              </div>
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {project.description}
              </p>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
              {project.tech.map((t, idx) => (
                <span key={idx} className="text-mono" style={{ fontSize: '0.8rem', color: 'var(--accent-neon-green)' }}>{t}</span>
              ))}
            </div>
          </div>
        )) : (
          <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '3rem', color: 'var(--text-secondary)' }}>
            No projects found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

// Mini helper component for the folder icon
const FolderIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="var(--accent-neon-blue)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ width: '40px', height: '40px' }}>
    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
  </svg>
);

export default Projects;
