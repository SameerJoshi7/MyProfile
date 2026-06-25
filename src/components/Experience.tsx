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
              <li>Architected a scalable Prompt Builder Component for newly introduced IoT fueling devices</li>
              <li>Designed backwards-compatible API interfaces to integrate newly onboarded hardware without breaking legacy systems</li>
              <li>Implemented strict device-compatibility validation checks to ensure fault-tolerant prompt deployments</li>
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
              <li>Engineered distributed UI architectures for a Kubernetes-based ML Platform, enabling automated end-to-end ML pipelines</li>
              <li>Designed state management solutions to handle complex, asynchronous API data across the model lifecycle</li>
              <li>Optimized component rendering performance to handle large-scale datasets typical in AI/MLOps environments</li>
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
              <li>Developed resilient frontend integrations for a distributed, micro-service based Finance Wellness Application</li>
              <li>Architected the "Insights" module utilizing modular, reusable React components to enforce UI consistency at scale</li>
              <li>Maintained &gt;90% unit test coverage using Jest, establishing CI/CD quality gates to prevent regression in production</li>
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
              <li>Led the architectural migration of a critical healthcare staff management platform from legacy Flash to React/TypeScript</li>
              <li>Deconstructed monolithic legacy logic into decoupled, performant React modules, significantly reducing page load times</li>
              <li>Enforced a test-driven migration strategy using Jest to guarantee feature parity and zero downtime during rollout</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
