import "./Input.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface InputType {
  iType: string;
  icon: IconProp;
}

export default function Input({ iType, icon }: InputType) {
  return (
    <>
      <div className="form-input d-flex">
        <span>
          <FontAwesomeIcon icon={icon} />
        </span>
        <input type={iType} />
      </div>
    </>
  );
}
