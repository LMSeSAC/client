import React, { KeyboardEvent, useRef } from "react";
import { clickT } from "../../../../types/ClassroomT";
import { cancle, post } from "../../../../utils/alert";
import Input from "./Input";
import Button from "./Button";
import Textbox from "../../../utils/Textbox";
import "./QuestionForm.scss";

export default function QuestionForm({ onClick }: clickT) {
  const tag_box = useRef<HTMLDivElement>(null);

  const enterHashTag = (e: KeyboardEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;
    if (e.key === "Enter") {
      if (!input.value.startsWith("#")) return;
      const div = document.createElement("div");
      div.classList.add("d-flex");
      div.addEventListener("click", deleteTag as EventListener);
      const span = document.createElement("span");
      span.textContent = input.value;
      const closeBtn = document.createElement("span");
      closeBtn.textContent = "x";
      div.appendChild(span);
      div.appendChild(closeBtn);
      tag_box.current?.appendChild(div);
      input.value = "";
    }
  };

  const deleteTag = (e: CustomEvent<MouseEvent>) => {
    const tag = e.target as HTMLElement;
    tag.remove();
  };

  const goBack = () => {
    onClick("question");
  };

  return (
    <>
      <div className="question-form">
        <form>
          <Input label="제목" name="title" />
          <Input label="해시태그" name="hashtag" onKeyDown={enterHashTag} />
          <div className="tag-box" ref={tag_box}></div>
          <Textbox />
          <div className="btns">
            <Button
              name="취소"
              onClick={() => {
                cancle(goBack);
              }}
            />
            <Button
              name="작성"
              onClick={() => {
                post(goBack);
              }}
            />
          </div>
        </form>
      </div>
    </>
  );
}
