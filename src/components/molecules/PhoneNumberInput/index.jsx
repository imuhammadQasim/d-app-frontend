import React from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { PhoneWrapper } from "./PhoneNumberInput.styles";
import { StyledFormGroup } from "../../../styles/helpers.styles";

const PhoneNumberInput = ({
  onChange,
  value,
  placeholder,
  country,
  defaultCountry = "US",
  bgWhite,
  noFlagWidth,
  error,
  invalid,
  prefix,
  suffix,
  noMargin,
  rounded,
  ...props
}) => {
  return (
    <StyledFormGroup $noMargin={noMargin} $rounded={rounded}>
      <PhoneWrapper {...props} $bgWhite={bgWhite} $noFlagWidth={noFlagWidth}>
        <PhoneInput
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          country={country}
          defaultCountry={defaultCountry}
          maxLength={16}
          international
          invalid={invalid || error}
          {...props}
        />
      </PhoneWrapper>
    </StyledFormGroup>
  );
};

export default PhoneNumberInput;
