// import Swiper core and required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import slide1 from "../assets/images/home-slide01.png";
import slide2 from "../assets/images/home-slide02.png";
import slide3 from "../assets/images/home-slide03.png";
import slide4 from "../assets/images/home-slide04.png";
import styles from "./homeSlide.module.css";

function HomeSlide() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      centeredSlides={true}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}>
      <SwiperSlide className={styles.slideBox}>
        <Link to="/exhibitionintro">
          <img src={slide1} alt="slide1" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={styles.slideBox}>
        <Link to="/exhibitionintro">
          <img src={slide2} alt="slide2" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={styles.slideBox}>
        <Link to="/exhibitionintro">
          <img src={slide3} alt="slide3" />
        </Link>
      </SwiperSlide>
      <SwiperSlide className={styles.slideBox}>
        <Link to="/exhibitionintro">
          <img src={slide4} alt="slide4" />
        </Link>
      </SwiperSlide>

      <div className={styles.emptyBox}></div>
    </Swiper>
  );
}

export default HomeSlide;
