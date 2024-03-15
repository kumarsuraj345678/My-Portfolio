import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/codeIcon.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Passionate about front-end development, I create engaging
                interfaces with HTML, CSS, and JavaScript, constantly evolving
                with the latest web tech for impactful solutions.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Enthusiastic about backend development, I craft efficient
                solutions. Skilled in building scalable APIs and databases with
                Node.js and MongoDB.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="UI Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Aspiring UI designer dedicated to crafting visually stunning,
                intuitive interfaces. Drawing inspiration from emerging trends,
                I bring a fresh perspective and keen eye for aesthetics.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
