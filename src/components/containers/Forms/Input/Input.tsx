import React, { useRef, useState } from "react";

import "./style.scss";
//text email password number search tel url

type Props = {
  type: string;
  autocomplete?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  placeholder: string;
  readonly?: boolean;
  required?: boolean;
  value: string;
  onChange: Function;
  width?: string;
  error?: boolean;
};
const Input: React.FC<Props> = ({
  type,
  autocomplete,
  disabled,
  maxLength,
  minLength,
  placeholder,
  readonly,
  required,
  value,
  onChange,
  width,
  error,
}) => {
  const [inputType, setInputType] = useState<string>(type);
  const [focus, setFocus] = useState<boolean>(false);
  const setPasswordVisible = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <div className={`entry_field ${error ? "error" : ""} ${focus ? "focus" : ""}`} style={{ width: width || "100% " }}>
      <input
        type={inputType}
        autoComplete={autocomplete ? "on" : "off"}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        value={value}
        onChange={(e) => onChange(e)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      ></input>{" "}
      {type === "password" && <div className="eye" onClick={() => setPasswordVisible()}></div>}
    </div>
  );
};

export default Input;
