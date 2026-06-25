export default function PrintHeader() {
  return (
    <div className="print-only print-header">
      <div className="print-header-top">
        <h1 className="print-name">Sameer Kumar Joshi</h1>
        <div className="print-title">Senior Full-Stack Developer</div>
      </div>
      <div className="print-contact">
        <span className="print-contact-item">📧 sameerkumarjoshi7@gmail.com</span>
        <span className="print-contact-item">📱 +91 90328 03010</span>
        <span className="print-contact-item">💼 <a href="https://www.linkedin.com/in/sameer-joshi-691457146/" target="_blank" rel="noreferrer" style={{ color: '#4f46e5', textDecoration: 'underline' }}>Sameer's LinkedIn</a></span>
        <span className="print-contact-item">📍 Bengaluru, India</span>
      </div>
    </div>
  );
}
