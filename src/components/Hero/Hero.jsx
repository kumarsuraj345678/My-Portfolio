import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hi, I am Suraj Kumar</h1>
        <p className={styles.description}>
          Recent graduate with a passion for full-stack development, skilled in
          React and NodeJS through personal projects and coursework. Eager to
          apply academic knowledge and learn quickly in a dynamic environment.
          Let's connect to explore how I can contribute to your team's success.
        </p>
        <a
          href="mailto:kumarsuraj345678@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="My Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
