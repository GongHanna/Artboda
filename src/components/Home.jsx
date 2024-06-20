import React from "react";

import styles from "./home.module.css";
import mainImg from "../assets/images/home-img1.png";
import icon from "../assets/images/home-icon.png";
import { Link } from "react-router-dom";
import HomeSlide from "./HomeSlide";
import GlobalMenu from "./GlobalMenu";

const Home = () => {
  return (
    <section>
      <header className={styles.home}>
        <h1 className={styles.title}>
          이제,<strong>진짜 아트를 보는 시간</strong>
        </h1>
        <Link to="/news" className={styles.icon}>
          <img src={icon} alt="icon" />
        </Link>
      </header>

      <img src={mainImg} alt="mainImg" className={styles.mainImg} />

      <HomeSlide />
      <GlobalMenu />
    </section>
  );
};

export default Home;
