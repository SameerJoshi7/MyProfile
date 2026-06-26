export default function Education() {
  return (
    <section id="education">
      <div className="reveal">
        <div className="section-label screen-only">Qualifications</div>
        <h2 className="section-title">
          <span className="screen-only">Education &amp; <span>Certifications</span></span>
          <span className="print-only">Education &amp; Credentials</span>
        </h2>
      </div>

      <div className="education-grid reveal" style={{ marginTop: '3rem' }}>
        <div className="edu-card">
          <div className="edu-header">
            <div className="edu-degree">Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</div>
            <div className="edu-period">2014 – 2018</div>
          </div>
          <div className="edu-school">Jayaprakash Narayan College of Engineering - Mahabubnagar, Telangana</div>
          <p className="edu-details">
            Graduated with a 6.8 GPA. Formed core foundations in Software Architecture, Distributed
            Systems, Database Management, and Data Structures &amp; Algorithms.
          </p>
        </div>
      </div>
    </section>
  );
}
