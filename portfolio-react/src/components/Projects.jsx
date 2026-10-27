const projects = [
  {
    title: "Cafe POS System",
    category: "Web Development",
    description:
      "A cafe point-of-sale project designed to simplify billing and improve order processing.",
    technologies: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    title: "Mobile Shop Management System",
    category: "Academic Project",
    description:
      "A management application developed to organize mobile shop records and related information.",
    technologies: ["Java", "SQL"],
  },
  {
    title: "Personal Portfolio",
    category: "Web Development",
    description:
      "A responsive personal website showcasing my background, skills, and projects.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-number">
        {String(project.title.length).padStart(2, "0")}
      </div>

      <p className="project-category">{project.category}</p>
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="skill-list">
        {project.technologies.map((tech) => (
          <span className="skill-tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <p className="eyebrow">MY WORK</p>
        <h2 className="section-title">Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
