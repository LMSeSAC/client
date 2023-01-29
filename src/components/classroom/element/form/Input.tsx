interface InputT {
  label: string;
}

export default function Input({ label }: InputT) {
  return (
    <>
      <div className="d-flex">
        <span>{label}</span>
        <input type="text" />
      </div>
    </>
  );
}
