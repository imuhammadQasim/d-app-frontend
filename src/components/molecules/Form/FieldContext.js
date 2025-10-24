import * as React from 'react';

const fun = () => {};

const Context = React.createContext({
  getFieldValue: fun,
  getFieldError: fun,
  getFieldsValue: fun,
  setFieldsValue: fun,
  registerField: fun,
  submit: fun,
});

export default Context;
