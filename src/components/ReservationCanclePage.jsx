import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./ReservationCanclePage.module.css";
import img01 from "../assets/images/cancle01.png";

function ReservationCanclePage() {
  return (
    <section>
      <header className={styles.details}>
        <h1 className={styles.title}>
          <Link to="/reservation/details">예매 취소 요청</Link>
        </h1>
      </header>

      {/* 전시회 소개 */}
      <div className={styles.canclePageIntro}>
        <img src={img01} alt="canclePage01" />
        <h2 className={styles.canclePageTitle}>행복POP☆UP</h2>
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
            <span className={styles.color}>취소가능</span>
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
          <p className={styles.gridBox}>
            <strong className={styles.strong}>할인금액</strong>
            <span className={styles.spacing}>
              일반: -0원
              <br />
              합계: 0원
            </span>
          </p>
          <p className={`${styles.gridBox} ${styles.border}`}>
            <strong className={styles.strong}>환불 계좌</strong>
            <span className={styles.spacing}>
              신한은행
              <br />
              11056820180321
            </span>
          </p>
          <p className={`${styles.gridBox} ${styles.bg}`}>
            <strong className={styles.strong}>환불금액</strong>
            <span className={styles.spacing}>6,000원</span>
          </p>
        </div>
      </div>

      {/* 환불정책 */}
      <div className={styles.cancleNotice}>
        <h2 className={styles.title}>환불정책</h2>

        <ul className={styles.noticeList}>
          <li className={styles.noticeTitle}>
            <h3 className={styles.subTitle}>예매 취소 환불정책</h3>
          </li>
          <li className={styles.noticeDesc}>
            1. 신용카드 할부 결제로 구매하신 티켓 수량의 일부를 취소하실 경우,
            신용카드사의 사정에 따라 혜택(무이자 할부 등)의 적용 여부가 달라질
            수 있습니다.
          </li>
          <li className={styles.noticeDesc}>
            2. 티켓 환불 시점과 해당 카드사의 환불 처리 기준에 따라 취소 금액 의
            환급일은 다소 차이가 있을 수 있습니다. 사용한 카드의 환불에 관한
            사항은 신용카드사에 직접 문의해 주시기 바랍니다.
          </li>
          <li className={styles.noticeDesc}>
            3. 선물하기를 통해 예매하신 티켓을 다른 분께 선물한 경우, 예매 취소,
            일정 변경이 불가능합니다. 단, 전시 입장 티켓의 경우, 선물 받 으신
            분이 이를 거절했을때 변경, 취소가 가능합니다.
          </li>
          <li className={styles.noticeDesc}>
            4. 천재지변, 전시장 입장이 불가능한 상태에 이르는 시설 고장, 전시장
            내 총기 또는 가스 등의 사고로 인한 인력 사고, 감염병 예방 등으로
            인한 정부의 임시 폐관 조치와 같은 미술관 측 사유로 전시 관람,
            프로그램에 참여가 어려울 경우 취소 기한에 관계없이 구매하신 티켓에
            대한 전액 환불을 진행합니다.
          </li>
          <li className={styles.noticeDesc}>
            5. 전시 관람 또는 프로그램 참여 당일 예매하신 티켓은 취소, 변경,
            환불이 불가능합니다.
          </li>
          <li className={styles.noticeDesc}>
            6. 예매하신 티켓의 변경, 취소, 환불은 관람 하루 전 오후 5시까지만
            가능합니다.
          </li>
          <li className={styles.noticeDesc}>
            7. 환불은 결제한 수단으로만 진행됩니다.
          </li>
          <li className={styles.noticeDesc}>
            8. 티켓의 환불 신청은 대림문화재단 홈페이지와 어플리케이션을
            통해서만 가능합니다. 구체적인 내용은 각 해당 페이지에 명시된 취소 및
            환불 규정을 따릅니다.
          </li>
        </ul>

        <form className={styles.noticeForm}>
          <label htmlFor="cancle" className={styles.noticelabel}>
            <input
              className={styles.noticeinput}
              type="checkbox"
              name="cancle"
              id="cancle"
            />
            예매취소에 대한 환불정책을 확인했습니다.
          </label>
          <div className={styles.btnBox}>
            <button className={styles.reset} type="reset">
              <Link to="/reservation/details">취소</Link>
            </button>
            <button className={styles.submit} type="submit">
              <Link to="/reservation/cancle/page/complete">확인</Link>
            </button>
          </div>
        </form>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default ReservationCanclePage;
