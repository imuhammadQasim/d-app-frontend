// index.js or LoginTemplate.jsx

import React from "react";
import { StyledLoginTemplate } from "./LoginTemplate.styles";
import loginImg from "@/assets/images/login-img.png";
import logo from "@/assets/images/logo.svg";
import Image from "next/image";

const LoginTemplate = ({
  children,
  hideLogo = false,
  hideImageHolder = false,
}) => {
  return (
    <StyledLoginTemplate>
      <div className="form-section">
        <div className="form-holder">
          {!hideLogo && (
            <figure className="logo-holder">
              <Image src={logo} alt="logo" />
            </figure>
          )}
          {children}
        </div>
      </div>

      {!hideImageHolder && (
        <figure className="img-holder">
          <Image src={loginImg} alt="loginImg" />
        </figure>
      )}
    </StyledLoginTemplate>
  );
};

export default LoginTemplate;
