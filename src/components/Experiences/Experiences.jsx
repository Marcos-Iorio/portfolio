import React from "react";
import { works } from "../../data";
import { useThemeContext } from "../../hooks/useThemeContext";
import styles from "./Experiences.module.scss";
import WorkItem from "./components/WorkItem";

const Experiences = () => {
  const { isDark } = useThemeContext();

  return (
    <section
      className={`${styles.experiences_section} ${
        isDark ? styles["light-theme"] : styles["dark-theme"]
      }`}
      id="experiences"
    >
      <div className={styles.content}>
        <h2 className={styles.title}>Job Experience.</h2>
        <div className={styles.works}>
          {works.map((work, index) => (
            <WorkItem key={index} {...work} isDark={isDark} />
          ))}
          <p className={styles.cooming}>
            <strong>Coming soon...</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
