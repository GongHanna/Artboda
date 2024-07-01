import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./ReservationDetails.module.css";
import img01 from "../assets/images/details01.png";

function ReservationDetails() {
  return (
    <section>
      <header className={styles.booking}>
        <h1 className={styles.title}>
          <Link to="/bookingList">예매 상세내역</Link>
        </h1>
      </header>

      {/* 전시회 소개 */}
      <div className={styles.bookingIntro}>
        <img src={img01} alt="details01" />
        <h2 className={styles.bookingTitle}>고진감래</h2>
        <div className={styles.textBox}>
          <p className={styles.gridBox}>
            예매번호
            <strong className={styles.spacing}>091016</strong>
          </p>
          <p className={styles.gridBox}>
            관람일시
            <span className={styles.spacing}>2024-04-20 (토) 11:00</span>
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
            <span className={styles.spacing}>2024.04.05 (금) 10:23:48</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>예매상태</strong>
            <span className={styles.color}>예매완료</span>
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
            <span className={styles.spacing}>091016</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>전시이름</strong>
            <span className={styles.spacing}>고진감래</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>인원</strong>
            <span className={styles.spacing}>1매</span>
          </p>
          <p className={styles.gridBox}>
            <strong className={styles.strong}>관람일</strong>
            <span className={styles.spacing}>2024-04-20</span>
          </p>
        </div>

        <p className={styles.cancleBtn}>
          <Link>예매취소</Link>
        </p>
      </div>

      {/* 유의사항 */}
      <div className={styles.reservationNotice}>
        <h2 className={styles.title}>취소마감 밎 유의사항</h2>
        <ul className={styles.noticeList}>
          <li className={styles.noticeItem}>
            예매하신 티켓의 변경, 취소, 환불은 관람{" "}
            <span className={styles.pointColor}>하루 전 오후 5시까지</span> 만
            가능합니다.
            <br />
            이후에는 취소와 환불이 불가하오니 유의해주세요.
          </li>
          <li className={styles.noticeItem}>
            전시관람 당일 예매하신 티켓은 취소, 변경, 환불이 불가합니다.
          </li>
          <li className={styles.noticeItem}>
            관람 및 참여 여부와 관계없이 예매일에 사용하지 않은 티켓은 기간만료
            처리되어 취소, 환불이 불가능합니다.
          </li>
          <li className={styles.noticeItem}>
            대림미술관/디뮤지엄 APP을 통해 관람 당일 사용 가능한
            <span className={styles.pointColor}>QR티켓</span>이 생성됩니다. 꼭
            APP을 설치해 주세요.
          </li>
          <li className={styles.noticeItem}>
            예매취소 시점과 결제 시 사용하신 신용카드사의 따라 취소 방법과
            환급일은 다소 차이가 있을 수 있습니다.
          </li>
        </ul>

        <div className={styles.btnBox}>
          <p className={styles.bookingBtn}>
            <Link to="/bookingList">예매목록</Link>
          </p>
          <p className={styles.qrBtn}>
            <Link to="/qr">QR관람권</Link>
          </p>
        </div>
      </div>

      <GlobalMenu />
    </section>
  );
}

export default ReservationDetails;
