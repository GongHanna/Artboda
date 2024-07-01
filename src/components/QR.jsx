import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./QR.module.css";
import img01 from "../assets/images/qr.png";
import img02 from "../assets/images/qr-exhibition.png";

function QR(props) {
  return (
    <section>
      <header className={styles.qr}>
        <h1 className={styles.title}>
          <Link to="/reservation/details">QR 관람권</Link>
        </h1>
      </header>

      <div className={styles.qrWrapper}>
        <h2 className={styles.qrtitle}>관람 예정일로 부터 D-1일 남았습니다.</h2>
        <div className={styles.qrBox}>
          <img src={img01} alt="qr-img" />
          <p className={styles.desc}>
            QR코드는
            <br /> 관람당일 활성화 됩니다.
          </p>
        </div>
      </div>

      <div className={styles.gridBox}>
        <img src={img02} alt="고진감래" />
        <div className={styles.textBox}>
          <h3 className={styles.number}>예매번호 091016</h3>
          <h3 className={styles.title}>고진감래</h3>
          <p className={styles.date}>2024-04-20 (토) 11:00</p>
          <p className={styles.personnel}>1매(성인1)</p>
          <p className={styles.location}>아트보다 갤러리 서울</p>
        </div>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default QR;
