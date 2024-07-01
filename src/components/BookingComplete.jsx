import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./BookingComplete.module.css";
import img02 from "../assets/images/booking02.png";

function BookingComplete() {
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

      <p className={styles.textFlexBox}>
        총 2건
        <span className={styles.bookingDesc}>최근 예매순</span>
      </p>

      {/* 예매내역 */}
      <div className={styles.bookingBox}>
        <div className={styles.flexBox}>
          <div className={styles.textBox}>
            <p className={styles.date}>
              예매일시
              <span className={styles.spacing}>2024.03.15 (금) 15:54</span>
            </p>
            <p className={styles.number}>
              예매번호<span className={styles.spacing}>200704</span>
            </p>
          </div>
          <p className={styles.detail}>
            <Link>상세보기</Link>
          </p>
        </div>
        <div className={styles.gridBox}>
          <img src={img02} alt="booking01" />
          <div className={styles.exhibitionBox}>
            <h2 className={styles.title}>고진감래</h2>
            <p className={styles.count}>1매 (성인1)</p>
            <p className={styles.location}>아트보다 갤러리</p>
            <p className={styles.state}>관람완료</p>
          </div>
        </div>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default BookingComplete;
