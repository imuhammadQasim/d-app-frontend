import React from "react";
import { toast } from "react-toastify";
import { StyledAlert, Message } from "./Toast.styles";
import AlertIcon from "../AlertIcon";

function Toast({ type, message, ...props }) {
  return toast(
    <StyledAlert $type={type} {...props}>
      <AlertIcon $type={type} />
      <Message $type={type}>{message}</Message>
    </StyledAlert>,
    {
      hideProgressBar: true,
      autoClose: 2000,
      ...props
    }
  );
}

export default Toast;
