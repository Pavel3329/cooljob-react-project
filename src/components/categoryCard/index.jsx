import styles from "./styles.module.css";

function CategoryCard({ title, icon }) {
  return (
    <article className={styles.card}>
      <img src={icon} alt="" className={styles.icon} />
      <h3 className={styles.title}>{title}</h3>
    </article>
  );
}

export default CategoryCard;
