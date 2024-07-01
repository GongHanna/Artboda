import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";
import styles from "./Login.module.css";

function Login() {
  return (
    <section>
      <header className={styles.login}>
        <h1 className={styles.title}>로그인</h1>
      </header>

      <form className={styles.loginForm}>
        <input type="text" id="userID" placeholder="아이디" />
        <input
          type="password"
          name="userPassword"
          id="userPassword"
          placeholder="비밀번호"
        />

        <div className={styles.flexBox}>
          <label htmlFor="check">
            <input type="checkbox" name="check" id="check" />
            아이디 저장
          </label>
          <p className={styles.find}>아이디 찾기 │ 비밀번호 찾기</p>
        </div>

        <button className={styles.loginBtn}>로그인</button>
        <p className={styles.joinBtn}>회원가입</p>
      </form>

      <div className={styles.snsLogin}>
        <p className={styles.title}>소셜계정으로 로그인</p>
        <ul className={styles.snsList}>
          <li className={styles.naver}>네이버</li>
          <li className={styles.kakao}>카카오톡</li>
          <li className={styles.apple}>애플</li>
        </ul>
      </div>
      <GlobalMenu />
    </section>
  );
}

export default Login;
