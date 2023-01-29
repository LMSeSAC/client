import { clickT } from "../../../types/ClassroomT";
import NoticeTable from "../element/NoticeTable";
import Title from "../element/Title";

export default function Notice({ onClick }: clickT) {
  return (
    <>
      <Title title="공지사항" />
      <NoticeTable onClick={onClick} />
    </>
  );
}
