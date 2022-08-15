import React, { useState } from "react";
import Button from "../../../containers/Forms/Button/Button";
import Input from "../../../containers/Forms/Input/Input";
import LinkText from "../../../containers/Forms/LinkText/LinkText";
import "./style.scss";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  const entryEmail = (value: string | "") => {
    setEmail(value);
  };

  return (
    <div className="reset_password__page">
      <div className="title">
        <p>Reset password</p>
        <p>Enter the email associated with your account and we’ll send an email with instructions to reset your password.</p>
      </div>
      <div className="entry">
        <div className="entry_item">
          {" "}
          <p className="title">Email</p>
          <Input
            type="email"
            placeholder="Like john@example.com"
            value={email || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => entryEmail(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="reset_password__page__btn">
        <Button
          type={"link"}
          rightIcon={"../../../../assets/icons/arrowRightCircle.svg"}
          width={"194px"}
          style={"filled"}
          to="/auth/sendInstructions"
          value="Send Instructions"
          disabled={!!email}
          size={"large"}
        />
        <LinkText value="Cancel" to="/auth/login" />
      </div>
    </div>
  );
};

export default ResetPassword;
