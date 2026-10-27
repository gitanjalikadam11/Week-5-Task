function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <p className="eyebrow">GET TO KNOW ME</p>
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <div className="about-card">
            <h3>Who I Am</h3>
            <p>
              I have completed my MSc in Computer Science.
              I am passionate about technology and improving
              my practical programming skills through
              hands-on projects and continuous learning.
            </p>
            <p>
              I enjoy exploring new tools, solving problems,
              and building responsive web applications.
            </p>
          </div>

          <div className="about-card">
            <h3>My Career Goal</h3>
            <p>
              I am looking for opportunities where I can
              apply my technical knowledge, learn from
              experienced developers, and grow as a software
              developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
