import { useSearchParams } from "react-router-dom";
import Button from "../Button";
import Input from "./Input";
import "./RegisterForm.scss";

export default function RegisterForm() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <div className="register-form">
        <a href="/">
          <img src="/img/main/logo.png" alt="logo" />
        </a>
        <h3>
          <span>
            {searchParams.get("type") === "student" ? "수강생 " : "선생님 "}
          </span>
          회원가입에 오신 것을 환영합니다!
        </h3>
        <form>
          <Input title="이름" iType="text" />
          <Input title="아이디" iType="text" />
          <Input title="비밀번호" iType="password" />
          <Input title="비밀번호 확인" iType="password" />
          <Input title="이메일" iType="email" />
          <Input title="휴대전화" iType="tel" />
          <Button btnName="회원가입" />
        </form>
      </div>
    </>
  );
}
