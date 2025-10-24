import React, { useState } from "react";
import { StyledNotifications } from "./Settings.styles";
import pushIcon from "@/assets/images/push-icon.svg";
import emailIcon from "@/assets/images/email-icon.svg";
import promotionIcon from "@/assets/images/promotion-icon-white.svg";
import newsLetterIcon from "@/assets/images/news-letter-icon.svg";
import activityIcon from "@/assets/images/activity-icon.svg";
import Image from "next/image";
import Switch from "../molecules/Switch";

const colData = [
  {
    icon: pushIcon,
    heading: "Push Notifications:",
    text: "Manage real time INTD$’s notifications.",
  },
  {
    icon: emailIcon,
    heading: "Email Notification:",
    text: "Manage your email notifications for INTD$’s updates.",
  },
  {
    icon: promotionIcon,
    heading: "Promotional Updates:",
    text: "Receive promotional updates for INTD$ app.",
  },
  {
    icon: newsLetterIcon,
    heading: "Newsletter Subscriptions:",
    text: "Mange news letter updates fo INTD$.",
  },
  {
    icon: activityIcon,
    heading: "Account Activity Alerts:",
    text: "Control Your Account Activity.",
  },
];

const Notifications = () => {
  const [isSwitch, setIsSwitch] = useState(colData?.map(() => false));

  function handleSwitchChange(index) {
    setIsSwitch((prev) => prev.map((item, i) => (i === index ? !item : item)));
  }

  return (
    <StyledNotifications>
      <div className="head">
        <span className="heading">Notification Settings!</span>
        <p className="text">You can manage your app notifications here.</p>
      </div>
      {colData?.map((item, index) => (
        <div className="col" key={index}>
          <span className="heading">{item.heading}</span>
          <div className="col-content">
            <Image src={item.icon} alt={item.heading} />
            <p className="text">{item.text}</p>
            <Switch
              name={item?.heading}
              value={isSwitch[index]}
              onChange={() => handleSwitchChange(index)}
            />
          </div>
        </div>
      ))}
    </StyledNotifications>
  );
};

export default Notifications;
