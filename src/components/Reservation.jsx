import React, { useState } from "react";
import styles from "./reservation.module.css";
import { Link } from "react-router-dom";
import ticketData from "../assets/DB/ticket-data-list.json";
import ReservationItem from "./ReservationItem";
import GlobalMenu from "./GlobalMenu";

function Reservation() {
  const [data, setData] = useState(ticketData);
  return (
    <section>
      <header className={styles.ticket}>
        <h1 className={styles.title}>
          <Link to="/">TICKETS</Link>
        </h1>
      </header>

      <ul className={styles.ticketList}>
        <li className={styles.ticketBtn}>
          <Link to="/reservation">01 티켓 선택</Link>
        </li>
        <li className={styles.ticketBtn}>
          <Link to="/reservationpage">02</Link>
        </li>
        <li className={styles.ticketBtn}>
          <Link to="/reservationcomplete">03</Link>
        </li>
      </ul>

      <div className={styles.ticketWrapper}>
        <div className={styles.flexBox}>
          <p className={styles.subDesc}>총 2건</p>
          <p className={styles.subDesc}>최신순 ｜ 오래된순</p>
        </div>

        {data.map((data) => (
          <ReservationItem key={data.id} data={data} />
        ))}
      </div>
      <GlobalMenu />
    </section>
  );
}

export default Reservation;
