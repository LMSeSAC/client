import { clickT } from "../../../../types/ClassroomT";
import { cancle, post } from "../../../../utils/alert";
import Input from "./Input";
import Button from "./Button";
import "./QuestionForm.scss";

export default function QuestionForm({ onClick }: clickT) {
  const goBack = () => {
    onClick("question");
  };
  return (
    <>
      <div className="question-form">
        <form>
          <Input label="제목" />
          <Input label="해시태그" />
          <div className="d-flex">
            <div className="text">
              <div className="d-flex imgs">
                <div className="img"></div>
              </div>
            </div>
          </div>
          <div>
            <input type="file" />
          </div>
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
