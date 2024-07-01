import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./CancelAccount.module.css";

function CancelAccount() {
  return (
    <section>
      <header className={styles.delete}>
        <h1 className={styles.title}>
          <Link to="/">회원탈퇴</Link>
        </h1>
      </header>

      <div className={styles.flexBox}>
        <h2 className={styles.title}>회원탈퇴 사유</h2>
        <p className={styles.desc}>* 표시는 필수 입력 항목입니다.</p>
      </div>

      <form className={styles.deleteForm}>
        <div className={styles.reasonBox}>
          <h3 className={styles.resonTitle}>개인 정보 관련 *</h3>
          <label htmlFor="reson1">
            <input type="checkbox" name="reson1" id="reson1" />
            아이디 변경을 위해 탈퇴 후 재가입
          </label>
          <label htmlFor="reson2">
            <input type="checkbox" name="reson2" id="reson2" />
            장기간 부재(군입대, 유학 등)
          </label>
          <label htmlFor="reson3">
            <input type="checkbox" name="reson3" id="reson3" />
            개인정보 유출 우려
          </label>
        </div>

        <div className={styles.reasonBox}>
          <h3 className={styles.resonTitle}>사이트 이용관련 *</h3>
          <label htmlFor="reson4">
            <input type="checkbox" name="reson4" id="reson4" />
            사이트 이용 불편
          </label>
          <label htmlFor="reson5">
            <input type="checkbox" name="reson5" id="reson5" />
            이용빈도 낮음
          </label>
          <label htmlFor="reson6">
            <input type="checkbox" name="reson6" id="reson6" />
            컨텐츠 등 이용할만한 서비스 부족
          </label>
          <label htmlFor="reson7">
            <input type="checkbox" name="reson7" id="reson7" />
            실질적인 혜택 부족
          </label>
        </div>

        <div className={styles.reasonBox}>
          <h3 className={styles.resonTitle}>컨텐츠 이용관련 *</h3>
          <label htmlFor="reson8">
            <input type="checkbox" name="reson8" id="reson8" />
            상품의 다양성, 품질 불만족
          </label>
          <label htmlFor="reson9">
            <input type="checkbox" name="reson9" id="reson9" />
            상품 가격 불만족
          </label>
          <label htmlFor="reson10">
            <input type="checkbox" name="reson10" id="reson10" />
            교환, 환불, 반품 불만족
          </label>
        </div>

        <div className={styles.btnBox}>
          <button className={styles.reset} type="reset">
            <Link to="/user">취소</Link>
          </button>
          <button className={styles.submit} type="submit">
            <Link to="/login">회원 탈퇴</Link>
          </button>
        </div>
      </form>

      <GlobalMenu />
    </section>
  );
}

export default CancelAccount;
