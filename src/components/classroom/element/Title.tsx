import "./Title.scss";

interface TitleT {
  title: string;
}

export default function Title({ title }: TitleT) {
  return (
    <>
      <h2 className="title">{title}</h2>
    </>
  );
}
