import { Link } from "react-router-dom";
import styles from "./BookingCancellation.module.css";
import GlobalMenu from "./GlobalMenu";
import img03 from "../assets/images/booking03.png";

function BookingCancellation() {
  return (
    <section>
      <header className={styles.booking}>
        <h1 className={styles.title}>
          <Link to="/">예매내역</Link>
        </h1>
      </header>

      <ul className={styles.bookingList}>
        <li className={styles.bookingBtn}>
          <Link to="/bookingList">관람예정</Link>
        </li>
        <li className={styles.bookingBtn}>
          <Link to="/booking/cancel">취소/환불</Link>
        </li>
        <li className={styles.bookingBtn}>
          <Link to="/booking/completed">관람완료</Link>
        </li>
      </ul>

      {/* 예매내역 */}
      <div className={styles.bookingBox}>
        <div className={styles.flexBox}>
          <div className={styles.textBox}>
            <p className={styles.date}>
              예매일시
              <span className={styles.spacing}>2024.01.18 (일) 17:05</span>
            </p>
            <p className={styles.number}>
              예매번호<span className={styles.spacing}>060689</span>
            </p>
          </div>
          <p className={styles.detail}>
            <Link to="/reservation/cancle">상세보기</Link>
          </p>
        </div>
        <div className={styles.gridBox}>
          <img src={img03} alt="booking03" />
          <div className={styles.exhibitionBox}>
            <h2 className={styles.title}>행복POP☆UP</h2>
            <p className={styles.count}>1매 (성인1)</p>
            <p className={styles.location}>아트보다 갤러리</p>
            <p className={styles.state}>취소완료</p>
          </div>
        </div>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default BookingCancellation;
