import styles from "./exhibitionItem.module.css";
import { useNavigate } from "react-router-dom";

function ExhibitionItem({ data }) {
  const nav = useNavigate();

  const { imgUrl, title, state, location, date } = data;
  const path = process.env.PUBLIC_URL;

  return (
    <li className={styles.exhibitionBox}>
      <div className={styles.clickBox} onClick={() => nav("/exhibitionintro")}>
        <img src={path + imgUrl} alt={title} />
        <div className={styles.flexBox}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.stateBtn}>{state}</p>
        </div>
        <p className={styles.location}>{location}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </li>
  );
}

export default ExhibitionItem;
