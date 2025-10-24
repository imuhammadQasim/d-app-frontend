import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { IoWarningOutline, IoCheckmarkSharp } from "react-icons/io5";
import { StyledIcon } from "./AlertIcon.styles";

const AlertIcon = ({ $type }) => {
  const iconType = () => {
    switch ($type) {
      case "error":
        return <RxCrossCircled />;
      case "info":
        return <IoMdInformationCircleOutline />;
      case "warning":
        return <IoWarningOutline />;
      case "success":
        return <IoCheckmarkSharp />;
      default:
        return <IoMdInformationCircleOutline />;
    }
  };
  return (
    <StyledIcon $type={$type}>
      <span className="material-icons-outlined">{iconType()}</span>
    </StyledIcon>
  );
};

export default AlertIcon;
