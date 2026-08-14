import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          // Replace this with your actual access key from https://web3forms.com/
          access_key: "acd41d90-9fbb-4a1d-a881-ff97bdaba83b",
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
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
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={status === 'submitting'}
              />
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                disabled={status === 'submitting'}
              ></textarea>
            </div>

            <button
              type="submit"
              className="btn btn-primary submit-btn"
              disabled={status === 'submitting' || status === 'success'}
            >
              {status === 'submitting' ? 'Sending...' : status === 'success' ? 'Message Sent! ✅' : 'Send Message \u2192'}
            </button>

            {status === 'error' && (
              <div style={{ color: '#ef4444', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                Oops! Something went wrong. Please try again.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
