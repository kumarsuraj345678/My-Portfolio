import React from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <div className={styles.content}>
        <ul className={styles.history}>
          <h2 className={styles.title}>Experience</h2>
          {history.map((historyItem, id) => {
            return (
              <li className={styles.historyItem} key={id}>
                <div className={styles.logoContainer}>
                  <div className={styles.logo}>
                    <img
                      src={getImageUrl(historyItem.imageSrc)}
                      alt={`${historyItem.organisation} Logo`}
                    />
                  </div>
                  <div className={styles.certificate}>
                    <a
                      href={historyItem.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa-solid fa-award fa-fade fa-2xl"
                        style={{ color: "#5ab9ff" }}
                      title="Credentials"></i>
                    </a>
                  </div>
                </div>

                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate}, ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
        <h2 className={styles.title} id="skillset">
          Skills & Tools
        </h2>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div className={styles.skill} key={id}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
