import styled, { css } from "styled-components";
import FakeInput from "../FakeInput";

export const styles = css`
  border: 1px solid
    ${({ $invalid }) => ($invalid ? "var(--danger)" : "transparent")};
  outline: none;
  height: ${({ lg }) => (lg ? "56px" : "45px")};
  padding: ${({ lg }) => (lg ? "19px 30px" : "13px 15px")};
  width: 100%;
  transition: border var(--animation-speed) ease-in-out;
  font-family: inherit;
  color: var(--white);
  background: rgba(255, 255, 255, 0.16);
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  border-radius: ${({ $rounded }) => ($rounded ? "60px" : "10px")};
  padding-left: ${({ $prefix }) => $prefix && "2.5rem"};
  padding-right: ${({ $suffix, $button }) => {
    if ($suffix) return "2.5rem";
    if ($button) return "3.6rem";
    return "";
  }};

  ${({ type }) =>
    type === "search" &&
    css`
      transition: all var(--animation-speed) ease-in-out;

      ${({ responsive }) =>
        responsive &&
        css`
          @media (max-width: 767px) {
            position: absolute;
            top: -22px;
            right: 7px;
            z-index: 9;
            box-shadow: 0px 23px 44px rgba(176, 183, 195, 0.3);
            background: var(--white);
            border: 1px solid var(--light);
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            width: 0;
          }
          @media (max-width: 575px) {
            top: 100%;
            left: 0;
            right: 0;
            width: 100%;
          }
        `}

      ${({ openSearch }) =>
        openSearch &&
        css`
          @media (max-width: 767px) {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
            width: 350px;
          }
          @media (max-width: 575px) {
            transform: translateY(0);
            width: 100%;
          }
        `}
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background: var(--light);
      cursor: not-allowed;
      color: var(--light-gray);
    `}


  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: var(--white);
    opacity: 0.6;
  }
  &::placeholder {
    color: var(--white);
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: var(--white);
    opacity: 0.6;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: var(--white);
    opacity: 0.6;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: var(--white);
    opacity: 0.6;
  }

  &[type="radio"] {
    + ${FakeInput} {
      border-radius: 100%;
      &:before {
        content: "";
        background: linear-gradient(116.03deg, #355b85 5.04%, #1b2e44 86.56%);
        border: 2px solid white;
        border-radius: 100%;
        width: 15px;
        height: 15px;
      }
    }
  }

  + ${FakeInput} {
    transition: background var(--animation-speed) ease-in-out;
    &:before,
    .icon-check {
      position: absolute;
      top: 50%;
      left: 50%;
      opacity: 0;
      transform: translate(-50%, -50%);
      transition: opacity var(--animation-speed) ease-in-out;
    }
  }

  &[type="checkbox"] {
    + ${FakeInput} {
      .icon-check {
        color: var(--white);
        font-size: var(--font-size-xs);
      }
    }
  }

  &[type="checkbox"],
  &[type="radio"] {
    display: none;
    &:checked {
      + ${FakeInput} {
        background: var(--primary);
        border: 1px solid var(--secondary);

        .icon {
          color: var(--secondary);
        }

        .icon-check,
        &:before {
          opacity: 1;
        }
      }
    }
    &:disabled {
      ${FakeInput} {
        opacity: 0.5;
      }
    }
  }
  &:disabled {
    opacity: 0.5;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: var(--white);
  }
`;

export const StyledTextarea = styled.textarea`
  ${styles}
  resize: vertical;
  min-height: 9.375rem;
  border-radius: 12px;
`;

export const StyledInput = styled.input`
  ${styles}
`;
