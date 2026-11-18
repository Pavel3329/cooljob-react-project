import CategoryCard from "../categoryCard";
import styles from "./styles.module.css";

import financeIcon from "../../assets/icons/finance.svg";
import transportIcon from "../../assets/icons/transport.svg";
import designIcon from "../../assets/icons/design.svg";
import restaurantIcon from "../../assets/icons/restaurant.svg";
import medicalIcon from "../../assets/icons/medical.svg";
import multimediaIcon from "../../assets/icons/multimedia.svg";
import supportIcon from "../../assets/icons/support.svg";
import managementIcon from "../../assets/icons/management.svg";
import salesIcon from "../../assets/icons/sales.svg";
import moreIcon from "../../assets/icons/more.svg";

const categories = [
  { id: 1, title: "Финансы", icon: financeIcon },
  { id: 2, title: "Грузоперевозки", icon: transportIcon },
  { id: 3, title: "Дизайн", icon: designIcon },
  { id: 4, title: "Ресторанный бизнес", icon: restaurantIcon },
  { id: 5, title: "Медицина", icon: medicalIcon },
  { id: 6, title: "Мультимедиа", icon: multimediaIcon },
  { id: 7, title: "Служба поддержки", icon: supportIcon },
  { id: 8, title: "Менеджмент", icon: managementIcon },
  { id: 9, title: "Продажи", icon: salesIcon },
  { id: 10, title: "Больше категорий", icon: moreIcon },
];

function CategoryCardList() {
  return (
    <section className={styles.categories}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Работа по категориям</h2>

        <div className={styles.grid}>
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryCardList;
