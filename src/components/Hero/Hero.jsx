import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const openResume = () => {
    // window.open(
    //   "https://drive.google.com/file/d/1NBEOTqH0SX1oM-vgsf7qOy9G-ctxn8S7/view?usp=drivelink",
    //   "_blank",
    //   "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600"
    // );
    window.open(
      "https://drive.google.com/file/d/17wx_eA2En216BBVYEmBi6sOphY_5vClm/view?usp=sharing",
      "_blank",
      "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=100,width=800,height=600"
    );
  };
  return (
    <section className={styles.container}>
      <div className={`${styles.content} ${styles.buttonContainer}`}>
        <h1 className={styles.title}>Hi, I'm Suraj Kumar</h1>
        <p className={styles.description}>
          Graduated recently with a passion for Full-Stack Software Developer,
          skilled in ReactJS and NodeJS through personal projects and
          coursework.<br></br>
          Eager to apply academic knowledge and learn quickly in a dynamic
          environment.<br></br>
          Let's connect to explore how I can contribute to your team's success.
        </p>
        <div className={`${styles.buttonsRow}`}>
          <a
            href="https://www.linkedin.com/in/suraj-kumar-b23762131/"
            className={styles.contactBtn}
          >
            <i className="fa-solid fa-user-plus"></i>
            Connect Now
          </a>
          <a
            onClick={openResume}
            className={`${styles.contactBtn} ${styles.myResumeBtn}`}
          >
            <i className="fa-solid fa-file-pdf"></i>
            View Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/surajImage.JPG")}
        alt="My Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};

export default Hero;
