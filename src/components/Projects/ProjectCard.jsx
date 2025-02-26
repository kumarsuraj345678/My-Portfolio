import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faCode } from "@fortawesome/free-solid-svg-icons";


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
      <a href={demo} className={styles.link} title="Deployed Link" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faUpRightFromSquare} fade /> Demo
</a>
<a href={source} className={styles.link} title="Source code on GitHub" target="_blank" rel="noopener noreferrer">
  <FontAwesomeIcon icon={faCode} fade /> Source
</a>

      </div>
    </div>
  );
};

export default ProjectCard;