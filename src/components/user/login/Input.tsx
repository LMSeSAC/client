import "./Input.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface InputType {
  name: string;
  iType: string;
  icon: IconProp;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, iType, icon, onChange }: InputType) {
  return (
    <>
      <div className="form-input d-flex">
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <input type={iType} name={name} onChange={onChange} required />
      </div>
    </>
  );
}
