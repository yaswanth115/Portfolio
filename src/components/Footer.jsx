import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <span className="footer-logo-text">YV</span>
            <span className="footer-logo-dot" />
          </div>
          <p className="footer-tagline">
            Building intelligent data systems<br />& Generative AI solutions.
          </p>
        </div>

        <div className="footer-links">
          {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="footer-link"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="footer-right">
          <button className="scroll-top-btn" onClick={scrollTop} aria-label="Scroll to top">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {year} Yaswanth Veguru. Crafted with React & ❤️</p>
      </div>
    </footer>
  );
}
