import React from "react";

import "./style.scss";
import HeaderLoadingLine from "./HeaderLoadingLine";
import Profile from "./Profile";
import Tabs from "./Tabs";

type Props = {
  label: string;
  count: number;
  onIncrement: () => void;
};

const Header: React.FC = () => {
  const createProfile = (): JSX.Element => {
    return (
      <>
        {" "}
        <div className="header_wrapper">
          <div className="logo"></div>
          <div className="percent">{40}%</div>
          <div className="exit">
            <p className="exit_text">Save & Exit</p>
            <div className="exit_icon"></div>
          </div>
        </div>
        <HeaderLoadingLine />
      </>
    );
  };

  const firstPageAdvisor = (): JSX.Element => {
    return (
      <div className="header_wrapper first-page">
        <div className="logo"></div>
      </div>
    );
  };

  const createHome = (): JSX.Element => {
    return (
      <div className="header_wrapper">
        <div className="logo"></div>
        <Tabs />
        <Profile />
      </div>
    );
  };

  const renderContent = (): JSX.Element => {
    const type: string = "HOME";
    switch (type) {
      case "SBO":
        return createProfile();
      case "ADVISOR":
        return firstPageAdvisor();
      case "HOME":
        return createHome();
      default:
        return createHome();
    }
  };

  return <div className="header">{renderContent()}</div>;
};

export default Header;
