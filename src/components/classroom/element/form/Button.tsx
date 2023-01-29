import "./Button.scss";

interface ButtonT {
  name: string;
}

export default function Button({ name }: ButtonT) {
  return (
    <>
      <button>{name}</button>
    </>
  );
}
