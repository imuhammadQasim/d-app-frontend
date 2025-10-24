import React from 'react';

import { StyledFakeLabel, RequiredAsterisk } from './FakeLabel.styles';

function FakeLabel({ children, required, labelIcon, ...props }) {
  return (
    <>
      <StyledFakeLabel {...props}>
        {required ? <RequiredAsterisk></RequiredAsterisk> : ""}
        {children}
        {labelIcon ?? null}
      </StyledFakeLabel>
    </>
  );
}

export default FakeLabel;
