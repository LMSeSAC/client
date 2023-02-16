import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Input from "./Input";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import "./LoginForm.scss";

export default function LoginForm() {
  const form = useRef<HTMLFormElement>(null);
  const [formValue, setFormValue] = useState({ id: "", password: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const login = () => {
    const result = form.current?.checkValidity();

    if (!result) {
      form.current?.reportValidity();
      return;
    }

    fetch("http://localhost:8000/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formValue,
      }),
    }).then((res) => {
      console.log(res);
    });
  };

  return (
    <>
      <div className="login-form d-flex">
        <div className="box">
          <Link to="/">
            <img src="/img/main/logo.png" alt="logo" />
          </Link>
          <form ref={form}>
            <Input iType="text" name="id" icon={faUser} onChange={onChange} />
            <Input
              iType="password"
              name="password"
              icon={faLock}
              onChange={onChange}
            />
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
