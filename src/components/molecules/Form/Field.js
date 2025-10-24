import React, { Component } from 'react';
// eslint-disable-next-line no-unused-vars
import FieldContext from './FieldContext';

export default class Field extends Component {
  // eslint-disable-next-line react/static-property-placement
  static contextType = FieldContext;

  cancelRegisterFunc;

  componentDidMount() {
    const { registerField } = this.context;
    this.cancelRegisterFunc = registerField(this);
  }

  componentWillUnmount() {
    if (this.cancelRegisterFunc) {
      this.cancelRegisterFunc();
    }
  }

  onStoreChange = (prevStore, curStore) => {
    const { shouldUpdate } = this.props;
    if (typeof shouldUpdate === 'function') {
      if (shouldUpdate(prevStore, curStore)) {
        this.forceUpdate();
      }
    } else {
      this.forceUpdate();
    }
  };

  getControlled = () => {
    const { name, children, ...rest } = this.props;
    const { getFieldValue, setFieldsValue, getFieldError } = this.context;
    return {
      error: getFieldError(name) ?? '',
      ...rest,
      value: getFieldValue(name) ?? '',
      onChange: event => {
        let newValue;
        if (event instanceof File) {
          newValue = event;
        } else {
          newValue = event.target.value ?? '';
        }
        setFieldsValue({ [name]: newValue });
      },
    };
  };

  render() {
    const { children, ...rest } = this.props;
    return React.cloneElement(children, { ...this.getControlled(), ...rest });
  }
}
