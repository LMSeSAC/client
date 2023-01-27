import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";
import Input from "./Input";
import "./LoginForm.scss";

export default function LoginForm() {
  const login = () => {};
  return (
    <>
      <div className="login-form d-flex">
        <div className="box">
          <a href="/">
            <img src="/img/main/logo.png" alt="logo" />
          </a>
          <form>
            <Input iType="text" icon={faUser} />
            <Input iType="password" icon={faLock} />
            <Button btnName="로그인" f={login} />
          </form>
          <div className="menu">
            <a href="/user/join">
              <span>회원가입</span>
            </a>
            <span> | </span>
            <a href="/user/join">
              <span>아이디 찾기</span>
            </a>
            <span> | </span>
            <a href="/user/join">
              <span>비밀번호 찾기</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
