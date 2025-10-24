import styled from "styled-components";

export const StyledFakeLabel = styled.span`
  display: block;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  line-height: 1;
  color: ${({ $labelColor }) => $labelColor || "var(--white)"};
  /* color: var(--black); */
`;

export const RequiredAsterisk = styled.span`
  color: var(--danger);
  margin-left: 3px;
`;
