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
            A premium, full-stack spiritual companion delivering daily Bhagavad Gita shlokas.
          </p>
          <ul className="project-bullets">
            <li>Engineered a flagship "Seek Divine Guidance" AI module leveraging Gemini API, improving response safety and accuracy by 30%</li>
            <li>Designed a MongoDB query analytics dashboard to track user engagement, optimizing indices to reduce query latencies by 25%</li>
            <li>Developed a high-delivery broadcast engine for email &amp; Web Push, growing active subscriber base to 5,000+ users</li>
          </ul>
          <div className="project-tech">
            <span>React</span>
            <span>Node.js</span>
            <span>MongoDB</span>
            <span>Gemini API</span>
            <span>Express</span>
            <span>Web Push</span>
          </div>
          <div className="project-links screen-only">
            <a href="https://github.com/SameerJoshi7/GitaDaily" target="_blank" className="project-link" id="gitaDailyGithub">
              View Repo &rarr;
            </a>
            <a href="https://krishnabodha.vercel.app/" target="_blank" className="project-link" id="gitaDailyApp">
              Launch App &rarr;
            </a>
          </div>
        </div>

        <div className="project-card reveal" style={{ transitionDelay: '0.1s' }}>
          <div className="project-emoji screen-only">✋✨</div>
          <div className="project-title">Glow Finger Draw</div>
          <div className="project-goal screen-only">Goal: Hands-free creative canvas</div>
          <p className="project-desc">
            A real-time, hands-free browser painting application leveraging computer vision.
          </p>
          <ul className="project-bullets">
            <li>Developed a gesture-controlled drawing canvas using MediaPipe hand-tracking and Canvas API, achieving a smooth 60 FPS rendering rate</li>
            <li>Implemented custom computer vision algorithms for 98% accurate tracking of multi-color selections, brush sizes, and actions</li>
            <li>Optimized browser performance using React &amp; vanilla TypeScript to minimize latency in frame processing to under 15ms</li>
          </ul>
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
            An AI-powered home security solution running local machine learning models in-browser.
          </p>
          <ul className="project-bullets">
            <li>Engineered local human detection using MediaPipe Object Detector via WebAssembly, reducing CPU consumption by 40%</li>
            <li>Integrated sub-second push notifications streaming motion snapshots to mobile devices via the ntfy API gateway</li>
            <li>Configured high-capacity offline capability using IndexedDB storage and PWA offline service workers, ensuring 100% security uptime</li>
          </ul>
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
            A full-stack AI reflection journaling application transforming traditional diaries into interactive chats.
          </p>
          <ul className="project-bullets">
            <li>Built an interactive journaling platform leveraging Gemini API for empathetic, context-aware reflective responses</li>
            <li>Programmed a secure Node.js/Express backend with robust rate-limiting and session token encryption, protecting user privacy</li>
            <li>Designed a responsive, mobile-first UI which boosted beta test user session durations by 25% on average</li>
          </ul>
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
