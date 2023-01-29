import { Link } from "react-router-dom";
import "./RegisterMain.scss";

export default function RegisterMain() {
  return (
    <>
      <div className="register-main d-flex">
        <h1>
          <span>LMSeSAC</span>에 오신 것을 환영합니다!
        </h1>
        <div className="d-flex">
          <div>
            <img src="/img/register/student.png" alt="student" />
            <h6>새싹에서 꿈을 펼칠</h6>
            <h3>수강생 회원</h3>
            <Link to="/user/join?type=student">
              <button>회원가입</button>
            </Link>
          </div>
          <div>
            <img src="/img/register/teacher.png" alt="student" />
            <h6>새싹에서 꿈을 펼칠</h6>
            <h3>선생님 회원</h3>
            <Link to="/user/join?type=teacher">
              <button>회원가입</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
