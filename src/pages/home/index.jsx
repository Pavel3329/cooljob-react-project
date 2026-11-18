import Header from "../../components/header";
import SearchBar from "../../components/searchBar";
import CompanyLogos from "../../components/companyLogos";
import CategoryCardList from "../../components/categoryCardList";
import VacancyCardList from "../../components/vacancyCardList";
import Footer from "../../components/footer";

import styles from "./styles.module.css";

function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <Header />

        <div className={styles.container}>
          <h1 className={styles.title}>
            Один клик
            <br />и работа в кармане
          </h1>

          <SearchBar />
        </div>
      </section>

      <CompanyLogos />
      <CategoryCardList />
      <VacancyCardList />
      <Footer />
    </main>
  );
}

export default Home;
