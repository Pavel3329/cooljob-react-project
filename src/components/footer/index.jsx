import styles from "./styles.module.css";

import linkedinIcon from "../../assets/icons/linkedin.svg";
import googleIcon from "../../assets/icons/google.svg";
import twitterIcon from "../../assets/icons/twitter.svg";
import facebookIcon from "../../assets/icons/facebook-social.svg";

const cities = [
  "Осака",
  "Коясан",
  "Токио",
  "Хаконэ",
  "Нарба",
  "Томаму",
  "Йокогама",
  "Нагоя",
  "Саппоро",
  "Кобе",
];

const socialLinks = [
  { name: "LinkedIn", icon: linkedinIcon },
  { name: "Google", icon: googleIcon },
  { name: "Twitter", icon: twitterIcon },
  { name: "Facebook", icon: facebookIcon },
];

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Популярные города</h2>

        <nav className={styles.cities} aria-label="Популярные города">
          {cities.map((city) => (
            <a href="#" key={city} className={styles.city}>
              {city}
            </a>
          ))}
        </nav>

        <div className={styles.bottom}>
          <span className={styles.logo}>Cooljob</span>

          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href="#"
                aria-label={social.name}
                className={styles.social}
              >
                <img src={social.icon} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
