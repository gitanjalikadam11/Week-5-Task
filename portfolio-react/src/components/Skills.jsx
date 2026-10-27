const skillGroups = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React"],
  },
  {
    title: "Programming & Database",
    skills: ["Python", "SQL", "MySQL"],
  },
  {
    title: "Data Analysis",
    skills: ["NumPy", "Pandas", "Matplotlib"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"],
  },
  {
    title: "AI Tools",
    skills: ["ChatGPT", "Gemini", "Claude", "GitHub Copilot"],
  },
];

function Skills() {
  return (
    <section id="skills" className="section section-light">
      <div className="container">
        <p className="eyebrow">WHAT I WORK WITH</p>
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
