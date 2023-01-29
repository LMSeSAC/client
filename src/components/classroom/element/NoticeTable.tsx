import { clickT } from "../../../types/ClassroomT";
import WriteBtn from "./WriteBtn";

export default function NoticeTable({ onClick }: clickT) {
  return (
    <>
      <div className="notice-table">
        <table>
          <tr>
            <th>No.</th>
            <th>제목</th>
            <th>날짜</th>
          </tr>
          <tr>
            <td>1</td>
            <td>01/28(토) 수업 없습니다</td>
            <td>2023-01-28</td>
          </tr>
          <tr>
            <td>1</td>
            <td>01/28(토) 수업 없습니다</td>
            <td>2023-01-28</td>
          </tr>
          <tr>
            <td>1</td>
            <td>01/28(토) 수업 없습니다</td>
            <td>2023-01-28</td>
          </tr>
        </table>
        <div onClick={() => onClick("form")}>
          <WriteBtn />
        </div>
      </div>
    </>
  );
}
