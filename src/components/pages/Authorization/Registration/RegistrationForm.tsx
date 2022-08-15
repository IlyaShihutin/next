import React, { useState } from "react";
import { newUser } from "../../../../types/User.interface";
import Button from "../../../containers/Forms/Button/Button";
import Input from "../../../containers/Forms/Input/Input";

import "./style.scss";

const RegistrationForm: React.FC = () => {
  const [newUser, setNewUser] = useState<newUser>({});
  console.log("asd");

  const changeFirstName = (value: string | "") => {
    setNewUser({ ...newUser, firstName: value });
  };

  const changeLastName = (value: string | "") => {
    setNewUser({ ...newUser, lastName: value });
  };

  const changeEmail = (value: string | "") => {
    setNewUser({ ...newUser, email: value });
  };

  const changePassword = (value: string | "") => {
    setNewUser({ ...newUser, password: value });
  };
  const changeSecondPassword = (value: string | "") => {
    setNewUser({ ...newUser, secondPassword: value });
  };

  const chackPassword = () => {
    if (newUser.secondPassword) {
      return newUser.password === newUser.secondPassword;
    }
  };

  return (
    <div className="registration_form">
      <div className="name">
        <p className="name_title">Name</p>
        <div className="name_entry">
          <div className="name_entry__item">
            <p>First name</p>
            <Input
              type="text"
              placeholder="First name"
              value={newUser.firstName || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFirstName(e.target.value)}
              required
            />
          </div>
          <div className="name_entry__item">
            <p> Last name</p>
            <Input
              type="text"
              placeholder="Last name"
              value={newUser.lastName || ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeLastName(e.target.value)}
              required
            />
          </div>
        </div>
      </div>
      <div className="email">
        <p className="email_title">Email</p>
        <Input
          type="email"
          placeholder="Email"
          value={newUser.email || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeEmail(e.target.value)}
          required
        />
      </div>
      <div className="password">
        <p className="password_title">Password</p>
        <Input
          type="password"
          placeholder="Password..."
          value={newUser.password || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changePassword(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Repeat Password..."
          value={newUser.secondPassword || ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeSecondPassword(e.target.value)}
          error={chackPassword()}
          required
        />
      </div>
      <div className="privacy">
        <input type={"checkbox"}></input>
        <p>
          By creating an account you agree to Next Street's <span>Terms of Use</span>
          <br /> and <span>Privacy of Policy</span>
        </p>
      </div>
      <div className="icon" style={{ background: `url('../../../../assets/icons/arrowRightCircle.svg') 0 0 / contain no-repeat` }}></div>
      <Button
        type={"btn"}
        rightIcon={"../../../../assets/icons/arrowRightCircle.svg"}
        width={"278px"}
        style={"filled"}
        to="/auth"
        value="Create account and continue"
        size={"large"}
      />
    </div>
  );
};

export default RegistrationForm;
