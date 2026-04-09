import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, CheckCircle, AlertTriangle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-heading',
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, scrollTrigger: { trigger: '.contact-heading', start: 'top 80%' } }
      );

      gsap.fromTo('.contact-form-container',
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', message: '' });

        // Success animation
        gsap.fromTo('.success-msg', { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out' });

        setTimeout(() => setStatus(s => ({ ...s, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: false, error: result.error || 'Failed to send message.' });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, success: false, error: 'Cannot connect to server. Ensure backend is running.' });
    }
  };

  return (
    <section id="contact" className="section container" ref={sectionRef} style={{ maxWidth: '800px', paddingBottom: '150px' }}>
      <h2 className="section-title contact-heading" style={{ justifyContent: 'center' }}>
        <span className="text-neon-green">04.</span> Initiate Connection
      </h2>

      <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-secondary)' }}>
        My inbox is always open. Whether you have a question, a project idea, or just want to debug some code together, I'll try my best to get back to you!
      </p>

      <div className="contact-form-container glass-panel">
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="name" className="text-mono" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                padding: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-main)',
                borderRadius: '4px',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent-neon-blue)'}
              onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="email" className="text-mono" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                padding: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-main)',
                borderRadius: '4px',
                outline: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent-neon-blue)'}
              onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label htmlFor="message" className="text-mono" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                padding: '1rem',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-main)',
                borderRadius: '4px',
                outline: 'none',
                resize: 'none',
                transition: 'border-color 0.3s'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent-neon-green)'}
              onBlur={e => e.target.style.borderColor = 'var(--border-color)'}
            ></textarea>
          </div>

          {status.error && (
            <div style={{ display: 'flex', gap: '0.5rem', color: '#ff4c4c', alignItems: 'center', padding: '0.5rem', background: 'rgba(255,76,76,0.1)', borderRadius: '4px' }}>
              <AlertTriangle size={18} />
              <span style={{ fontSize: '0.9rem' }}>{status.error}</span>
            </div>
          )}

          {status.success && (
            <div className="success-msg" style={{ display: 'flex', gap: '0.5rem', color: 'var(--accent-neon-green)', alignItems: 'center', padding: '0.5rem', background: 'rgba(0,255,65,0.1)', borderRadius: '4px' }}>
              <CheckCircle size={18} />
              <span style={{ fontSize: '0.9rem' }}>Message sent successfully! Connecting to server...</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start', marginTop: '1rem', opacity: status.loading ? 0.7 : 1 }}
            disabled={status.loading}
          >
            {status.loading ? 'Transmitting...' : 'Send Message'} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
