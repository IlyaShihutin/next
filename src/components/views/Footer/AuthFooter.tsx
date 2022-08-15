import React from "react";
import Button from "../../containers/Forms/Button/Button";
import LinkText from "../../containers/Forms/LinkText/LinkText";

import "./style.scss";

const AuthFooter: React.FC = () => {
  return (
    <div className="footer_auth">
      <Button
        type={"link"}
        leftIcon={"../../../../assets/icons/arrowRightCircle.svg"}
        width={"99px"}
        style={"filled-gray"}
        to="/auth"
        value="Back"
        size={"large"}
      />

      <div className="btn_next">
        <LinkText value="Skip for now" to="./login" />
        <Button
          type={"link"}
          rightIcon={"../../../../assets/icons/arrowRightCircle.svg"}
          width={"99px"}
          style={"filled"}
          to="/auth"
          value="Next"
          size={"large"}
        />
      </div>
    </div>
  );
};

export default AuthFooter;
