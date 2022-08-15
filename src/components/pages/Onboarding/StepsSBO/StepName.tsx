import React, { useState } from "react";
import { entryName } from "../../../../types/AuthSteps.interface";
import Input from "../../../containers/Forms/Input/Input";

import "./style.scss";

const StepName: React.FC = () => {
  const [name, setName] = useState<entryName>({});

  const entryFirstName = (value: string | "") => {
    setName({ ...name, firstName: value });
  };

  const entryLastName = (value: string | "") => {
    setName({ ...name, lastName: value });
  };
  return (
    <div className="onboarding_steps__name">
      <div className="palm"></div>
      <div className="title">
        Let’s Get Started!
        <br />
        What’s Your Name?
      </div>
      <div className="entry">
        <div className="entry_item">
          {" "}
          <p className="text">First name</p>
          <Input
            type="text"
            placeholder="Like John..."
            value={name.firstName || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => entryFirstName(e.target.value)}
            required
          />
        </div>
        <div className="entry_item">
          {" "}
          <p className="text">Last name</p>
          <Input
            type="text"
            placeholder="Like Smith..."
            value={name.lastName || ""}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => entryLastName(e.target.value)}
            required
          />
        </div>
      </div>
    </div>
  );
};

export default StepName;
