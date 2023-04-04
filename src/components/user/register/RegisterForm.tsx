import React, { useRef, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { emailCheck, phoneCheck, passwordCheck } from "./CheckValidity";
import Button from "../Button";
import Input from "./Input";
import "./RegisterForm.scss";
import { RESTAPIBuilder } from "../../../utils/RestApiBuilder";
import { error, success } from "../../../utils/message";

export default function RegisterForm() {
  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);
  const [formValue, setFormValue] = useState({
    name: "",
    userid: "",
    password: "",
    password2: "",
    email: "",
    phone: "",
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const pwValidation = (e: React.ChangeEvent<HTMLInputElement>) => {
    const warning = document.querySelector(".password") as HTMLElement;
    const lock = e.target.nextSibling as HTMLElement;

    if (!passwordCheck(e.target.value)) {
      warning.innerText = "8~16자 영문 대/소문자, 숫자, 특수문자를 사용하세요.";
      if (lock) lock.style.color = "red";
    } else {
      warning.innerText = "";
      if (lock) lock.style.color = "var(--color-green)";
      setFormValue({ ...formValue, [e.target.name]: e.target.value });
    }
  };

  const pwCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lock = e.target.nextSibling as HTMLElement;
    if (formValue.password === e.target.value) {
      if (lock) lock.style.color = "var(--color-green)";
    } else {
      if (lock) lock.style.color = "red";
    }
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const register = () => {
    if (formValue.password !== formValue.password2) return;
    if (!passwordCheck(formValue.password)) return;
    if (!phoneCheck(formValue.phone)) return;
    if (!emailCheck(formValue.email)) return;

    const url = `${process.env.REACT_APP_SERVER_AUTH}/register`
    const data = {
      userid: formValue.userid,
      email: formValue.email,
      name: formValue.name,
      password: formValue.password,
      phone: formValue.phone
    }

    new RESTAPIBuilder(url, "POST").setBody(data).build().run()
    .then((res) => {
      success(res.name + "님 환영합니다.", () => {
        window.location.href = "/user/login";
      })
    }).catch((err) => {
      console.log( "err : ", err )
      error('오류', '회원가입에 실패하셨습니다. 다시 시도해주세요.')
      formRef.current?.reset();
    })
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
        <form ref={formRef}>
          <Input title="이름" name="name" iType="text" f={onChange} />
          <Input title="아이디" name="userid" iType="text" f={onChange} />
          <Input title="비밀번호" name="password" iType="password" f={pwValidation} />
          <p className="warning password"></p>
          <Input
            title="비밀번호 확인"
            name="password2"
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
