import { styled } from "styled-components";

export const PhoneWrapper = styled.div`
  position: relative;
  font-size: 18px;
  line-height: 22px;
  font-weight: 400;
  font-family: var(--base-font-sans-serif);
  color: var(--white);
  label {
    display: block;
    margin-bottom: 10px;
  }
  .PhoneInput {
    /* background: #f1f1f1; */
    border: ${({ $invalid }) =>
      $invalid ? "1px solid var(--danger)" : "1px solid transparent"};
    border-radius: 8px;
    /* background: rgba(255, 255, 255, 0.1); */
    color: var(--white);
  }
  .PhoneInput--focus {
    box-shadow: none;
  }
  .PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {
    box-shadow: none;
  }
  .PhoneInputCountry {
    border-radius: 10px;
    width: 55px;
    display: flex;
    justify-content: flex-end;
    background: rgba(255, 255, 255, 0.2);
    margin-right: 10px;
    flex-shrink: 0;

    .PhoneInputCountryIcon {
      box-shadow: none;
      overflow: hidden;
      width: 22px;
      height: 22px;
      border-radius: 100px;
      &:focus {
        box-shadow: none;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .PhoneInputCountrySelect {
    font-family: inherit;
    background: rgba(255, 255, 255, 0.1);
    font-size: 14px;
    line-height: 18px;
  }
  .PhoneInputCountrySelect > option:hover {
    background: rgba(255, 255, 255, 0.1);
    font-size: 14px;
    line-height: 18px;
  }
  .PhoneInputCountrySelectArrow {
    width: 0;
    height: 0;
    border-radius: 2px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #313131;
    border-bottom: none;
    opacity: 1;
    transform: none;
    visibility: hidden;
  }
  input {
    height: 45px;
    border-radius: 10px;
    border: none;
    padding: 0 0 0 10px;
    font-size: 14px;
    line-height: 18px;
    outline: none;
    margin: 0 !important;
    background: rgba(255, 255, 255, 0.2);
    font-weight: 400;
    color: var(--white);
    font-family: inherit;
    &::placeholder {
      color: var(--white);
    }
  }
  .error {
    font-size: 12px;
    line-height: 14px;
    font-weight: 400;
    position: absolute;
    left: 5px;
    bottom: -15px;
    color: var(--danger);
    p {
      margin: 0;
    }
  }
`;
