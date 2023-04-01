import { useState } from "react";
import Header from "../components/header/Header";
// import Fullpage from "../components/main/Fullpage";
import Guide from "../components/main/guide/Guide";
import Overlay from "../components/main/Overlay";
import SectionOne from "../components/main/SectionOne";

export default function Main() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      
      <div className="main-page">
        <div className="section section-1">
          <SectionOne open={() => setShow(true)} />
        </div>
      </div>
      {/* <Fullpage open={() => setShow(true)} /> */}
      {show && <Overlay />}
      {show && <Guide close={() => setShow(false)} />}
    </>
  );
}
