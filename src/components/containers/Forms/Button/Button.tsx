import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
//text email password number search tel url

type Props = {
  type: "btn" | "link";
  style: "filled" | "filled-gray" | "text";
  disabled?: boolean;
  value: string;
  onClick?: Function;
  width?: string;
  error?: boolean;
  to?: string;
  leftIcon?: string;
  rightIcon?: string;
  size: "small" | "medium" | "large";
};
const Button: React.FC<Props> = ({ type, style, to, disabled, value, onClick, width, error, leftIcon, rightIcon, size }) => {
  const selectStyle = (): string => {
    switch (style) {
      case "filled":
        return "filled";
      case "text":
        return "text";
      case "filled-gray":
        return "filled-gray";
      default:
        return "";
    }
  };
  const selectSize = (): string => {
    switch (size) {
      case "small":
        return "small";
      case "medium":
        return "medium";
      case "large":
        return "large";
      default:
        return "";
    }
  };

  const selectType = (): JSX.Element => {
    switch (type) {
      case "btn":
        return (
          <button
            className={selectStyle()}
            disabled={disabled}
            value={value}
            onClick={(e) => onClick && onClick(e)} //!!!!!!!!!!!!!!!!!!!!!
            style={{ width: width || "100% " }}
          >
            {value}
            {leftIcon && <div className="icon_left" style={{ background: `url(${leftIcon}) 0 0 / contain no-repeat` }}></div>}

            {rightIcon && <div className="icon_right" style={{ background: `url(${rightIcon}) 0 0 / contain no-repeat` }}></div>}
          </button>
        );
      case "link":
        return (
          <Link className={selectStyle()} to={to || ""}>
            {value}
          </Link>
        );
      default:
        return <></>;
    }
  };

  return (
    <div className={`button_wrapper ${error ? "error" : ""} ${selectSize()} ${rightIcon || leftIcon ? "icon" : ""}`}>{selectType()}</div>
  );
};

export default Button;
