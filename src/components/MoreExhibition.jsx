import GlobalMenu from "./GlobalMenu";
import styles from "./moreExhibition.module.css";
import { Link } from "react-router-dom";

function MoreExhibition() {
  return (
    <section>
      <header className={styles.more}>
        <h1 className={styles.title}>
          <Link to="/exhibitionintro">전시 소개</Link>
        </h1>
      </header>

      <div className={styles.textBox}>
        <h3 className={styles.textTitle}>김명진 작가노트</h3>
        <p className={styles.desc}>
          꿈의 힘을 믿는 사람들에게 전하는 위로와 용기.
          <br /> 예술은 인간과 자연이 함께 공존하는 소통의 장이다.
          <br /> 과거로부터 매순간 변화하는 자연을 자신만의 예술로 담아 내려던
          수많은 작가들이 있었고 단순히 모방의 대상을 넘어 자유로운 표현의
          대상이자 유대를 가지게 하는 소통의 매개체라고 생각 한다. 시골에서
          태어나 자란 나에게 자연은 휴식처이자 놀이터였 으며 삶의 일부였다.
        </p>
        <p className={styles.desc}>
          지나간 과거의 후회나 현재에 직면한 어려움을 이겨내고 위안을 받는
          장소였고 미래에 대한 두려움을 떨쳐내며 현재의 삶에 대한 소중함과
          가치를 알게 해주는 역할을 해주었다. 그래서 나는 자연에서 얻은 메시지를
          나만의 조형 언어로 만든 달의 정원을 창조했다. 달의 정원에 등장하는
          시간토끼를 통해 현실과 꿈, 과거와 미래, 인간과 동물, 소소한 일상을
          닮아 나만의 세계로 그려낸다. 이들은 단순한 꾸밈이 아니라 나의 삶과
          꿈에 대한 상징이고, 정체성과 존재의 의미를 탐구하는 소재이다.
        </p>
        <p className={styles.desc}>
          나는 작업을 통해 불안정한 현대인들에게 정작 삶에서 중요한 것이
          무엇인지 전달하고, 우리 삶에 색깔과 의미를 더하고 싶다.
        </p>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default MoreExhibition;
