import React, { useState } from "react";
import { entryLogin } from "../../../../types/User.interface";
import Button from "../../../containers/Forms/Button/Button";
import Input from "../../../containers/Forms/Input/Input";
import LinkText from "../../../containers/Forms/LinkText/LinkText";
import "./style.scss";

const LoginPage: React.FC = () => {
  const [login, setLogin] = useState<entryLogin>({});

  const entryEmail = (value: string | "") => {
    setLogin({ ...login, email: value });
  };

  const entryPassword = (value: string | "") => {
    setLogin({ ...login, password: value });
  };

  return (
    <div className="login_page">
      <div className="title">
        <p>Welcome Back</p>
        <p>Login to acces your account</p>
      </div>
      <div className="entry">
        <div className="entry_item">
          {" "}
          <p className="title">Email</p>
          <Input
            type="email"
            placeholder="Like john@example.com"
            value={login.email || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => entryEmail(e.target.value)}
            required
          />
        </div>
        <div className="entry_item">
          {" "}
          <p className="title">Password</p>
          <Input
            type="password"
            placeholder="Password..."
            value={login.password || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => entryPassword(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="login_page__btn">
        <Button
          type={"btn"}
          rightIcon={"../../../../assets/icons/arrowRightCircle.svg"}
          width={"104px"}
          style={"filled"}
          to="/auth"
          value="Login"
          disabled={!!login.email && !!login.password}
          size={"large"}
        />
        <LinkText value="Forgot password?" to="/auth/resetPassword" />
      </div>
    </div>
  );
};

export default LoginPage;
