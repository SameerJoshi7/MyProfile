export default function Achievements() {
  return (
    <section id="achievements">
      <div className="reveal">
        <div className="section-label screen-only">Recognition</div>
        <h2 className="section-title">
          <span className="screen-only">Awards &amp; <span>Achievements</span></span>
          <span className="print-only">Honors &amp; Achievements</span>
        </h2>
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
  );
}
