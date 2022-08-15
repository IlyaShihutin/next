import React, { useState } from "react";
import Button from "../../../containers/Forms/Button/Button";
import Input from "../../../containers/Forms/Input/Input";
import LinkText from "../../../containers/Forms/LinkText/LinkText";
import "./style.scss";

const SendInstructions: React.FC = () => {
  return (
    <div className="send_instuctions__page">
      <div className="plane"></div>
      <div className="title">
        <p>Check your email!</p>
        <p>We have sent password recover instructions to your email.</p>
      </div>
      <div className="send_instuctions__page__btn">
        <Button
          type={"link"}
          rightIcon={"../../../../assets/icons/arrowRightCircle.svg"}
          width={"327px"}
          style={"filled"}
          to="/auth"
          value="Thanks, take me to the login screen"
          size={"large"}
        />
        <LinkText value="I didn’t receive the email" to="./login" />
      </div>
    </div>
  );
};

export default SendInstructions;
