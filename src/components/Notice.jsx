import React, { useEffect } from "react";
import styles from "./notice.module.css";
import { Link } from "react-router-dom";
import GlobalMenu from "./GlobalMenu";

function Notice() {
  useEffect(() => {
    const { kakao } = window;

    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new kakao.maps.LatLng(37.5758, 126.9856),
      level: 3,
      mapTypeId: kakao.maps.MapTypeId.ROADMAP,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const mapTypeControl = new kakao.maps.MapTypeControl();

    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    const zoomControl = new kakao.maps.ZoomControl();

    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    kakao.maps.event.addListener(map, "center_changed", function () {
      console.log(
        "지도의 중심 좌표는 " + map.getCenter().toString() + " 입니다."
      );
    });

    kakao.maps.event.addListener(map, "zoom_changed", function () {
      console.log("지도의 현재 확대레벨은 " + map.getLevel() + "레벨 입니다.");
    });

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      console.log(
        "지도에서 클릭한 위치의 좌표는 " +
          mouseEvent.latLng.toString() +
          " 입니다."
      );
    });

    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.5758, 126.9856),
      map: map,
    });
  }, []);

  return (
    <section>
      <header className={styles.notice}>
        <h1 className={styles.title}>
          <Link to="/">안내사항</Link>
        </h1>
      </header>

      {/* 공지사항 */}
      <div className={styles.noticeWrapper}>
        <h2 className={styles.noticeTitle}>관람안내</h2>

        <ul className={styles.noticeList}>
          <li>
            <h3 className={styles.listTitle}>※예매 및 관람안내</h3>
            <p className={styles.listDesc}>
              · 타인에게 관람권을 양도 또는 판매하는 행위는 금지
              <br />
              하고 있습니다.
            </p>
            <p className={styles.listDesc}>
              · 예약자 본인이 아닌 경우 관람이 제한될 수 있습니다.
            </p>
            <p className={styles.listDesc}>
              · 매주 <span className={styles.underline}>월요일 오후 6시</span>에
              일주일 단위로 오픈됩니다.
            </p>
            <p className={styles.listDesc}>
              · 예매 상세내역 페이지에{" "}
              <span className={styles.color}>QR관람권</span>이 활성화 됩니다.
            </p>
          </li>
          <li>
            <h3 className={styles.listTitle}>※예매 취소 안내</h3>
            <p className={styles.listDesc}>
              · 예약 취소 가능기간은 해당 회차 종료 10분전까지입니다.
            </p>
            <p className={styles.listDesc}>
              · 방문이 힘드신 경우 타인을 배려하기 위해 반드시
              <br />
              예약 취소 부탁드립니다.
            </p>
            <p className={styles.listDesc}>
              · 예약 취소는 '마이페이지 - ‘예매 내역'에서 확인 가능합니다.
            </p>
          </li>
          <li>
            <h3 className={styles.listTitle}>※입장안내</h3>
            <p className={styles.listDesc}>
              · 전시실 앞에 배치 되어있는 QR검표기에 QR관람권을
              <br />
              인식한 후 입장 가능합니다.
            </p>
          </li>
          <li>
            <h3 className={styles.listTitle}>※환불정책 </h3>
            <p className={styles.listDesc}>
              · 이용회차 입장시간 
              <span className={styles.color}>10분 전까지 취소시 100%</span> 환불
            </p>
            <p className={styles.listDesc}>
              · 이용회차 입장 
              <span className={styles.color}>마감시간 이후 취소/환불 불가</span>
            </p>
          </li>
        </ul>
      </div>

      {/* 카카오맵 */}
      <div className={styles.mapWrapper}>
        <h2 className={styles.mapTitle}>오시는 길</h2>
        <div className={styles.kakaoMap}>
          <div className={styles.map} id="map">
            지도
          </div>
        </div>
        <ul className={styles.mapList}>
          <li>
            <strong>주소</strong>
            <p className={styles.mapDesc}>서울 종로구 삼일대로 461</p>
          </li>
          <li>
            <strong>대표번호</strong>
            <p className={styles.mapDesc}>010.9266.4645</p>
          </li>
          <li>
            <strong>업무시간</strong>
            <p className={styles.mapDesc}>09:00~18:00</p>
          </li>
        </ul>
      </div>

      {/* 폼/ 문의사항 */}
      <form className={styles.formWrapper}>
        <h2 className={styles.formTitle}>1:1 문의</h2>
        <label htmlFor="name" className={styles.name}>
          <p className={styles.labelTitle}>Name</p>
          <input
            type="text"
            placeholder="이름을 입력해 주세요."
            id="name"
            required
          />
        </label>
        <label htmlFor="contact" className={styles.contact}>
          <p className={styles.labelTitle}>Contact</p>
          <input
            type="text"
            placeholder="연락처를 입력해 주세요."
            id="contact"
            required
          />
        </label>
        <label htmlFor="email" className={styles.email}>
          <p className={styles.labelTitle}>E-Mail</p>
          <input
            type="text"
            placeholder="이메일을 입력해 주세요."
            id="email"
            required
          />
        </label>
        <label htmlFor="comment" className={styles.comment}>
          <p className={styles.labelTitle}>Comment</p>
          <textarea id="comment" placeholder="내용을 입력해 주세요."></textarea>
        </label>
        <button type="submit" className={styles.noticeBtn}>
          전송
        </button>
      </form>
      <GlobalMenu />
    </section>
  );
}

export default Notice;
