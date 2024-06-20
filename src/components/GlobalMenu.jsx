import styles from "./globalMenu.module.css";
import { Link } from "react-router-dom";

function GlobalMenu() {
  return (
    <nav>
      <ul className={styles.globalMenu}>
        <li className={styles.home}>
          <Link to="/">홈</Link>
        </li>
        <li className={styles.reservation}>
          <Link to="/reservation">예매</Link>
        </li>
        <li className={styles.exhibition}>
          <Link to="/exhibition">전시소개</Link>
        </li>
        <li className={styles.notice}>
          <Link to="/notice">안내사항</Link>
        </li>
        <li className={styles.user}>
          <Link to="/user">회원정보</Link>
        </li>
      </ul>
    </nav>
  );
}

export default GlobalMenu;
