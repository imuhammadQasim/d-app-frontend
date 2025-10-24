// eslint-disable-next-line no-unused-vars
import styled from "styled-components";
import React from "react";
import { components } from "react-select";

import { debounce } from "lodash";
import { StyledFormGroup } from "../../../styles/helpers.styles";
import { StyledSelect, StyledSelectAsync } from "./Select.styles";
import InputIcon from "../../molecules/InputIcon";
import Label from "../../molecules/Label";
import { IoIosArrowDown } from "react-icons/io";
import { Error, InputHolder } from "../Field/Field.styles";

const DropdownIndicator = (props) =>
  components.DropdownIndicator && (
    <components.DropdownIndicator {...props}>
      <InputIcon $suffix>
        <IoIosArrowDown size={20} />
      </InputIcon>
    </components.DropdownIndicator>
  );

function Select({
  prefix,
  suffix,
  disabled,
  invalid,
  options,
  label,
  noMargin,
  error,
  rules,
  clear,
  async,
  labelIcon,
  width,
  placeholder,
  noPlaceholder,
  ...props
}) {
  const debouncedRef = React.useRef(0);
  const loadOptions = async (__) => {
    const _options = await new Promise((resolve) => {
      debounce((value) => {
        debouncedRef.current += 1;
        const LocalRef = debouncedRef.current;
        setTimeout(() => {
          if (LocalRef === debouncedRef.current) {
            props.loadOptions(value).then((response) => {
              resolve(response);
            });
          }
        }, 300);
      }, 300)(__);
    });
    return _options;
  };
  return (
    <StyledFormGroup
      $width={width}
      $invalid={invalid || error}
      $noMargin={noMargin}
      dir="ltr">
      {label && (
        <Label
          labelIcon={labelIcon}
          onClear={() => {
            props?.onChange?.({
              target: {
                value: options && options[0],
                name: props.name ?? "",
              },
            });
          }}
          required={rules?.filter(({ required }) => required).length}
          clear={clear}>
          {label}
        </Label>
      )}
      <InputHolder>
        {prefix && (
          <InputIcon
            disabled={disabled}
            prefix={prefix}
            prefixFont={prefixFont}
            invalid={invalid || error}>
            {prefix}
          </InputIcon>
        )}
        {async ? (
          <StyledSelectAsync
            {...props}
            $prefix={prefix}
            $suffix={suffix}
            options={options}
            disabled={disabled}
            classNamePrefix="react-select"
            loadOptions={loadOptions}
            error={error}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            onChange={(value) => {
              props?.onChange?.({
                target: {
                  value,
                  name: props.name,
                },
              });
            }}
          />
        ) : (
          <StyledSelect
            {...props}
            $prefix={prefix}
            $suffix={suffix}
            options={options}
            classNamePrefix="react-select"
            placeholder={
              noPlaceholder ? "" : placeholder ? placeholder : "Select..."
            }
            error={error}
            components={{ DropdownIndicator, IndicatorSeparator: () => null }}
            onChange={(value) => {
              props?.onChange?.({
                target: {
                  value,
                  name: props.name,
                },
              });
            }}
          />
        )}
      </InputHolder>

      {error && (
        <Error id={`${props.name}Error`} role="alert">
          {error}
        </Error>
      )}
    </StyledFormGroup>
  );
}

export default Select;
