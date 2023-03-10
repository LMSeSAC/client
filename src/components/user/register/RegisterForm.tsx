import React, { useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { emailCheck, phoneCheck, passwordCheck } from "./CheckValidity";
import Button from "../Button";
import Input from "./Input";
import "./RegisterForm.scss";

export default function RegisterForm() {
  const [searchParams] = useSearchParams();
  const [formValue, setFormValue] = useState({
    name: "",
    id: "",
    pw: "",
    pw2: "",
    email: "",
    phone: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const pwValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const warning = document.querySelector(".pw") as HTMLElement;
    const lock = e.target.nextSibling as HTMLElement;

    if (!passwordCheck(e.target.value)) {
      warning.innerText = "8~16자 영문 대 소문자, 숫자, 특수문자를 사용하세요.";
      if (lock) lock.style.color = "red";
    } else {
      warning.innerText = "";
      if (lock) lock.style.color = "var(--color-green)";
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };

  const pwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lock = e.target.nextSibling as HTMLElement;
    if (formValue.pw === e.target.value) {
      if (lock) lock.style.color = "var(--color-green)";
    } else {
      if (lock) lock.style.color = "red";
    }
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const register = () => {
    if (formValue.pw !== formValue.pw2) return;
    if (!passwordCheck(formValue.pw)) return;
    if (!phoneCheck(formValue.phone)) return;
    if (!emailCheck(formValue.email)) return;
  };

  return (
    <>
      <div className="register-form">
        <Link to="/">
          <img src="/img/main/logo.png" alt="logo" />
        </Link>
        <h3>
          <span>
            {searchParams.get("type") === "student" ? "수강생 " : "선생님 "}
          </span>
          회원가입에 오신 것을 환영합니다!
        </h3>
        <form>
          <Input title="이름" name="name" iType="text" f={onChange} />
          <Input title="아이디" name="id" iType="text" f={onChange} />
          <Input title="비밀번호" name="pw" iType="password" f={pwValidation} />
          <p className="warning pw"></p>
          <Input
            title="비밀번호 확인"
            name="pw2"
            iType="password"
            f={pwCheck}
          />
          <Input title="이메일" name="email" iType="email" f={onChange} />
          <Input
            title="휴대전화 (000-0000-0000)"
            name="phone"
            iType="tel"
            f={onChange}
          />
          <div className="register-btn">
            <Button btnName="회원가입" f={register} />
          </div>
        </form>
      </div>
    </>
  );
}
