export default function Navigation() {
  return (
    <nav id="navbar">
      <div className="nav-logo">SJ</div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#achievements">Awards</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <button onClick={() => window.print()} className="nav-pdf-btn" id="downloadPdfNav">
            PDF Resume
          </button>
        </li>
      </ul>
    </nav>
  );
}
