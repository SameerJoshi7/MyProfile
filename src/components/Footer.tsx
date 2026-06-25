export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sameer Kumar Joshi.</p>
        <p style={{ marginTop: '0.5rem', opacity: 0.7, fontSize: '0.9rem' }}>Built from scratch with React &amp; CSS.</p>
      </div>
    </footer>
  );
}
