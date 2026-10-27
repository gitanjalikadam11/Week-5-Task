function Hero() {
  return (
    <section id="home" className="hero section">
      <div className="container hero-content">
        <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

        <h1>
          Hi, I'm <span>Gitanjali Kadam</span>
        </h1>

        <h2>MSc Computer Science Graduate</h2>

        <p className="hero-description">
          I enjoy learning new technologies and building
          useful applications. I am developing my skills
          in web development, Python, and React.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            View My Projects
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
