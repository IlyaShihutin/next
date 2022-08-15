import React from "react";

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
};
const ChackBox: React.FC<Props> = ({
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
}) => {
  return (
    <div className="entry_field">
      <input
        type={type}
        autoComplete={autocomplete ? "on" : "off"}
        disabled={disabled}
        maxLength={maxLength}
        minLength={minLength}
        placeholder={placeholder}
        readOnly={readonly}
        required={required}
        value={value}
        onChange={(e) => onChange(e)}
        style={{ width: width || "100% " }}
      ></input>
    </div>
  );
};

export default ChackBox;
