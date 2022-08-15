import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";
//text email password number search tel url

type Props = {
  value: string;
  width?: string;
  error?: boolean;
  to?: string;
};
const LinkText: React.FC<Props> = ({ to, value, width, error }) => {
  return (
    <div className={`link_wrapper `}>
      {" "}
      <Link to={to || ""}>{value}</Link>
    </div>
  );
};

export default LinkText;
