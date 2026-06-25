export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-wrapper reveal">
        <span className="contact-emoji">🚀</span>
        <h2 className="contact-headline">Let's build something <span>awesome together</span></h2>
        <p className="contact-sub">
          I'm always open to interesting projects, collaborations, or just a good chat about tech.
        </p>
        <div className="contact-links">
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
      </div>
    </section>
  );
}
