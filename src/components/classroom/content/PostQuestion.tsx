import { clickT } from "../../../types/ClassroomT";
import QuestionForm from "../element/form/QuestionForm";
import Title from "../element/Title";

export default function PostQuestion({ onClick }: clickT) {
  return (
    <>
      <div className="window">
        <Title title="질문하기" />
        <QuestionForm onClick={onClick} />
      </div>
    </>
  );
}
