import { Link } from "react-router-dom";
import styles from "./ReservationCancle.module.css";
import GlobalMenu from "./GlobalMenu";
import img01 from "../assets/images/cancle01.png";

function ReservationCancle() {
  return (
    <section>
      <header className={styles.cancle}>
        <h1 className={styles.title}>
          <Link to="/booking/cancel">환불 상세내역</Link>
        </h1>
      </header>

      {/* 전시회 소개 */}
      <div className={styles.cancleIntro}>
        <img src={img01} alt="cancle01" />
        <h2 className={styles.cancleTitle}>행복POP☆UP</h2>
        <div className={styles.textBox}>
          <p className={styles.gridBox}>
            예매번호
            <strong className={styles.spacing}>060689</strong>
          </p>
          <p className={styles.gridBox}>
            관람일시
            <span className={styles.spacing}>2024-02-24 (토) 11:00</span>
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

      {/* 환불 목록 */}
      <div className={styles.cancleList}>
        <h2 className={styles.title}>환불목록</h2>
        <div className={styles.textBox}>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>예매번호</strong>
            <span className={styles.spacing}>060689</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>전시이름</strong>
            <span className={styles.spacing}>행복POP☆UP</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>인원</strong>
            <span className={styles.spacing}>1매</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>관람일</strong>
            <span className={styles.spacing}>2024-02-24</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>예매상태</strong>
            <span className={styles.color}>취소완료</span>
          </p>
        </div>
      </div>

      {/* 환불 정보 */}
      <div className={styles.cancleList}>
        <h2 className={styles.title}>환불정보</h2>
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

      {/* 유의사항 */}
      <div className={styles.cancleNotice}>
        <h2 className={styles.title}>환불시 유의사항</h2>
        <ul className={styles.noticeList}>
          <li className={styles.noticeItem}>
            신용카드 할부 결제로 구매하신 티켓 수량의 일부를 취소하실 경우,
            신용카드사의 사정에 따라 혜택(무이자 할부 등)의 적용 여부가 달라질
            수 있습니다.
          </li>
          <li className={styles.noticeItem}>
            티켓 환불 시점과 해당 카드사의 환불 처리 기준에 따라 취소 금액의
            환급일은 다소 차이가 있을 수 있습니다.
          </li>
          <li className={styles.noticeItem}>
            전시 관람 또는 프로그램 참여 당일 예매하신 티켓은 취소, 변경, 환불이
            불가합니다.
          </li>
          <li className={styles.noticeItem}>
            예매하신 티켓의 변경, 취소, 환불은 관람
            <span className={styles.pointColor}>하루 전 오후 5시</span>
            까지만 가능합니다.
          </li>
          <li className={styles.noticeItem}>
            환불은 결제한 수단으로만 진행됩니다.
          </li>
        </ul>

        <p className={styles.bookingBtn}>
          <Link to="/bookingList">예매목록</Link>
        </p>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default ReservationCancle;
