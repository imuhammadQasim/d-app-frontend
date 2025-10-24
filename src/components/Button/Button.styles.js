import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => ($gap ? $gap : "5px")};
  padding: 12px 15px;
  border-radius: ${({ $rounded }) => ($rounded ? "60px" : "8px")};
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
  width: ${({ $width }) => ($width ? $width : "140px")};
  min-width: 140px;
  background: var(--off-white);
  color: var(--secondary);
  transition: 0.5s all ease-in-out;
  box-shadow: 0px 4px 3px 0px #ffffff45 inset, 0px -3px 5px 0px #ffffff40 inset;
  overflow: hidden;
  z-index: 1;

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
  }

  ${({ $loader, disabled }) =>
    $loader ||
    (disabled &&
      css`
        cursor: not-allowed;
      `)}

  ${({ $lg }) =>
    $lg &&
    css`
      width: ${({ $width }) => ($width ? $width : "200px")};
      padding: 15px;
    `}

  @media screen and (max-width:786px) {
    padding: 8px 15px;
  }
  /***** Background-Variants-Start *****/

  ${({ $variant }) =>
    ($variant == "secondary" &&
      css`
        background: var(--primary);
        color: var(--secondary);
      `) ||
    ($variant == "outline" &&
      css`
        background: var(--white);
        border: 1px solid var(--primary);
        color: var(--primary);
      `) ||
    ($variant == "danger" &&
      css`
        background: var(--danger);
        color: var(--text-color);
      `)}

  /*****************Background Variants End*********************/


  /*****************Border Variants Start*********************/

  ${({ $outline }) =>
    $outline &&
    css`
      border: 1px solid var(--blue);
      background: transparent;
      color: var(--blue);
    `}
  /*****************Border Variants End*********************/

    .loader {
    width: 17px;
    height: 17px;
    border-radius: 50%;
    display: inline-block;
    border-top: 3px solid var(--secondary);
    border-right: 3px solid transparent;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    height: 1px;
    width: 1px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border-radius: 50%;
    z-index: -1;
  }

  &:before {
    display: none;
    background: var(--secondary);
    transition: 0.6s ease-in;
    transition-delay: 0.1s;
  }

  &:after {
    background: var(--primary);
    transition: 0.8s ease;
    transition-delay: 0.4s;

    ${({ $variant }) =>
      $variant == "secondary" &&
      css`
        background: var(--white);
      `}

    ${({ $variant }) =>
      $variant == "danger" &&
      css`
        background: #dc4320;
      `}
  }

  &:hover {
    &:before,
    &:after {
      transform: translate(-50%, -50%) scale(1000);
      z-index: -1;
    }
  }
`;
