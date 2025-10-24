/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React, { useRef } from "react";
// eslint-disable-next-line no-unused-vars
import Styled from "styled-components";
import useForm from "./useForm";
import FieldContext from "./FieldContext";

export default React.forwardRef((props, ref) => {
  const {
    form,
    children,
    initialValues,
    onSubmit,
    onError,
    onTouched,
    ...restProps
  } = props;
  const [formInstance] = useForm(form);

  const { setInitialValues, setCallbacks } = formInstance.getInternalHooks();

  React.useImperativeHandle(ref, () => formInstance);

  const mountRef = useRef(null);
  setInitialValues(initialValues, !mountRef.current);
  if (!mountRef.current) {
    mountRef.current = true;
  }

  setCallbacks({
    onSubmit,
    onError,
    onTouched,
  });

  return (
    <form
      {...restProps}
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        formInstance.submit();
      }}
    >
      <FieldContext.Provider value={formInstance}>
        {children}
      </FieldContext.Provider>
    </form>
  );
});
