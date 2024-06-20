import styles from "./reservationItem.module.css";
import { Link } from "react-router-dom";

function ReservationItem({ data }) {
  const { imgUrl, title, date, btn } = data;
  const path = process.env.PUBLIC_URL;

  return (
    <div className={styles.ticketBox}>
      <img src={path + imgUrl} alt={title} />
      <div className={styles.flexBox}>
        <div className={styles.textBox}>
          <h3 className={styles.ticketTitle}>{title}</h3>
          <p className={styles.ticketDate}>{date}</p>
        </div>
        <Link to="/reservationpage" className={styles.reservationBtn}>
          {btn}
        </Link>
      </div>
    </div>
  );
}

export default ReservationItem;
