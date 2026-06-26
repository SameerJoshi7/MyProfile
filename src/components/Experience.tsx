export default function Experience() {
  return (
    <section id="experience">
      <div className="reveal">
        <div className="section-label screen-only">My Journey</div>
        <h2 className="section-title">
          <span className="screen-only">Work <span>Experience</span></span>
          <span className="print-only">Professional Experience</span>
        </h2>
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
              <li>Architected a scalable Prompt Builder Component for 15+ newly introduced IoT fueling devices, reducing deployment time by 40%</li>
              <li>Designed backwards-compatible API interfaces, seamlessly integrating 10,000+ new hardware units while maintaining 100% legacy system uptime</li>
              <li>Implemented strict device-compatibility validation checks, achieving a 99.9% fault-tolerant success rate for prompt deployments</li>
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
              <li>Engineered distributed UI architectures for a Kubernetes-based ML Platform, accelerating automated end-to-end ML pipelines by 30%</li>
              <li>Designed state management solutions to process complex, asynchronous API data for over 50 concurrent model lifecycles</li>
              <li>Optimized component rendering performance, decreasing page load times by 45% for large-scale datasets (1M+ records)</li>
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
              <li>Developed resilient frontend integrations for a micro-service based Finance Wellness App, supporting 500K+ monthly active users</li>
              <li>Architected the "Insights" module with 40+ reusable React components, accelerating new feature delivery by 25%</li>
              <li>Maintained &gt;90% unit test coverage using Jest, reducing production bugs by 35% via strict CI/CD quality gates</li>
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
              <li>Led the architectural migration of a critical healthcare platform used by 50+ hospitals from legacy Flash to React/TypeScript</li>
              <li>Deconstructed monolithic legacy logic into 60+ decoupled React modules, reducing average page load times from 6s to under 1.5s</li>
              <li>Enforced a test-driven migration strategy, ensuring 100% feature parity and achieving zero downtime during the global rollout</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
