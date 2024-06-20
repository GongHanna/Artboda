import styles from "./reservationComplete.module.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/reservationCheck.png";
import GlobalMenu from "./GlobalMenu";

function ReservationComplete() {
  return (
    <section>
      <header className={styles.ticket}>
        <h1 className={styles.title}>
          <Link to="/">TICKETS</Link>
        </h1>
      </header>

      <ul className={styles.ticketList}>
        <li className={styles.ticketBtn}>
          <Link to="/reservation">01</Link>
        </li>
        <li className={styles.ticketBtn}>
          <Link to="/reservationpage">02</Link>
        </li>
        <li className={styles.ticketBtn}>
          <Link to="/reservationcomplete">03 예매 완료</Link>
        </li>
      </ul>

      <div className={styles.completeTextBox}>
        <h2 className={styles.completeTitle}>예매가 완료 되었습니다.</h2>
        <p className={styles.completeDesc}>
          QR관람권으로 관람당일 바로 입장이 가능합니다.
        </p>
        <p className={styles.completeDesc}>
          예매상세내역은[회원정보]-
          <br /> [예매내역]에서 확인 하실 수 있습니다.
        </p>
      </div>

      <div className={styles.reservationCheck}>
        <p className={styles.reservationNum}>예매번호 091016</p>

        <div className={styles.flexBox}>
          <img src={img1} alt="고진감래" />
          <div className={styles.textBox}>
            <h3 className={styles.completeTitle}>고진감래</h3>
            <p className={styles.completeDate}>2024-04-20 (토) 11:00</p>
            <p className={styles.completePersonnel}>1매(성인1)</p>
            <p className={styles.completeLocation}>아트보다 갤러리 서울</p>
          </div>
        </div>

        <Link className={styles.reservationBtn}>
          <p>예매내역확인</p>
        </Link>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default ReservationComplete;
