import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-name">Deeti Laxmi Chandra Siddharth</p>
        <div className="footer-links">
          <a href="https://github.com/D-L-C-S" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <span className="footer-dot">·</span>
          <a
            href="https://linkedin.com/in/siddharth-deeti"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span className="footer-dot">·</span>
          <a
            href="https://leetcode.com/u/Dlcs-/"
            target="_blank"
            rel="noreferrer"
          >
            LeetCode
          </a>
          <span className="footer-dot">·</span>
          <a href="mailto:siddharthdeeti06@gmail.com">Email</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} · Built with React
        </p>
      </div>
    </footer>
  );
}

export default Footer;
