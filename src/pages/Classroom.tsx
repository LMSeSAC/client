import { useState } from "react";
import SideMenu from "../components/classroom/SideMenu";
import Window from "../components/classroom/Window";

export default function Classroom() {
  const [content, setContent] = useState("home");

  const onClick = (content: string) => {
    setContent(content);
  };

  return (
    <>
      <div className="d-flex">
        <SideMenu onClick={onClick} />
        <Window content={content} onClick={onClick} />
      </div>
    </>
  );
}
