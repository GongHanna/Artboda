import GlobalMenu from "./GlobalMenu";
import styles from "./news.module.css";
import { Link } from "react-router-dom";

function News() {
  return (
    <section>
      <header className={styles.news}>
        <h1 className={styles.title}>
          <Link to="/">알림</Link>
        </h1>
      </header>

      <div className={styles.newsWrapper}>
        <p className={styles.desc}>받은 알림이 없습니다.</p>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default News;
