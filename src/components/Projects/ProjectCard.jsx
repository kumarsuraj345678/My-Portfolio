import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const backgroundImageStyle = {
    backgroundImage: `url(${getImageUrl(imageSrc)})`,
  };

  return (
    <div className={styles.container}>
      <div className={styles.image} style={backgroundImageStyle}></div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li className={styles.skill} key={id}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} title="Deployed Link">
        <FontAwesomeIcon icon="fa-solid fa-up-right-from-square" fade />Demo
        </a>
        <a href={source} className={styles.link} title="Source code on GitHub">
        <FontAwesomeIcon icon="fa-solid fa-code" fade />Source
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;