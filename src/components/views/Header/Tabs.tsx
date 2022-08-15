import React from "react";
import { headerTabs, headerTabsConstants } from "../../../_constants/tabs";

const Tabs: React.FC = () => {
  return (
    <div className="tabs">
      {headerTabsConstants.map((elem: headerTabs, key: number) => (
        <div className="tabs_item" key={key}>
          <div
            className="tabs_item__icon"
            style={{ background: `url(../../assets/tabs-icons/${elem.icon}) 0 0 / contain no-repeat` }}
          ></div>
          <div className="tabs_item__text">{elem.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Tabs;
