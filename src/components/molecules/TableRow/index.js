import styled, { css } from "styled-components";

export const TableRow = styled.tr`
  border: none;
  color: var(--white);
  border-bottom: ${({ $orderTable }) =>
    $orderTable ? "" : "1px solid var(--dark-100)"};
  display: table-row;
  width: 100%;
  border-radius: 0;
  padding: 0;
  background: ${({ $orderTable }) => ($orderTable ? "transparent" : "none")};

  ${({ responsive }) =>
    responsive &&
    css`
      @media (max-width: 991px) {
        border: 1px solid var(--dark-100);
        display: block;
        padding: 15px;
        border-radius: 10px;
        position: relative;
      }

      @media (max-width: 768px) {
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.05),
          -10px 10px 20px rgba(0, 0, 0, 0.05);
      }
    `}

  @media (min-width: 992px) {
    td {
      &:nth-child(1) {
        border-radius: 10px 0 0 10px;
      }
      &:nth-last-child(1) {
        border-radius: 0 10px 10px 0;
      }
    }
    &:last-child {
      border-bottom: 0;

      td {
        padding-bottom: ${({ $orderTable }) => ($orderTable ? "10px" : "0")};
      }
    }
  }

  @media (min-width: 768px) {
    border-radius: 10px;
    overflow: hidden;
  }

  &:hover {
    td {
      @media (min-width: 992px) {
        transition: background var(--animation-speed) ease-in-out;
        background: var(--gray-3);
        cursor: pointer;
      }
    }
  }
`;

export default TableRow;
