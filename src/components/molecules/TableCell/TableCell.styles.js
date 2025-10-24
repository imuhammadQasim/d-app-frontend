import styled, { css } from "styled-components";

const styles = css`
  text-align: ${({ center }) => (center ? "center" : "left")};
  font-size: var(--font-size-sm);

  ${({ responsive }) =>
    responsive
      ? css`
          @media (min-width: 992px) {
            display: table-cell;
            padding: 0.8rem 0.5rem;

            &:first-child {
              padding-left: 25px;
            }
            &:last-child {
              padding-right: 25px;
            }
          }
        `
      : css`
          display: table-cell;
          padding: 0.8rem 0.5rem;
          &:first-child {
            padding-left: 1.25rem;
          }
          &:last-child {
            padding-right: 1.25rem;
          }
        `}
`;

export const Th = styled.th`
  ${styles}
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  background: var(--dark-100);
  padding-top: 0.9375rem;
  padding-bottom: 0.9375rem;
  text-transform: capitalize;
  text-align: ${({ $align }) => ($align ? "center" : "left")};

  &:first-child {
    text-align: left;
  }

  &:last-child,
  &:nth-last-child(2) {
    text-align: right;
  }
`;

export const Td = styled.td`
  font-weight: 400;
  ${styles}
  text-align: ${({ $align }) => ($align ? "center" : "left")};

  &:first-child {
    text-align: left;
  }
  &:last-child,
  &:nth-last-child(2) {
    text-align: right;
  }
  ${({ responsive }) =>
    responsive &&
    css`
      display: flex;
      justify-content: space-between;
      @media (max-width: 991px) {
        padding: 10px 5px;
        border-bottom: 1px solid var(--dark-100);
      }
      &:before {
        content: attr(data-th);
        display: inline-block;
        color: var(--white);
        padding-right: 12px;
        @media (min-width: 992px) {
          display: none;
        }
      }
    `}
`;
