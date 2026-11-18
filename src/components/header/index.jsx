import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          Cooljob
        </a>

        <nav className={styles.navigation}>
          <a href="#vacancies">Поиск работы</a>
          <a href="#startups">Поиск стартапов</a>
        </nav>

        <div className={styles.actions}>
          <a href="#registration">Регистрация</a>
          <a href="#login" className={styles.login}>
            Вход
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
