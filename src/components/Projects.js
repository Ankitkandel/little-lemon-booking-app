import React from 'react';

const Projects = () => {
  const projectList = [
    { id: 1, title: "Project One", description: "Description for project one" },
    { id: 2, title: "Project Two", description: "Description for project two" },
    { id: 3, title: "Project Three", description: "Description for project three" },
    { id: 4, title: "Project Four", description: "Description for project four" }
  ];

  return (
    <section id="projects" className="projects">
      <div className="project-grid">
        {projectList.map(project => (
          <div className="card" key={project.id}>
            <img src={`https://via.placeholder.com/250x100?text=${project.title}`} alt={project.title} />
            <div className="card-content">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <a href="#">See more →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
