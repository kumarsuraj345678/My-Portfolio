import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.container}>
        <h1 className={styles.title}>Hi, I am Suraj Kumar</h1>
        <p className={styles.desc}>
          I'm an aspiring full-stack developer eager to learn and grow in React
          and NodeJS. Feel free to reach out if you'd like to connect and
          discuss further!
        </p>
        <a
          className={styles.contactBtn}
          href="mailto:kumarsuraj345678@gmail.com"
        >
          Contact Me
        </a>
      </div>
      <img
        className={styles.heroImg}
        src={getImageUrl("hero/heroImage.png")}
        alt="My Hero Image"
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
