import styles from "./WorkItem.module.scss";

const WorkItem = ({
  position,
  companyName,
  logo,
  period,
  description,
  stack,
  isCurrent,
  isDark,
}) => {
  return (
    <div
      className={`${isDark ? styles.dark_bg : styles.light_bg} ${styles.item}`}
    >
      <img src={`./${logo}`} alt="Company logo" />
      <div className={styles.content}>
        <div>
          <div className={styles.active}>
            <h3>{companyName}</h3>
            {isCurrent && <div className={styles.actual_job}></div>}
          </div>
          <p className={styles.period}>{period}</p>
        </div>
        <p className={styles.position}>{position}</p>
        <div>
          <p className={styles.description}>{description}</p>
          <p>
            <strong>Stack: </strong>
            {stack}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
