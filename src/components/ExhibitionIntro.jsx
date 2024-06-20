import styles from "./exhibitionIntro.module.css";
import introImg from "../assets/images/exhibition-intro.png";
import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";

const ExhibitionIntro = () => {
  return (
    <section className={styles.introSection}>
      <header className={styles.intro}>
        <h1 className={styles.introTitle}>
          <Link to="/exhibition">뒤로가기</Link>
        </h1>
      </header>

      <div className={styles.introContents}>
        <ul className={styles.introWrapper}>
          <li className={styles.introList}>
            <img src={introImg} alt="introImg" />
            <div className={styles.introFlexBox}>
              <h2 className={styles.introTitle}>달의 정원</h2>
              <p className={styles.introState}>전시중</p>
            </div>
            <div className={styles.introFlexBox}>
              <div className={styles.introTextBox}>
                <p className={styles.introDate}>
                  <span>전시기간</span>
                  2024.03.27~2024.04.06
                </p>
                <p className={styles.introLocation}>
                  <span>장소</span>
                  아트보다 갤러리
                </p>
                <p className={styles.introClosedDate}>
                  <span>휴관일</span>매 주 월요일
                </p>
                <p className={styles.introPrice}>
                  <span>이용요금</span>6,000원
                </p>
              </div>
              <Link to="" className={styles.shareBtn}>
                공유버튼
              </Link>
            </div>
            <Link to="/reservationpage" className={styles.reservationBtn}>
              예매하기
            </Link>
          </li>

          <li className={styles.exhibitionList}>
            <h2 className={styles.exhibitionTitle}>전시소개</h2>
            <h3 className={styles.exhibitionSubTitle}>김명진 작가노트</h3>
            <p className={styles.exhibitionDesc}>
              꿈의 힘을 믿는 사람들에게 전하는 위로와 용기
            </p>
            <p className={styles.exhibitionDesc}>
              예술은 인간과 자연이 함께 공존하는 소통의 장이다.
            </p>
            <p className={styles.exhibitionDesc}>
              과거로부터 매순간 변화하는 자연을 자신만의 예술로 담아 내려던
              <br />
              수많은 작가들이 있었고 단순히 모방의 대상을 넘어 자유...
            </p>
            <Link to="/exhibitionmore" className={styles.moreBtn}>
              더보기
            </Link>
          </li>
        </ul>
      </div>
      <GlobalMenu />
    </section>
  );
};

export default ExhibitionIntro;
