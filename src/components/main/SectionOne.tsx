import { Link } from "react-router-dom";
import "./SectionOne.scss";

interface SectionT {
  open: () => void;
}

export default function SectionOne({ open }: SectionT) {
  return (
    <div className="section-one">
      <div className="container">
        <div className="d-flex">
          <img src="/img/main/main_img.png" alt="main-img" />
          <div>
            <h1>
              LMSeSAC<span>은</span>
            </h1>
            <h3>
              청년취업사관학교 교육생분들만을 위한 <br /> Learning Management
              System(LMS) 입니다.
            </h3>
            <button className="guide" onClick={open}>
              이용 가이드
            </button>
            <Link to="/classroom">
              <button className="classroom">강의실 입장</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
