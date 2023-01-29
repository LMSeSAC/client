import "./Button.scss";

interface ButtonT {
  name: string;
  onClick: () => void;
}

export default function Button({ name, onClick }: ButtonT) {
  return (
    <>
      <button className="form-btn" type="button" onClick={onClick}>
        {name}
      </button>
    </>
  );
}
