function Navbar() {
  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="header">
      <nav className="navbar container">
        <a href="#home" className="logo">
          Gitanjali<span>.</span>
        </a>

        <div className="nav-links">
          {links.map(([label, href]) => (
            <a href={href} key={label}>
              {label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
