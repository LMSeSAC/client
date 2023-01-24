import "./Input.scss";

interface InputType {
  title: string;
  iType: string;
}

export default function Input({ title, iType }: InputType) {
  return (
    <>
      <div className="register-input">
        <p>{title}</p>
        <input type={iType}></input>
      </div>
    </>
  );
}
