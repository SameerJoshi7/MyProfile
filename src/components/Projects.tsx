export default function Projects() {
  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-label screen-only">Side Hustles</div>
        <h2 className="section-title">
          <span className="screen-only">Personal <span>Projects</span></span>
          <span className="print-only">Key Projects</span>
        </h2>
      </div>

      <div className="projects-grid">
        <div className="project-card reveal">
          <div className="project-emoji screen-only">🪔✨</div>
          <div className="project-title">Krishna Bodha</div>
          <div className="project-goal screen-only">Goal: Immersive daily Gita wisdom &amp; AI guidance</div>
          <p className="project-desc">
            A premium, full-stack spiritual companion delivering daily Bhagavad Gita shlokas and AI reflections at 6:00 AM. 
            Features the flagship "Seek Divine Guidance" module, which matches modern life challenges or emotional states 
            to ancient wisdom with personalized AI counseling in English, Hindi, Kannada, or Telugu. Includes an immersive 
            floating glassmorphic classical flute player, deep-linked verse routing, and multi-channel broadcasts via email 
            and web push notifications.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>TypeScript</span>
            <span>Gemini API</span>
            <span>EmailJS</span>
            <span>Web Push</span>
          </div>
          <div className="project-links screen-only">
            <a href="https://github.com/SameerJoshi7/GitaDaily" target="_blank" className="project-link" id="gitaDailyGithub">
              View Repo &rarr;
            </a>
            <a href="https://gita-daily-lake.vercel.app/" target="_blank" className="project-link" id="gitaDailyApp">
              Launch App &rarr;
            </a>
          </div>
        </div>

        <div className="project-card reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="project-emoji screen-only">✋✨</div>
          <div className="project-title">Glow Finger Draw</div>
          <div className="project-goal screen-only">Goal: Hands-free creative canvas</div>
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
          <div className="project-links screen-only">
            <a href="https://github.com/SameerJoshi7/glow-finger-draw" target="_blank" className="project-link" id="glowFingerDrawGithub">
              View Repo &rarr;
            </a>
            <a href="https://SameerJoshi7.github.io/glow-finger-draw/" target="_blank" className="project-link" id="glowFingerDrawApp">
              Launch App &rarr;
            </a>
          </div>
        </div>

        <div className="project-card reveal" style={{ transitionDelay: '0.2s' }}>
          <div className="project-emoji screen-only">🔒🚨</div>
          <div className="project-title">FaceGuard</div>
          <div className="project-goal screen-only">Goal: Session-based person detection home security</div>
          <p className="project-desc">
            An AI-powered home security system running entirely in-browser using WebAssembly. Uses MediaPipe Object Detector to 
            identify humans from front, side, or back views, initiates warning sound alarms, and streams real-time snapshot 
            alerts directly to your phone via the ntfy API gateway. Features high-capacity local binary database storage 
            (IndexedDB) and PWA support.
          </p>
          <div className="project-tech">
            <span>JavaScript</span>
            <span>MediaPipe</span>
            <span>IndexedDB</span>
            <span>ntfy API</span>
            <span>Web Audio API</span>
            <span>Vite</span>
          </div>
          <div className="project-links screen-only">
            <a href="https://github.com/SameerJoshi7/face-guard" target="_blank" className="project-link" id="faceGuardGithub">
              View Repo &rarr;
            </a>
            <a href="https://SameerJoshi7.github.io/face-guard/" target="_blank" className="project-link" id="faceGuardApp">
              Launch App &rarr;
            </a>
          </div>
        </div>

        <div className="project-card reveal" style={{ transitionDelay: '0.3s' }}>
          <div className="project-emoji screen-only">🤖💌</div>
          <div className="project-title">FutureMe AI</div>
          <div className="project-goal screen-only">Goal: AI-powered self-reflection journal</div>
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
          <a href="https://github.com/SameerJoshi7/futureme" target="_blank" className="project-link screen-only" id="futureMeGithub">
            Coming Soon &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
