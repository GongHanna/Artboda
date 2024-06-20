import styles from "./user.module.css";
import profile from "../assets/images/profile.png";
import off from "../assets/images/settingBtn-off.png";
import on from "../assets/images/settingBtn-on.png";
import GlobalMenu from "./GlobalMenu";

function User() {
  return (
    <section>
      <header className={styles.user}>
        <h1 className={styles.title}>MY PAGE</h1>
      </header>

      <div className={styles.userInfo}>
        <img src={profile} alt="profile" />
        <div className={styles.textBox}>
          <h2 className={styles.userName}>이서아</h2>
          <p className={styles.userID}>seooo8****</p>
        </div>
      </div>

      <ul className={styles.userWrapper}>
        <li className={styles.myInfo}>
          <h3 className={styles.myInfoTitle}>내정보 관리</h3>
          <p className={styles.myInfoDesc}>예매 내역</p>
          <p className={styles.myInfoDesc}>개인정보 변경/탈퇴</p>
        </li>
        <li className={styles.setting}>
          <h3 className={styles.settingTitle}>설정</h3>
          <p className={styles.settingDesc}>
            알림 설정 <img src={off} alt="off" />
          </p>
          <p className={styles.settingDesc}>
            자동 로그인
            <img src={on} alt="on" />
          </p>
          <p className={styles.settingDesc}>
            버전 정보
            <span className={styles.color}>12.1.67</span>
          </p>
        </li>
      </ul>

      <button className={styles.logoutBtn}>로그아웃</button>
      <GlobalMenu />
    </section>
  );
}

export default User;
