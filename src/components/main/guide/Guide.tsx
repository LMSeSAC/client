import { useState } from "react";
import "./Guide.scss";
import Student from "./Student";
import Teacher from "./Teacher";

interface GuideT {
  close: () => void;
}

export default function Guide({ close }: GuideT) {
  const [type, setType] = useState("student");
  return (
    <>
      <div className="guide-box d-flex">
        <div className="header d-flex">
          <h3>
            <span className="green">
              {type === "teacher" ? "선생님 " : "수강생 "}
            </span>
            이용 가이드
          </h3>
          <span className="close-btn" onClick={close}>
            ×
          </span>
        </div>
        <div className="content-box d-flex">
          <div className="d-flex">
            <span className="type" onClick={() => setType("teacher")}>
              선생님
            </span>
            <span className="type" onClick={() => setType("student")}>
              학생
            </span>
          </div>
          <div className="content">
            {type === "teacher" ? <Teacher /> : <Student />}
          </div>
        </div>
      </div>
    </>
  );
}
