import Home from "./content/Home";
import Material from "./content/Material";
import Notice from "./content/Notice";
import Question from "./content/Question";
import Students from "./content/Students";
import PostQuestion from "./content/PostQuestion";
import "./Window.scss";
import "./element/Table.scss";

interface contentT {
  content: string;
  onClick: (content: string) => void;
}

export default function Window({ content, onClick }: contentT) {
  return (
    <>
      <div className="screen">
        {content === "home" && <Home />}
        {content === "notice" && <Notice onClick={onClick} />}
        {content === "material" && <Material />}
        {content === "question" && <Question onClick={onClick} />}
        {content === "students" && <Students />}
        {content === "q-form" && <PostQuestion onClick={onClick} />}
      </div>
    </>
  );
}
