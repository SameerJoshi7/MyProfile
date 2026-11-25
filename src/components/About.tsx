export default function About() {
  return (
    <section id="about">
      <div className="reveal">
        <div className="section-label screen-only">Who I Am</div>
        <h2 className="section-title">
          <span className="screen-only">A developer who <span>loves the craft</span></span>
          <span className="print-only">Professional Summary</span>
        </h2>
      </div>
      <div className="about-grid">
        <div className="reveal">
          <div className="about-text">
            <p className="print-only target-role">Seeking Senior / Staff Full-Stack Engineer roles in product-driven teams building scalable, user-facing applications.</p>
            <p>
              Hey! I'm <strong>Sameer</strong> — a Senior Full-Stack Engineer from Bengaluru, India.
              I've spent the last 7+ years at <strong>GlobalLogic India Pvt. Ltd.</strong> working on
              everything from finance wellness apps to machine learning platforms and retail fueling systems.
            </p>
            <p>
              My sweet spot is the <strong>React + Next.js + TypeScript + Node.js</strong> stack, but I'm equally
              comfortable diving into cloud infrastructure on AWS, wrangling PostgreSQL schemas, or
              architecting micro-services.
            </p>
            <p>
              <strong>3+ years</strong> of hands-on experience in <strong>Micro-Frontend (MFE)</strong> architecture across enterprise
              applications, including MetLife and Invenco by Gilbarco Veeder-Root.
            </p>
            <p className="screen-only">
              When I'm not writing code, I love bringing my creative ideas to life, playing or watching cricket 🏏, and capturing moments through photography — check out my shots on Instagram at <a href="https://instagram.com/sameer.joshi" target="_blank" style={{ color: 'var(--cyan)', textDecoration: 'none' }} id="instagramLink">@sameer.joshi</a>. I'm also always up for heading to the mountains or exploring new places 🏔️.
            </p>
          </div>
          <div className="about-langs">
            <div className="lang-pill"><span className="lang-flag">🇬🇧</span> English</div>
            <div className="lang-pill"><span className="lang-flag">🇮🇳</span> Hindi</div>
            <div className="lang-pill"><span className="lang-flag">🇮🇳</span> Kannada</div>
            <div className="lang-pill"><span className="lang-flag">🇮🇳</span> Telugu</div>
          </div>
        </div>
        <div className="about-stats reveal screen-only" style={{ transitionDelay: '0.15s' }}>
          <div className="stat-card">
            <div className="stat-number">7+</div>
            <div className="stat-label">Years of Experience</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4</div>
            <div className="stat-label">Major Projects</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">4×</div>
            <div className="stat-label">Award Recipient</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">∞</div>
            <div className="stat-label">Lines of Code</div>
          </div>
        </div>
      </div>
    </section>
  );
}
