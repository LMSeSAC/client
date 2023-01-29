import { clickT } from "../../../types/ClassroomT";
import QuestionTable from "../element/QuestionTable";
import Title from "../element/Title";

export default function Question({ onClick }: clickT) {
  return (
    <>
      <Title title="질문 게시판" />
      <QuestionTable onClick={onClick} />
    </>
  );
}
