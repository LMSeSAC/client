import "./Button.scss";

interface ButtonType {
  btnName: string;
  f: () => void;
}

export default function Button({ btnName, f }: ButtonType) {
  return (
    <>
      <div className="form-button">
        <button type="button" onClick={f}>
          {btnName}
        </button>
      </div>
    </>
  );
}
