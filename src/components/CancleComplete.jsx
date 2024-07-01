import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./CancleComplete.module.css";
import img1 from "../assets/images/booking03.png";

function CancleComplete() {
  return (
    <section>
      <header className={styles.cancleComplete}>
        <h1 className={styles.title}>
          <Link to="/">예매 취소</Link>
        </h1>
      </header>

      <div className={styles.completeTextBox}>
        <h2 className={styles.completeTitle}>취소가 완료 되었습니다.</h2>
        <p className={styles.completeDesc}>
          고객님의 취소 요청이 정상적으로 처리되었습니다.
        </p>
      </div>

      <div className={styles.reservationCheck}>
        <p className={styles.reservationNum}>예매번호 060689</p>

        <div className={styles.flexBox}>
          <img src={img1} alt="행복" />
          <div className={styles.textBox}>
            <h3 className={styles.completeTitle}>행복POP☆UP</h3>
            <p className={styles.completeDate}>2024-02-24 (토) 10:00</p>
            <p className={styles.completePersonnel}>1매(성인1)</p>
            <p className={styles.completeLocation}>아트보다 갤러리 서울</p>
          </div>
        </div>

        <Link to="/reservation/cancle" className={styles.reservationBtn}>
          <p>취소내역확인</p>
        </Link>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default CancleComplete;
