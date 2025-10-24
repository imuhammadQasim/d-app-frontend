import React, { useState } from "react";
import walletIcon from "@/assets/images/wallet-icon.svg";
import arrow from "@/assets/images/down-arrow.svg";
import { StyledCheckingDropdown } from "./CheckingDropdown.styles";
import Image from "next/image";

const CheckingDropdown = ({ arr, image, radius }) => {
  const [userDropDown, setUserDropDown] = useState(false);
  const [activeItem, setActiveItem] = useState(arr?.[0]?.label || "");
  const [activeIcon, setActiveIcon] = useState(arr?.[0]?.icon || "");

  const handleItemClick = (item) => {
    setActiveItem(item.label);
    setActiveIcon(item.icon);
    setUserDropDown(false);
  };
  return (
    <StyledCheckingDropdown
      className={userDropDown ? "checking active" : "checking"}
      onClick={() => setUserDropDown(!userDropDown)}
      $radius={radius}>
      {image ? (
        <Image src={image} alt="walletIcon" className="icon" />
      ) : (
        <Image src={activeIcon} alt="walletIcon" className="icon" />
      )}
      <span>{activeItem}</span>
      <Image src={arrow} alt="arrow" className="arrow" />
      <div className="dropdown">
        {arr?.map((item, index) => (
          <div
            key={index}
            className={`dropdown-item ${activeItem === item.label && "active"}`}
            onClick={() => handleItemClick(item)}>
            <div className="label-holder">
              {item?.icon && (
                <Image src={item.icon} alt={item.label} className="icon" />
              )}
              <span>{item.label}</span>
            </div>
            {item?.price && (
              <div>
                <span className="text">INTD$</span>
                <span className="text">${item?.price}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </StyledCheckingDropdown>
  );
};

export default CheckingDropdown;
