import { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    // Custom cursor movement
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot) {
        dot.style.left = mouseX + 'px';
        dot.style.top = mouseY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    let ringAnimFrame: number;
    const animateRing = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring) {
        ring.style.left = ringX + 'px';
        ring.style.top = ringY + 'px';
      }
      ringAnimFrame = requestAnimationFrame(animateRing);
    };
    animateRing();

    // Hover effect for interactive items
    const interactiveElements = document.querySelectorAll('a, button, .skill-chip, .stat-card, .award-card, .exp-card');
    const addHoverClass = () => ring?.classList.add('hover');
    const removeHoverClass = () => ring?.classList.remove('hover');

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', addHoverClass);
      el.addEventListener('mouseleave', removeHoverClass);
    });

    // Generate star field
    const starsContainer = document.getElementById('stars');
    if (starsContainer) {
      starsContainer.innerHTML = '';
      for (let i = 0; i < 120; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.setProperty('--dur', (2 + Math.random() * 4) + 's');
        star.style.setProperty('--delay', (Math.random() * 4) + 's');
        star.style.opacity = (Math.random() * 0.5).toString();
        if (Math.random() > 0.7) {
          star.style.width = '3px';
          star.style.height = '3px';
        }
        starsContainer.appendChild(star);
      }
    }

    // Typewriter effect
    const words = ['React Apps 💻', 'Node.js APIs 🛠️', 'Full-Stack Magic ✨', 'Scalable Systems 🚀', 'Clean UIs 🎨'];
    let wordIdx = 0, charIdx = 0, isDeleting = false;
    const tyEl = document.getElementById('typewriterText');
    let typeTimeout: number;

    const type = () => {
      const current = words[wordIdx];
      if (tyEl) {
        if (isDeleting) {
          tyEl.textContent = current.substring(0, charIdx--);
          if (charIdx < 0) {
            isDeleting = false;
            wordIdx = (wordIdx + 1) % words.length;
            typeTimeout = window.setTimeout(type, 500);
            return;
          }
        } else {
          tyEl.textContent = current.substring(0, ++charIdx);
          if (charIdx === current.length) {
            isDeleting = true;
            typeTimeout = window.setTimeout(type, 1800);
            return;
          }
        }
      }
      typeTimeout = window.setTimeout(type, isDeleting ? 60 : 100);
    };
    type();

    // Scroll reveal observer
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Navbar scroll background shift
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        nav.style.background = window.scrollY > 50 ? 'rgba(7, 7, 15, 0.95)' : 'rgba(7, 7, 15, 0.6)';
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanups
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(ringAnimFrame);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', addHoverClass);
        el.removeEventListener('mouseleave', removeHoverClass);
      });
      clearTimeout(typeTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Custom cursor */}
      <div className="cursor-dot" id="cursorDot"></div>
      <div className="cursor-ring" id="cursorRing"></div>

      {/* Navigation */}
      <nav id="navbar">
        <div className="nav-logo">SJ</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#achievements">Awards</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
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
              Specializing in React, TypeScript &amp; Node.js — turning complex ideas into elegant, performant products.
            </p>
            <div className="hero-cta">
              <a href="#experience" className="btn btn-primary" id="viewWorkBtn">
                ✦ View My Work
              </a>
              <a href="#contact" className="btn btn-secondary" id="contactBtn">
                Say Hello 👋
              </a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <div className="photo-container">
              <div className="photo-glow-ring"></div>
              <div className="photo-border">
                <img src="sameer_portrait.png" alt="Sameer Kumar Joshi" className="photo-img" id="heroPhoto" />
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

      <div className="section-divider"></div>

      {/* About Section */}
      <section id="about">
        <div className="reveal">
          <div className="section-label">Who I Am</div>
          <h2 className="section-title">A developer who <span>loves the craft</span></h2>
        </div>
        <div className="about-grid">
          <div className="reveal">
            <div className="about-text">
              <p>
                Hey! I'm <strong>Sameer</strong> — a Senior Full-Stack Engineer from Bengaluru, India.
                I've spent the last 7+ years at <strong>GlobalLogic India Pvt. Ltd.</strong> working on
                everything from finance wellness apps to machine learning platforms and retail fueling systems.
              </p>
              <p>
                My sweet spot is the <strong>React + TypeScript + Node.js</strong> stack, but I'm equally
                comfortable diving into cloud infrastructure on AWS, wrangling PostgreSQL schemas, or
                architecting micro-services.
              </p>
              <p>
                When I'm not writing code, I'm probably somewhere in the mountains or exploring new places 🏔️.
              </p>
            </div>
            <div className="about-langs">
              <div className="lang-pill"><span className="lang-flag">🇬🇧</span> English</div>
              <div className="lang-pill"><span className="lang-flag">🇮🇳</span> Hindi</div>
              <div className="lang-pill"><span className="lang-flag">🇮🇳</span> Kannada</div>
              <div className="lang-pill"><span className="lang-flag">🇮🇳</span> Telugu</div>
            </div>
          </div>
          <div className="about-stats reveal" style={{ transitionDelay: '0.15s' }}>
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

      <div className="section-divider"></div>

      {/* Skills Section */}
      <section id="skills">
        <div className="reveal">
          <div className="section-label">My Arsenal</div>
          <h2 className="section-title">Skills &amp; <span>Technologies</span></h2>
        </div>
        <div className="skills-grid">
          <div className="skill-group reveal">
            <div className="skill-group-title"><span className="skill-group-icon">🎨</span> Frontend</div>
            <div className="skill-chips">
              <span className="skill-chip">JavaScript</span>
              <span className="skill-chip">TypeScript</span>
              <span className="skill-chip">React</span>
              <span className="skill-chip">Redux</span>
              <span className="skill-chip">HTML5</span>
              <span className="skill-chip">CSS3</span>
            </div>
          </div>
          <div className="skill-group reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="skill-group-title"><span className="skill-group-icon">⚙️</span> Backend</div>
            <div className="skill-chips">
              <span className="skill-chip cyan">Node.js</span>
              <span className="skill-chip cyan">REST APIs</span>
              <span className="skill-chip cyan">Microservices</span>
              <span className="skill-chip cyan">Express</span>
            </div>
          </div>
          <div className="skill-group reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="skill-group-title"><span className="skill-group-icon">💾</span> Databases</div>
            <div className="skill-chips">
              <span className="skill-chip amber">PostgreSQL</span>
              <span className="skill-chip amber">MongoDB</span>
            </div>
          </div>
          <div className="skill-group reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="skill-group-title"><span className="skill-group-icon">☁️</span> Cloud &amp; Tools</div>
            <div className="skill-chips">
              <span className="skill-chip cyan">AWS</span>
              <span className="skill-chip cyan">Kubernetes</span>
              <span className="skill-chip">Jest</span>
              <span className="skill-chip">Git</span>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Experience Section */}
      <section id="experience">
        <div className="reveal">
          <div className="section-label">My Journey</div>
          <h2 className="section-title">Work <span>Experience</span></h2>
        </div>

        <div className="timeline">
          <div className="timeline-item reveal">
            <div className="timeline-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-role">Associate Consultant</div>
                <div className="exp-period">Jan 2024 – Present</div>
              </div>
              <div className="exp-company">GlobalLogic India Pvt. Ltd.</div>
              <div className="exp-project">Invenco by Gilbarco Veeder-Root — Retail Fueling Systems</div>
              <ul className="exp-bullets">
                <li>Built Prompt Builder Component for newly introduced fueling devices</li>
                <li>Ensured compatibility among devices before deploying prompts</li>
                <li>Created and modified APIs to support newly onboarded devices</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item reveal" style={{ transitionDelay: '0.1s' }}>
            <div className="timeline-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-role">Senior Software Engineer</div>
                <div className="exp-period">Jun 2023 – Dec 2023</div>
              </div>
              <div className="exp-company">GlobalLogic India Pvt. Ltd.</div>
              <div className="exp-project">Samsung MLOps — Kubernetes-based ML Platform</div>
              <ul className="exp-bullets">
                <li>Worked on a Kubernetes-based ML Platform automating the complete ML pipeline</li>
                <li>Built UI components with a well-structured codebase for the AI/MLOps platform</li>
                <li>Consumed and managed API data for efficient model lifecycle management</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="timeline-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-role">Senior Software Engineer</div>
                <div className="exp-period">Mar 2021 – Dec 2022</div>
              </div>
              <div className="exp-company">GlobalLogic India Pvt. Ltd.</div>
              <div className="exp-project">MetLife — Upwise for Life (Finance Wellness App)</div>
              <ul className="exp-bullets">
                <li>Developed features on a micro-service architecture Finance Wellness Application</li>
                <li>Maintained the "Insights" front-end module with clean, reusable React components</li>
                <li>Achieved thorough unit test coverage using Jest across all modules</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item reveal" style={{ transitionDelay: '0.3s' }}>
            <div className="timeline-dot"></div>
            <div className="exp-card">
              <div className="exp-header">
                <div className="exp-role">Software Engineer</div>
                <div className="exp-period">Feb 2019 – Mar 2021</div>
              </div>
              <div className="exp-company">GlobalLogic India Pvt. Ltd.</div>
              <div className="exp-project">Allocate-Eleven — Health Roster Application</div>
              <ul className="exp-bullets">
                <li>Led Flash → React/TypeScript migration for a healthcare staff management platform</li>
                <li>Rebuilt each module with identical functionality, improving performance significantly</li>
                <li>Maintained high unit-test coverage using Jest throughout the migration</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Projects Section */}
      <section id="projects">
        <div className="reveal">
          <div className="section-label">Side Hustles</div>
          <h2 className="section-title">Personal <span>Projects</span></h2>
        </div>

        <div className="projects-grid">
          <div className="project-card reveal">
            <div className="project-emoji">✋✨</div>
            <div className="project-title">Glow Finger Draw</div>
            <div className="project-goal">Goal: Hands-free creative canvas</div>
            <p className="project-desc">
              A real-time, browser-based finger painting app that uses your webcam and hand-tracking (MediaPipe) to let you
              draw glowing trails in the air — no mouse, no touch, just your fingers. Supports multi-color selection, brush
              size control, eraser, and canvas export. Built entirely with vanilla TypeScript and React.
            </p>
            <div className="project-tech">
              <span>React</span>
              <span>TypeScript</span>
              <span>MediaPipe</span>
              <span>Canvas API</span>
              <span>Vite</span>
            </div>
            <a href="https://github.com/SameerJoshi7/glow-finger-draw" target="_blank" className="project-link" id="glowFingerDrawGithub">
              View on GitHub &rarr;
            </a>
          </div>

          <div className="project-card reveal" style={{ transitionDelay: '0.15s' }}>
            <div className="project-emoji">🤖💌</div>
            <div className="project-title">FutureMe AI</div>
            <div className="project-goal">Goal: AI-powered self-reflection journal</div>
            <p className="project-desc">
              A full-stack AI reflection app where you write letters to your future self and receive personalized,
              empathetic replies powered by the Gemini API. Features an interactive chat interface, a Node.js/Express
              backend, and secure API key management — turning journaling into a meaningful two-way conversation with your
              AI future self.
            </p>
            <div className="project-tech">
              <span>Node.js</span>
              <span>Express</span>
              <span>Gemini API</span>
              <span>HTML/CSS/JS</span>
            </div>
            <a href="https://github.com/SameerJoshi7/futureme" target="_blank" className="project-link" id="futureMeGithub">
              Coming Soon &rarr;
            </a>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Achievements Section */}
      <section id="achievements">
        <div className="reveal">
          <div className="section-label">Recognition</div>
          <h2 className="section-title">Awards &amp; <span>Achievements</span></h2>
        </div>

        <div className="achievements-grid">
          <div className="award-card reveal">
            <span className="award-icon">🏆</span>
            <div className="award-title">The League Extraordinaire</div>
            <div className="award-sub">GlobalLogic · FY 2023–24</div>
          </div>
          <div className="award-card reveal" style={{ transitionDelay: '0.1s' }}>
            <span className="award-icon">⭐</span>
            <div className="award-title">Eminence Award</div>
            <div className="award-sub">GlobalLogic · Q3 FY 2022</div>
          </div>
          <div className="award-card reveal" style={{ transitionDelay: '0.2s' }}>
            <span className="award-icon">🎖️</span>
            <div className="award-title">Client Appreciation</div>
            <div className="award-sub">MetLife · 2022</div>
          </div>
          <div className="award-card reveal" style={{ transitionDelay: '0.3s' }}>
            <span className="award-icon">✨</span>
            <div className="award-title">Spotlight of the Month</div>
            <div className="award-sub">Jul'20, Jul'21, Oct'23, Jun'24</div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Contact Section */}
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
            <a href="https://www.linkedin.com/in/sameer-joshi-7" target="_blank" className="contact-link" id="linkedinLink">
              <span className="contact-link-icon">💼</span>
              LinkedIn Profile
            </a>
          </div>
        </div>
      </section>

      <footer>
        <p>Crafted with ❤️ by <span>Sameer Kumar Joshi</span> · Bengaluru, India · 2026</p>
      </footer>
    </>
  );
}
