/* eslint-disable react/display-name */
import React, { forwardRef } from 'react';

import { StyledTextarea, StyledInput } from './Input.styles';

const Input = forwardRef(({ ...props }, ref) => {
  const { type } = props;
  if (type === 'textarea') {
    return <StyledTextarea {...props} ref={ref} />;
  }
  return <StyledInput {...props} ref={ref} />;
});

export default Input;
