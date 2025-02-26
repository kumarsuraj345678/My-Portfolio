import React from "react";
import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </div>
      <div className={`${styles.buttonsRow}`}>
        <a
          href="https://github.com/kumarsuraj345678?tab=repositories"
          className={styles.moreBtn}
          title="More Projects"
        >
          <FontAwesomeIcon icon="fa-solid fa-angle-down" bounce />
        </a>
      </div>
    </section>
  );
};

export default Projects;
