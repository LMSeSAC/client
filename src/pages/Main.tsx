import { useState } from "react";
import Header from "../components/header/Header";
import Fullpage from "../components/main/Fullpage";
import Guide from "../components/main/guide/Guide";
import Overlay from "../components/main/Overlay";

export default function Main() {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      <Fullpage open={() => setShow(true)} />
      {show && <Overlay />}
      {show && <Guide close={() => setShow(false)} />}
    </>
  );
}
