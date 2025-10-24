import React, { useState } from "react";
import { StyledSideBar } from "./Settings.styles";
import questionIcon from "@/assets/images/question-icon.svg";
import personIcon from "@/assets/images/person-icon.svg";
import notificationIcon from "@/assets/images/notification-icon.svg";
import deleteIcon from "@/assets/images/delete-icon.svg";
import arrowIcon from "@/assets/images/arrow-dark.svg";
import Image from "next/image";
import { useRouter } from "next/router";

const tabs = [
  { label: "Account Preferences", icon: personIcon },
  { label: "Notification Setting", icon: notificationIcon },
  { label: "Account Deactivation", icon: deleteIcon },
];

const SideBar = ({ tab, setTab }) => {
  const router = useRouter();
  return (
    <StyledSideBar>
      <span className="menu">Menu:</span>
      <div className="nav-holder">
        <ul>
          {tabs?.map((item, index) => (
            <li
              key={index}
              className={tab === index && "active"}
              onClick={() => setTab(index)}>
              <Image src={item?.icon} alt="personIcon" />
              {item?.label}
            </li>
          ))}
          <div className="get-help">
            <Image src={questionIcon} alt="questionIcon" />
            <div>
              <span className="heading">Get Help!</span>
              <span className="text">facing issues? we’re here to help...</span>
            </div>
            <Image src={arrowIcon} alt="arrowIcon" />
          </div>
        </ul>
      </div>
      <div className="get-help" onClick={() => router.push("/get-help")}>
        <Image src={questionIcon} alt="questionIcon" />
        <div>
          <span className="heading">Get Help!</span>
          <span className="text">facing issues? we’re here to help...</span>
        </div>
        <Image src={arrowIcon} alt="arrowIcon" />
      </div>
    </StyledSideBar>
  );
};

export default SideBar;
