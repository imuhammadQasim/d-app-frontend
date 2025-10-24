import styled, { css } from "styled-components";

export const StyledLabel = styled.label`
  font-size: 15px;
  line-height: 20px;
  color: var(--white);
  font-weight: 400;
  margin-bottom: ${({ $noLabelMargin }) =>
    $noLabelMargin ? "0" : " 0.625rem"};
  display: block;
  pointer-events: ${({ $onlyRead }) => $onlyRead && "none"};
  ${({ labelIcon }) =>
    labelIcon &&
    css`
      display: flex;
      align-items: center;
    `}
  ${({ $labelReverse }) =>
    $labelReverse &&
    css`
      position: relative;
      .label {
        flex-direction: row-reverse;
      }
    `};
  .label {
    display: flex;
    align-items: center;
  }
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  font-size: 14px;
`;
