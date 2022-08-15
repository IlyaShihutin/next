import React from "react";
import { titleList } from "../../../../_constants/authorizationConstants";
import Button from "../../../containers/Forms/Button/Button";
import LinkText from "../../../containers/Forms/LinkText/LinkText";

import "./style.scss";

const RegistrationLogin: React.FC = () => {
  return (
    <div className="registration_login">
      <div className="palm"></div>
      <div className="title">Hey There!</div>
      <div className="text">
        You were invited to <span>[Org Name]</span> as an advisor
        <br />
        by <span>[Admin Name]</span>. Want to set up your profile now? It’s super quick, all we need is your:
      </div>
      <div className="list">
        {titleList.map((elem, index) => (
          <div className="list_item" key={index}>
            <div className="mark"></div>
            <div className="text">{elem}</div>
          </div>
        ))}
      </div>
      <div className="login">
        <p>Already have an account?</p>
        <LinkText value="Login" to="./login" />
      </div>
    </div>
  );
};

export default RegistrationLogin;
