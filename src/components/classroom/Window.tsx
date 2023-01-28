import Home from "./content/Home";
import Material from "./content/Material";
import Notice from "./content/Notice";
import Question from "./content/Question";
import Students from "./content/Students";
import "./Window.scss";

interface contentT {
  content: string;
}

export default function Window({ content }: contentT) {
  return (
    <>
      <div className="window">
        {content === "home" && <Home />}
        {content === "notice" && <Notice />}
        {content === "material" && <Material />}
        {content === "question" && <Question />}
        {content === "students" && <Students />}
      </div>
    </>
  );
}
