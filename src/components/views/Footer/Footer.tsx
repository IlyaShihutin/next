import React from "react";
import AuthFooter from "./AuthFooter";

import "./style.scss";

const Footer: React.FC = () => {
  // const firstPageAdvisor = (): JSX.Element => {
  //   return (
  //     <div className="header_wrapper first-page">
  //       <div className="logo"></div>
  //     </div>
  //   );
  // };

  // const createHome = (): JSX.Element => {
  //   return (
  //     <div className="header_wrapper">
  //       <div className="logo"></div>
  //       <Tabs />
  //       <Profile />
  //     </div>
  //   );
  // };

  const renderContent = (): JSX.Element => {
    const type: string = "AUTH";
    switch (type) {
      case "AUTH":
        return <AuthFooter />;
      // case "ADVISOR":
      //   return firstPageAdvisor();
      // case "HOME":
      //   return createHome();
      // default:
      //   return createHome();
      default:
        return <></>;
    }
  };

  return <div className="footer">{renderContent()}</div>;
};

export default Footer;
