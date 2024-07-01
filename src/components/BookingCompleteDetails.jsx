import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./BookingCompleteDetails.module.css";
import img01 from "../assets/images/details02.png";

function BookingCompleteDetails() {
  return (
    <section>
      <header className={styles.details}>
        <h1 className={styles.title}>
          <Link to="/">예매 상세내역</Link>
        </h1>
      </header>

      {/* 전시회 소개 */}
      <div className={styles.detailIntro}>
        <img src={img01} alt="details02" />
        <h2 className={styles.detailTitle}>달의 정원</h2>
        <div className={styles.textBox}>
          <p className={styles.gridBox}>
            예매번호
            <strong className={styles.spacing}>200704</strong>
          </p>
          <p className={styles.gridBox}>
            관람일시
            <span className={styles.spacing}>2024-03-30 (토) 11:00 </span>
          </p>
          <p className={styles.gridBox}>
            관람인원
            <span className={styles.spacing}>1매</span>
          </p>
          <p className={styles.gridBox}>
            장소
            <span className={styles.spacing}>아트보다 갤러리</span>
          </p>
        </div>
      </div>

      {/* 예매 정보 */}
      <div className={styles.reservationInfo}>
        <h2 className={styles.title}>예매정보</h2>
        <div className={styles.textBox}>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>예매자</strong>
            <span className={styles.spacing}>이서아</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>휴대폰</strong>
            <span className={styles.spacing}>010-2024-0330</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>예매일시</strong>
            <span className={styles.spacing}>2024.03.15 (금) 15:54:20</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>예매상태</strong>
            <span className={styles.color}>관람완료</span>
          </p>
        </div>
      </div>

      {/* 결제 정보 */}
      <div className={styles.reservationInfo}>
        <h2 className={styles.title}>결제정보</h2>
        <div className={styles.textBox}>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>티켓금액</strong>
            <span className={styles.spacing}>6,000원</span>
          </p>
          <p className={`${styles.gridBox} ${styles.border}`}>
            <strong className={styles.strong}>할인금액</strong>
            <span className={styles.spacing}>
              일반: -0원
              <br />
              합계: 0원
            </span>
          </p>
          <p className={`${styles.gridBox} ${styles.bg}`}>
            <strong className={styles.strong}>환불금액</strong>
            <span className={styles.spacing}>6,000원</span>
          </p>
        </div>
      </div>

      {/* 티켓 목록 */}
      <div className={styles.reservationInfo}>
        <h2 className={styles.title}>티켓목록</h2>
        <div className={styles.textBox}>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>예매번호</strong>
            <span className={styles.spacing}>200704</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>전시이름</strong>
            <span className={styles.spacing}>달의 정원</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>인원</strong>
            <span className={styles.spacing}>1매</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>관람일</strong>
            <span className={styles.spacing}>2024-03-30</span>
          </p>
        </div>
      </div>

      <p className={styles.bookingBtn}>
        <Link to="/bookingList">예매목록</Link>
      </p>
      <GlobalMenu />
    </section>
  );
}

export default BookingCompleteDetails;
