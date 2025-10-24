/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from "react";
// eslint-disable-next-line no-unused-vars

import { StyledLabel, RequiredAsterisk } from "./Label.styles";

function Label({
  children,
  onlyRead,
  required,
  labelIcon,
  clear,
  labelReverse,
  noLabelMargin,
  onClear = () => {},
  ...props
}) {
  return (
    <>
      <StyledLabel
        $onlyRead={onlyRead}
        labelIcon={labelIcon}
        $labelReverse={labelReverse}
        $noLabelMargin={noLabelMargin}
        {...props}>
        <div css="display: flex; justify-content: space-between;">
          <div css="display: flex; align-items: center;" className="label">
            {children}
            {required ? <RequiredAsterisk>*</RequiredAsterisk> : ""}
          </div>
          {clear && (
            <span
              css="color: var(--danger); cursor: pointer;"
              onClick={onClear}>
              Clear
            </span>
          )}
        </div>
        {labelIcon && <span css="margin-left: 5px;">{labelIcon}</span>}
      </StyledLabel>
    </>
  );
}

export default Label;
