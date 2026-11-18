import VacancyCard from "../vacancyCard";
import styles from "./styles.module.css";

import sonyLogo from "../../assets/images/sony.svg";
import facebookLogo from "../../assets/images/facebook-vacancy.svg";
import cocaColaLogo from "../../assets/images/coca-cola-vacancy.svg";

const vacancies = [
  {
    id: 1,
    category: "Финансы",
    color: "#6175FF",
    title: "Менеджер по управлению финансами в крупной компании",
    location: "Осака, Япония",
    company: "Sony",
    logo: sonyLogo,
    posted: "3 дня назад",
  },
  {
    id: 2,
    category: "Продажи",
    color: "#F451D8",
    title: "Специалист по продажам",
    location: "Осака, Япония",
    company: "Facebook",
    logo: facebookLogo,
    posted: "7 дней назад",
  },
  {
    id: 3,
    category: "Служба поддержки",
    color: "#59D65B",
    title: "Оператор колл центра",
    location: "Токио, Япония",
    company: "Coca-Cola",
    logo: cocaColaLogo,
    posted: "1 день назад",
  },
  {
    id: 4,
    category: "Мультимедиа",
    color: "#FF9856",
    title: "Системный администратор",
    location: "Токио, Япония",
    company: "Sony",
    logo: sonyLogo,
    posted: "3 дня назад",
  },
  {
    id: 5,
    category: "Дизайн",
    color: "#FF5252",
    title: "Дизайнер интерьера в профессиональную студию в центре города",
    location: "Йокогама, Япония",
    company: "Facebook",
    logo: facebookLogo,
    posted: "7 дней назад",
  },
  {
    id: 6,
    category: "Грузоперевозки",
    color: "#444444",
    title: "Водитель на дальние дистанции",
    location: "Кобе, Япония",
    company: "Coca-Cola",
    logo: cocaColaLogo,
    posted: "1 день назад",
  },
];

function VacancyCardList() {
  return (
    <section className={styles.vacancies}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Новые вакансии</h2>
        <p className={styles.subtitle}>Найди работу своей мечты прямо сейчас</p>

        <div className={styles.grid}>
          {vacancies.map((vacancy) => (
            <VacancyCard key={vacancy.id} vacancy={vacancy} />
          ))}
        </div>

        <button className={styles.button} type="button">
          Все вакансии
        </button>
      </div>
    </section>
  );
}

export default VacancyCardList;
