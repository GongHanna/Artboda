import "./assets/styles/reset.css";
import "./assets/styles/global.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import News from "./components/News";
import Reservation from "./components/Reservation";
import Exhibition from "./components/Exhibition";
import MoreExhibition from "./components/MoreExhibition";
import Notice from "./components/Notice";
import User from "./components/User";
import ExhibitionIntro from "./components/ExhibitionIntro";
import ReservationPage from "./components/ReservationPage";
import ReservationComplete from "./components/ReservationComplete";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/news" element={<News />} />
      <Route path="/reservation" element={<Reservation />} />
      <Route path="/reservationpage" element={<ReservationPage />} />
      <Route path="/reservationcomplete" element={<ReservationComplete />} />
      <Route path="/exhibition" element={<Exhibition />} />
      <Route path="/exhibitionintro" element={<ExhibitionIntro />} />
      <Route path="/exhibitionmore" element={<MoreExhibition />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/user" element={<User />} />
    </Routes>
  );
};

export default App;