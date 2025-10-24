import styled from "styled-components";

export const StyledInputIcon = styled.span`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ $prefix }) => $prefix && "10px"};
  right: ${({ $suffix }) => $suffix && "10px"};
  color: ${({ $invalid }) => ($invalid ? "var(--danger)" : "var(--white)")};
  font-size: 16px;
  line-height: 1px;
  background: none;
  border: none;
  padding: 0;
  z-index: 1;
  ${({ disabled }) => disabled && "opacity: 0.5"};
  i {
    display: block;
  }
`;
