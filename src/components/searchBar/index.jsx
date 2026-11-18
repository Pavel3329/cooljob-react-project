import styles from "./styles.module.css";

import searchIcon from "../../assets/icons/search.svg";
import locationIcon from "../../assets/icons/location.svg";

function SearchBar() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className={styles.search_bar} onSubmit={handleSubmit}>
      <label className={styles.search_field}>
        <img src={searchIcon} alt="" className={styles.icon} />

        <input
          type="text"
          name="job"
          placeholder="Должность или название компании"
        />
      </label>

      <label className={styles.location_field}>
        <img src={locationIcon} alt="" className={styles.icon} />

        <input type="text" name="location" placeholder="Город, Страна" />
      </label>

      <button className={styles.search_button} type="submit">
        Поиск
      </button>
    </form>
  );
}

export default SearchBar;
