import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import {
  faBell,
  faFileLines,
  faComments,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import "./SideMenu.scss";

interface onClickT {
  onClick: (type: string) => void;
}

export default function SideMenu({ onClick }: onClickT) {
  return (
    <>
      <div className="side-menu d-flex">
        <div className="logo">
          <a href="/">
            <img src="/img/main/logo.png" alt="logo" />
          </a>
        </div>
        <div className="m-menu d-flex">
          <span onClick={() => onClick("home")}>
            <FontAwesomeIcon icon={faHouse} />
          </span>
          <span onClick={() => onClick("notice")}>
            <FontAwesomeIcon icon={faBell} />
          </span>
          <span onClick={() => onClick("material")}>
            <FontAwesomeIcon icon={faFileLines} />
          </span>
          <span onClick={() => onClick("question")}>
            <FontAwesomeIcon icon={faComments} />
          </span>
        </div>
        <div className="students-icon">
          <span onClick={() => onClick("students")}>
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </div>
    </>
  );
}
