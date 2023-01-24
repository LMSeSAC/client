import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import "./Input.scss";

interface InputType {
  title: string;
  name: string;
  iType: string;
  f: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ title, name, iType, f }: InputType) {
  return (
    <>
      <div className="register-input">
        <p>{title}</p>
        <input type={iType} name={name} onChange={f}></input>
        {name === "pw" && (
          <span>
            <FontAwesomeIcon icon={faLock} />
          </span>
        )}
        {name === "pw2" && (
          <span>
            <FontAwesomeIcon icon={faLock} />
          </span>
        )}
      </div>
    </>
  );
}
