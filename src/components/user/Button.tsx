import "./Button.scss";

interface ButtonType {
  btnName: string;
}

export default function Button({ btnName }: ButtonType) {
  return (
    <>
      <div className="form-button">
        <button type="button">{btnName}</button>
      </div>
    </>
  );
}
