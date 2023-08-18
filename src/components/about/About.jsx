import React, { useState, useCallback } from "react";
import Scene from "../scene/Scene";

import styles from "./About.module.scss";

import { SiGithub, SiLinkedin } from "react-icons/si";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import { useThemeContext } from "../../hooks/useThemeContext";

const About = () => {
  const [modal, setModal] = useState(false);

  const { isDark } = useThemeContext();

  const openModalHandler = () => {
    setModal((prev) => !prev);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <section
      className={`${styles.about__wrapper} ${
        isDark ? styles["light-theme"] : styles["dark-theme"]
      }`}
      id="about"
    >
      <div className={styles.about__content}>
        <div className={styles.about__info}>
          <h3 className={styles.about__title}>About me.</h3>
          <p className={styles.about__description}>
            I’m from <b>Buenos Aires, Argentina.</b>
            <br />
            I’m currently working in Motorola as a Frontend developer using
            React, Typescript, Sass and Vtex as a CMS.
            <br />
            My goal is to learn from others, and become a better developer each
            day.
            <br />
            My stack is mainly focused in frontend developer but I have
            knowledge in Node too.
            <br />
            I'm currently learning Go.
            <br />
            I like to play football, take a coffee and pass time with my family
            and friends.
            <br />
            In 2024 I will start studying computer systems :)
            <br />
          </p>
          <div className={styles.download_cv}>
            <Button
              onClick={openModalHandler}
              type="cv"
              buttonText="Download CV"
            />
            <img
              className={styles.button__detail}
              src="./Button.svg"
              alt="Button detail"
            />
          </div>
        </div>
        <div className={styles.about__model}>
          <img
            className={styles.three__detail}
            src="./three.svg"
            alt="Treejs detail"
          />
          <Scene />
          <div className={styles.platforms__links}>
            <a href="https://github.com/Marcos-Iorio" target="_blank">
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-ignacio-iorio/"
              target="_blank"
            >
              <SiLinkedin />
            </a>
          </div>
        </div>
      </div>
      {modal && <Modal onConfirm={closeModalHandler} />}
    </section>
  );
};

export default About;
