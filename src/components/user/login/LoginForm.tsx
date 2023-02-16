import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "./Input";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.scss";

export default function LoginForm() {
  const login = () => {};
  return (
    <>
      <div className="login-form d-flex">
        <div className="box">
          <Link to="/">
            <img src="/img/main/logo.png" alt="logo" />
          </Link>
          <form>
            <Input iType="text" icon={faUser} />
            <Input iType="password" icon={faLock} />
            <Button btnName="로그인" f={login} />
            <div className="sns d-flex">
              <img src="/img/register/google.png" alt="google" />
              <img src="/img/register/kakao.png" alt="kakao" />
              <img src="/img/register/naver.png" alt="naver" />
            </div>
          </form>
          <div className="menu">
            <Link to="/user/join">
              <span>회원가입</span>
            </Link>
            <span> | </span>
            <Link to="/user/join">
              <span>아이디 찾기</span>
            </Link>
            <span> | </span>
            <Link to="/user/join">
              <span>비밀번호 찾기</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
