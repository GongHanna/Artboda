import React from "react";
import styles from "./ChangeInfomation.module.css";
import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";

function ChangeInfomation() {
  return (
    <section>
      <header className={styles.info}>
        <h1 className={styles.title}>
          <Link to="/user">개인정보 변경/탈퇴</Link>
        </h1>
      </header>

      <form className={styles.infoBox}>
        <h2 className={styles.title}>기본 회원 정보</h2>
        <p className={styles.id}>
          아이디
          <span>seooo8****</span>
        </p>
        <div className={styles.passwordBox}>
          <p className={styles.password}>새 비밀번호</p>
          <input
            type="password"
            placeholder="새 비밀번호를 입력해주세요"
            id="newPassword"
          />
        </div>

        <div className={styles.passwordBox}>
          <p className={styles.password}>새 비밀번호 확인</p>
          <input
            type="password"
            placeholder="새 비밀번호를 재입력해주세요"
            id="checkPassword"
          />
        </div>

        <p className={styles.nation}>
          내/외국인<span className={styles.nationSpacing}>내국인</span>
        </p>
        <p className={styles.name}>
          이름<span className={styles.nameSpacing}>이*아</span>
        </p>
        <p className={styles.birth}>
          생년월일<span className={styles.birthSpacing}>2000.08.25</span>
        </p>
        <p className={styles.phone}>
          휴대폰 번호<span className={styles.phoneSpacing}>010-****-9999</span>
        </p>

        <div className={styles.phoneBox}>
          <p className={styles.desc}>휴대폰 번호 변경</p>
          <select name="numbers" className={styles.numbers}>
            <option value="010" selected>
              010
            </option>
            <option value="011">011</option>
            <option value="016">016</option>
            <option value="017">017</option>
            <option value="018">018</option>
          </select>
          <span className={styles.hyphen}>-</span>
          <input
            className={styles.number}
            type="number"
            name="userNumber"></input>
          <span className={styles.hyphen}>-</span>
          <input
            className={styles.number}
            type="number"
            name="userNumber"></input>
          <button className={styles.send} type="submit">
            인증발송
          </button>
          <p className={styles.desc}>인증번호</p>
          <input
            className={styles.confirmNum}
            type="text"
            placeholder="인증번호를 입력해 주세요."
          />{" "}
          <button type="submit" className={styles.confirmBtn}>
            인증확인
          </button>
        </div>

        <p className={styles.email}>
          이메일<span className={styles.emailSpacing}>seo*****@naver.com</span>
        </p>

        <div className={styles.emailBox}>
          <p className={styles.desc}>이메일 변경</p>
          <input
            className={styles.email}
            placeholder="이메일"
            type="email"
            name="userEmail"></input>
          <span className={styles.at}>@</span>
          <input className={styles.email} type="email" name="userEmail"></input>
          <select name="emails" className={styles.emails}>
            <option value="직접입력" selected>
              직접입력
            </option>
            <option value="naver.com">naver.com</option>
            <option value="hanmail.net">hanmail.net</option>
            <option value="nate.com">nate.com</option>
            <option value="gmail.com">gmail.com</option>
          </select>
          <button className={styles.check} type="submit">
            중복체크
          </button>
        </div>
      </form>

      <p className={styles.withdrawal}>회원탈퇴</p>
      <GlobalMenu />
    </section>
  );
}

export default ChangeInfomation;
