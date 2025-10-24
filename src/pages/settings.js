import { StyledSettings } from "@/components/Settings/Settings.styles";
import SideBar from "@/components/Settings/SideBar";
import gif from "@/assets/images/settings-gif.gif";
import React, { useState } from "react";
import Image from "next/image";
import Preference from "@/components/Settings/Preference";
import Notifications from "@/components/Settings/Notifications";
import AccountDeActive from "@/components/Settings/AccountDeActive";

const settings = () => {
  const [tab, setTab] = useState(0);
  return (
    <StyledSettings>
      <div className="settings-head">
        <Image src={gif} alt="gif" />
        <h1>Settings</h1>
      </div>
      <div className="content-holder">
        <div className="sidebar-holder">
          <SideBar tab={tab} setTab={setTab} />
        </div>
        <div className="content">
          {tab === 0 && <Preference />}
          {tab === 1 && <Notifications />}
          {tab === 2 && <AccountDeActive />}
        </div>
      </div>
    </StyledSettings>
  );
};

export default settings;
