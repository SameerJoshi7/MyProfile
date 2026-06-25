export default function Skills() {
  return (
    <section id="skills">
      <div className="reveal">
        <div className="section-label screen-only">My Arsenal</div>
        <h2 className="section-title">
          <span className="screen-only">Skills &amp; <span>Technologies</span></span>
          <span className="print-only">Technical Skills</span>
        </h2>
      </div>
      <div className="skills-grid">
        <div className="skill-group reveal">
          <div className="skill-group-title"><span className="skill-group-icon">🎨</span> Frontend</div>
          <div className="skill-chips">
            <span className="skill-chip">JavaScript</span>
            <span className="skill-chip">TypeScript</span>
            <span className="skill-chip">React</span>
            <span className="skill-chip">Next.js</span>
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
  );
}
