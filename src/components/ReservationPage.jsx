import React, { useState } from "react";
import styles from "./reservationPage.module.css";
import { Link } from "react-router-dom";
import img1 from "../assets/images/ticket2.png";
import GlobalMenu from "./GlobalMenu";

function ReservationPage() {
  const [adultCount, setAdultCount] = useState(0);
  const adultIncrement = () => {
    setAdultCount(adultCount + 1);
  };
  const adultDecrement = () => {
    if (adultCount > 0) {
      setAdultCount(adultCount - 1);
    }
  };

  const [teenagerCount, setTeenagerCount] = useState(0);
  const teenagerIncrement = () => {
    setTeenagerCount(teenagerCount + 1);
  };
  const teenagerDecrement = () => {
    if (teenagerCount > 0) {
      setTeenagerCount(teenagerCount - 1);
    }
  };

  const [childCount, setChildCount] = useState(0);
  const childIncrement = () => {
    setChildCount(childCount + 1);
  };
  const childDecrement = () => {
    if (childCount > 0) {
      setChildCount(childCount - 1);
    }
  };

  return (
    <section>
      <header className={styles.ticket}>
        <h1 className={styles.title}>
          <Link to="/reservation">TICKETS</Link>
        </h1>
      </header>

      <ul className={styles.ticketList}>
        <li className={styles.ticketBtn}>
          <Link to="/reservation">01</Link>
        </li>
        <li className={styles.ticketBtn}>
          <Link to="/reservationpage">02 관람일/인원 선택</Link>
        </li>
        <li className={styles.ticketBtn}>
          <Link to="/reservationcomplete">03</Link>
        </li>
      </ul>

      {/* 전시회 소개 */}
      <div className={styles.ticketIntro}>
        <img src={img1} alt="ticket2" />
        <h2 className={styles.ticketTitle}>고진감래</h2>
        <div className={styles.textBox}>
          <p className={styles.date}>
            <span>전시기간</span>2024.04.15~2024.04.21
          </p>
          <p className={styles.location}>
            <span>장소</span>아트보다 갤러리
          </p>
          <p className={styles.time}>
            <span>운영시간</span>11:00~20:00
          </p>
          <p className={styles.price}>
            <span>이용요금</span>6,000원
          </p>
        </div>
      </div>

      {/* 할인 정보 */}
      <ul className={styles.priceIntro}>
        <li className={styles.priceTitle}>할인 정보</li>
        <li className={styles.priceDesc}>
          청소년(13세~18세) 무료
          <br /> 유아 및 어린이(36개월~12세) 무료
        </li>
        <li className={styles.priceDesc}>22대 국회의원 선거날 정상 운영</li>
      </ul>

      {/* 달력 */}
      <h2 className={styles.calendarTitle}>날짜 선택</h2>
      <div className={styles.calendarWrapper}>
        <div className={styles.tableHead}>
          <p className={styles.prevBtn}>이전버튼</p>
          <p className={styles.nextBtn}>다음버튼</p>
          <p className={styles.dateTitle}>April 2024</p>
        </div>
        <table>
          <tr>
            <th className={styles.calendarDate}>Sun</th>
            <th className={styles.calendarDate}>Mon</th>
            <th className={styles.calendarDate}>Tue</th>
            <th className={styles.calendarDate}>Wed</th>
            <th className={styles.calendarDate}>Thu</th>
            <th className={styles.calendarDate}>Fri</th>
            <th className={styles.calendarDate}>Sat</th>
          </tr>
          <tr>
            <td className={styles.empty}></td>
            <td className={styles.closeNumber}>1</td>
            <td className={styles.number}>2</td>
            <td className={styles.number}>3</td>
            <td className={styles.number}>4</td>
            <td className={styles.number}>5</td>
            <td className={styles.number}>6</td>
          </tr>
          <tr>
            <td className={styles.numer}>7</td>
            <td className={styles.closeNumber}>8</td>
            <td className={styles.numer}>9</td>
            <td className={styles.redNumer}>10</td>
            <td className={styles.numer}>11</td>
            <td className={styles.numer}>12</td>
            <td className={styles.numer}>13</td>
          </tr>
          <tr>
            <td className={styles.numer}>14</td>
            <td className={styles.closeNumber}>15</td>
            <td className={styles.numer}>16</td>
            <td className={styles.numer}>17</td>
            <td className={styles.numer}>18</td>
            <td className={styles.numer}>19</td>
            <td className={styles.clickNumer}>20</td>
          </tr>
          <tr>
            <td className={styles.numer}>21</td>
            <td className={styles.closeNumber}>22</td>
            <td className={styles.numer}>23</td>
            <td className={styles.numer}>24</td>
            <td className={styles.numer}>25</td>
            <td className={styles.numer}>26</td>
            <td className={styles.numer}>27</td>
          </tr>
          <tr>
            <td className={styles.numer}>28</td>
            <td className={styles.closeNumber}>29</td>
            <td className={styles.numer}>30</td>
            <td className={styles.empty}></td>
            <td className={styles.empty}></td>
            <td className={styles.empty}></td>
            <td className={styles.empty}></td>
          </tr>
        </table>
      </div>

      {/* 관람인원 */}
      <div className={styles.personnelWrapper}>
        <h2 className={styles.personnelTitle}>관람 인원</h2>
        <p className={styles.personnelDesc}>
          인원 한 개의 ID로 회당 최대 4매까지 예매 가능합니다.
          <br />
          관람하실 인원을 모두 선택해 주세요.
        </p>

        {/* 폼 / 숫자 카운트 */}
        <form>
          <div className={styles.personBox}>
            <p className={styles.personTitle}>성인</p>
            <div className={styles.formBox}>
              <input
                className={styles.minusBtn}
                onClick={adultDecrement}
                type="button"
                value="-"
              />
              <span className={styles.numValue}>{adultCount}</span>
              <input
                className={styles.plusBtn}
                onClick={adultIncrement}
                type="button"
                value="+"
              />
            </div>
          </div>
          <div className={styles.personBox}>
            <p className={styles.personTitle}>청소년</p>
            <div className={styles.formBox}>
              <input
                className={styles.minusBtn}
                type="button"
                onClick={teenagerDecrement}
                value="-"
              />
              <span className={styles.numValue}>{teenagerCount}</span>
              <input
                className={styles.plusBtn}
                type="button"
                onClick={teenagerIncrement}
                value="+"
              />
            </div>
          </div>
          <div className={styles.personBox}>
            <p className={styles.personTitle}>유아 및 어린이</p>
            <div className={styles.formBox}>
              <input
                className={styles.minusBtn}
                type="button"
                onClick={childDecrement}
                value="-"
              />
              <span className={styles.numValue}>{childCount}</span>
              <input
                className={styles.plusBtn}
                type="button"
                onClick={childIncrement}
                value="+"
              />
            </div>
          </div>

          <div className={styles.textBox}>
            <p className={styles.person}>
              성인 <span>{adultCount}</span>
            </p>
            <p className={styles.person}>
              청소년 <span>{teenagerCount}</span>
            </p>
            <p className={styles.person}>
              유아 및 어린이 <span>{childCount}</span>
            </p>
          </div>

          <label htmlFor="check">
            <input type="checkbox" name="check" id="check" />
            <span className={styles.noticeDesc}>관람시 유의사항 동의</span>
          </label>
        </form>

        <p className={styles.reservationBtn}>
          <Link to="/reservationcomplete">예매하기</Link>
        </p>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default ReservationPage;
