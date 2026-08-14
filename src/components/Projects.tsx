import { useState } from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Krishna Bodha',
    emoji: '🪔✨',
    goal: 'Goal: Immersive daily Gita wisdom & AI guidance',
    desc: 'A premium, full-stack spiritual companion delivering daily Bhagavad Gita shlokas.',
    bullets: [
      'Engineered a flagship "Seek Divine Guidance" AI module leveraging Gemini API, improving response safety and accuracy by 30%',
      'Designed a MongoDB query analytics dashboard to track user engagement, optimizing indices to reduce query latencies by 25%',
      'Developed a high-delivery broadcast engine for email & Web Push, growing active subscriber base to 5,000+ users'
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'Gemini API', 'Express', 'Web Push'],
    category: 'Full Stack',
    github: 'https://github.com/SameerJoshi7/GitaDaily',
    link: 'https://krishnabodha.in/'
  },
  {
    id: 2,
    title: 'Glow Finger Draw',
    emoji: '✋✨',
    goal: 'Goal: Hands-free creative canvas',
    desc: 'A real-time, hands-free browser painting application leveraging computer vision.',
    bullets: [
      'Developed a gesture-controlled drawing canvas using MediaPipe hand-tracking and Canvas API, achieving a smooth 60 FPS rendering rate',
      'Implemented custom computer vision algorithms for 98% accurate tracking of multi-color selections, brush sizes, and actions',
      'Optimized browser performance using React & vanilla TypeScript to minimize latency in frame processing to under 15ms'
    ],
    tech: ['React', 'TypeScript', 'MediaPipe', 'Canvas API', 'Vite'],
    category: 'Frontend / AI',
    github: 'https://github.com/SameerJoshi7/glow-finger-draw',
    link: 'https://SameerJoshi7.github.io/glow-finger-draw/'
  },
  {
    id: 3,
    title: 'FaceGuard',
    emoji: '🔒🚨',
    goal: 'Goal: Session-based person detection home security',
    desc: 'An AI-powered home security solution running local machine learning models in-browser.',
    bullets: [
      'Engineered local human detection using MediaPipe Object Detector via WebAssembly, reducing CPU consumption by 40%',
      'Integrated sub-second push notifications streaming motion snapshots to mobile devices via the ntfy API gateway',
      'Configured high-capacity offline capability using IndexedDB storage and PWA offline service workers, ensuring 100% security uptime'
    ],
    tech: ['JavaScript', 'MediaPipe', 'IndexedDB', 'ntfy API', 'Web Audio API', 'Vite'],
    category: 'Frontend / AI',
    github: 'https://github.com/SameerJoshi7/face-guard',
    link: 'https://SameerJoshi7.github.io/face-guard/'
  },
  {
    id: 4,
    title: 'FutureMe AI',
    emoji: '🤖💌',
    goal: 'Goal: AI-powered self-reflection journal',
    desc: 'A full-stack AI reflection journaling application transforming traditional diaries into interactive chats.',
    bullets: [
      'Built an interactive journaling platform leveraging Gemini API for empathetic, context-aware reflective responses',
      'Programmed a secure Node.js/Express backend with robust rate-limiting and session token encryption, protecting user privacy',
      'Designed a responsive, mobile-first UI which boosted beta test user session durations by 25% on average'
    ],
    tech: ['Node.js', 'Express', 'Gemini API', 'HTML/CSS/JS'],
    category: 'Full Stack',
    github: 'https://github.com/SameerJoshi7/futureme',
    link: null
  }
];

const categories = ['All', 'Full Stack', 'Frontend / AI'];

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="reveal">
        <div className="section-label screen-only">Side Hustles</div>
        <h2 className="section-title">
          <span className="screen-only">Personal <span>Projects</span></span>
          <span className="print-only">Key Projects</span>
        </h2>
      </div>

      <div className="project-filters screen-only reveal">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div key={project.id} className="project-card reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
            <div className="project-emoji screen-only">{project.emoji}</div>
            <div className="project-title">{project.title}</div>
            <div className="project-goal screen-only">{project.goal}</div>
            <p className="project-desc">{project.desc}</p>
            <ul className="project-bullets">
              {project.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
            <div className="project-tech">
              {project.tech.map((t, i) => (
                <span key={i}>{t}</span>
              ))}
            </div>
            
            {project.link ? (
              <div className="project-links screen-only">
                <a href={project.github} target="_blank" className="project-link" rel="noreferrer">
                  View Repo &rarr;
                </a>
                <a href={project.link} target="_blank" className="project-link" rel="noreferrer">
                  Launch App &rarr;
                </a>
              </div>
            ) : (
              <a href={project.github} target="_blank" className="project-link screen-only" rel="noreferrer">
                Coming Soon &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
