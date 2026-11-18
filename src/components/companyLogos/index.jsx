import styles from "./styles.module.css";

import disneyLogo from "../../assets/images/disney.svg";
import facebookLogo from "../../assets/images/facebook.svg";
import microsoftLogo from "../../assets/images/microsoft.svg";
import sonyLogo from "../../assets/images/sony.svg";
import cocaColaLogo from "../../assets/images/coca-cola.svg";

const companies = [
  { id: 1, name: "Disney", logo: disneyLogo },
  { id: 2, name: "Facebook", logo: facebookLogo },
  { id: 3, name: "Microsoft", logo: microsoftLogo },
  { id: 4, name: "Sony", logo: sonyLogo },
  { id: 5, name: "Coca-Cola", logo: cocaColaLogo },
];

function CompanyLogos() {
  return (
    <section className={styles.company_logos}>
      <div className={styles.container}>
        <p className={styles.label}>Помогаем найти работу:</p>

        <div className={styles.logos}>
          {companies.map((company) => (
            <img
              key={company.id}
              src={company.logo}
              alt={company.name}
              className={styles.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanyLogos;
