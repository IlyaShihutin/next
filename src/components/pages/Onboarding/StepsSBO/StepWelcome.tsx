import React, { useState } from "react";
import { entryName } from "../../../../types/AuthSteps.interface";
import { welcomeList } from "../../../../_constants/onboarding";
import Button from "../../../containers/Forms/Button/Button";
import Input from "../../../containers/Forms/Input/Input";

import "./style.scss";

const StepWelcome: React.FC = () => {
  const [name, setName] = useState<entryName>({});

  return (
    <div className="onboarding_steps__welcome">
      <div className="palm"></div>
      <div className="title">
        Hey <span>Peter</span>!
      </div>
      <div className="text">
        We are inviting you to Next Street as an advisor. <br />
        Want to set up your profile now? It’s super quick, all we need is your:
      </div>
      <div className="list">
        {welcomeList.map((elem: string, key: number) => (
          <div className="list_item" key={key}>
            <div className="list_item__icon"></div>
            <div className="list_item__text">{elem}</div>
          </div>
        ))}
      </div>
      <Button
        type={"link"}
        rightIcon={"../../../../assets/icons/arrowRightCircle.svg"}
        style={"filled"}
        to="/onboarding/name"
        value="Create my profile"
        size={"large"}
      />
    </div>
  );
};

export default StepWelcome;
