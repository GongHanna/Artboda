import styles from "./exhibition.module.css";
import icon from "../assets/images/exhibition-icon.png";
import { useState } from "react";
import ExhibitionData from "../assets/DB/exhibition-data-list.json";
import ExhibitionList from "./ExhibitionList";
import { Link, useNavigate } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";

const Exhibition = () => {
  const [data] = useState(ExhibitionData);
  const nav = useNavigate();

  return (
    <section>
      <header className={styles.exhibition}>
        <h1 className={styles.title} onClick={() => nav("/")}>
          전시 소개
        </h1>
        <Link to="" className={styles.exhibitionIcon}>
          <img src={icon} alt="icon" />
        </Link>
      </header>

      <div className={styles.exhibitionContainer}>
        <ul className={styles.exhibitionList}>
          <li>최신순</li>
        </ul>

        <ExhibitionList data={data} />
      </div>
      <GlobalMenu />
    </section>
  );
};

export default Exhibition;
