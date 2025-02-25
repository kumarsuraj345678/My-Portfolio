import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer
      id="contact"
      className={`${styles.container} ${styles.box} ${styles.mask}`}
    >
      <div className={styles.text}>
        <h2>Contact Me</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <a href="mailto:kumarsuraj345678@gmail.com">
            <i
              className="fa-solid fa-envelope fa-fade fa-2xl"
              style={{ color: "#5ab9ff" }}
            ></i>
            kumarsuraj345678@gmail.com
          </a>
        </li>

        <li className={styles.link}>
          <a href="https://github.com/kumarsuraj345678">
            <i
              className="fa-brands fa-github fa-fade fa-2xl"
              style={{ color: "#5ab9ff" }}
            ></i>
            github.com/kumarsuraj345678
          </a>
        </li>

        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/kumarsuraj345678/">
            <i
              className="fa-brands fa-linkedin fa-fade fa-2xl"
              style={{ color: "#5ab9ff" }}
            ></i>
            linkedin.com/in/kumarsuraj345678
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Contact;
