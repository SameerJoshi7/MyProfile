import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sameerkumarjoshi7@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message} (%0A%0AFrom: ${formData.email})`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <div className="contact-wrapper reveal">
        <span className="contact-emoji">🚀</span>
        <h2 className="contact-headline">Let's build something <span>awesome together</span></h2>
        <p className="contact-sub">
          I'm always open to interesting projects, collaborations, or just a good chat about tech.
        </p>
        
        <div className="contact-content-grid">
          <div className="contact-links-col">
            <a href="mailto:sameerkumarjoshi7@gmail.com" className="contact-link" id="emailLink">
              <span className="contact-link-icon">📧</span>
              sameerkumarjoshi7@gmail.com
            </a>
            <a href="tel:+919032803010" className="contact-link" id="phoneLink">
              <span className="contact-link-icon">📱</span>
              +91 90328 03010
            </a>
            <a href="https://www.linkedin.com/in/sameer-joshi-691457146/" target="_blank" className="contact-link" id="linkedinLink" rel="noreferrer">
              <span className="contact-link-icon">💼</span>
              Sameer's LinkedIn
            </a>
            <a href="https://github.com/SameerJoshi7" target="_blank" className="contact-link" id="githubLink" rel="noreferrer">
              <span className="contact-link-icon">💻</span>
              GitHub Profile
            </a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <input 
                type="email" 
                placeholder="Your Email" 
                required 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <textarea 
                placeholder="Your Message" 
                rows={4} 
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message &rarr;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
