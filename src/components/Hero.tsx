import sameerPortrait from '../sameer_portrait.jpg';

export default function Hero() {
  return (
    <section id="hero">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="stars" id="stars"></div>

      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="dot"></span>
            Open to opportunities
          </div>
          <h1 className="hero-name">
            <span className="line1">Sameer</span>
            <span className="line2">Joshi</span>
          </h1>
          <div className="hero-typewriter">
            I build &nbsp;<span className="typewriter-text" id="typewriterText"></span><span className="typewriter-cursor"></span>
          </div>
          <p className="hero-desc">
            Senior Full-Stack Developer with <strong>7+ years</strong> of experience crafting scalable web applications.
            Specializing in React, Next.js, TypeScript &amp; Node.js — turning complex ideas into elegant, performant products.
          </p>
          <div className="hero-cta">
            <a href="#experience" className="btn btn-primary" id="viewWorkBtn">
              ✦ View My Work
            </a>
            <button onClick={() => window.print()} className="btn btn-secondary btn-pdf" id="downloadPdfHero">
              📄 Resume PDF
            </button>
            <a href="#contact" className="btn btn-secondary" id="contactBtn">
              Say Hello 👋
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="photo-container">
            <div className="photo-glow-ring"></div>
            <div className="photo-border">
              <img src={`${sameerPortrait}?v=1`} alt="Sameer Kumar Joshi" className="photo-img" id="heroPhoto" />
            </div>
            <div className="photo-float-tag tag1">
              <span className="tag-icon">⚡</span>
              <div>
                <div className="tag-text">7+ Years</div>
                <div className="tag-sub">Full-Stack Dev</div>
              </div>
            </div>
            <div className="photo-float-tag tag2">
              <span className="tag-icon">🏆</span>
              <div>
                <div className="tag-text">4× Award Winner</div>
                <div className="tag-sub">GlobalLogic</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        Scroll
      </div>
    </section>
  );
}
