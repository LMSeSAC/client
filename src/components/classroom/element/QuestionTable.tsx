import { clickT } from "../../../types/ClassroomT";
import WriteBtn from "./WriteBtn";

export default function QuestionTable({ onClick }: clickT) {
  return (
    <>
      <div className="q-table">
        <table>
          <tbody>
            <tr>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
            </tr>
            <tr>
              <th>깃 푸쉬가 안됩니다ㅜㅜ</th>
              <th>김세령</th>
              <th>2023-01-29</th>
            </tr>
          </tbody>
        </table>
        <div onClick={() => onClick("q-form")}>
          <WriteBtn />
        </div>
      </div>
    </>
  );
}
