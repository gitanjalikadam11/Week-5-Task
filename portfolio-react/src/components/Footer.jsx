function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#home" className="logo footer-logo">
          Gitanjali<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Gitanjali Kadam.
          Built with React.
        </p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

export default Footer;
