import styles from "./styles.module.css";
import locationIcon from "../../assets/icons/location2.svg";

function VacancyCard({ vacancy }) {
  return (
    <article className={styles.card}>
      <div className={styles.category}>
        <span
          className={styles.dot}
          style={{ backgroundColor: vacancy.color }}
        />
        <span>{vacancy.category}</span>
      </div>

      <h3 className={styles.title}>{vacancy.title}</h3>

      <p className={styles.location}>
        <img src={locationIcon} alt="" className={styles.pin} />
        {vacancy.location}
      </p>

      <div className={styles.company}>
        <img src={vacancy.logo} alt={vacancy.company} className={styles.logo} />
        <span>
          {vacancy.company}, {vacancy.posted}
        </span>
      </div>
    </article>
  );
}

export default VacancyCard;
