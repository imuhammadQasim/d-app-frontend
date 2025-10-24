import styled, { css } from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-wrap: ${(props) => !props.nowrap && "wrap"};

  ${(props) =>
    props.direction === "column" &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.direction === "columnReverse" &&
    css`
      flex-direction: column;
    `}

  ${(props) =>
    props.justify === "center" &&
    css`
      justify-content: center;
    `}

  ${(props) =>
    props.justify === "space-between" &&
    css`
      justify-content: space-between;
    `}

  ${(props) =>
    props.justify === "end" &&
    css`
      justify-content: flex-end;
    `}

  ${(props) =>
    props.align === "top" &&
    css`
      align-items: flex-start;
    `}

  ${(props) =>
    props.align === "middle" &&
    css`
      align-items: center;
    `}

    ${(props) =>
    props.align === "bottom" &&
    css`
      align-items: flex-end;
    `}
`;

export const Centered = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormGroup = styled.div`
  width: 100%;
  min-width: ${({ $width }) => ($width ? $width : "")};
  margin-bottom: ${({ $invalid, $noMargin }) =>
    $invalid || $noMargin ? "0px" : "15px"};
  /* position: relative; */

  /* &:nth-last-child(1) {
    margin-bottom: 0;
  } */
  @media (min-width: 768px) {
    margin-bottom: ${({ $invalid, $noMargin }) =>
      $invalid || $noMargin ? "0px" : "15px"};
  }
`;

export const InputHolder = styled.div`
  position: relative;
`;

export const ActionBtnHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${({ numOfBtns }) => (numOfBtns === 4 ? 4 : 3)},
    minmax(20px, 20px)
  );
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 5px;
  right: 17px;
  gap: 20px;
  margin: 0 auto;
  .tooltip-holder {
    display: flex;
    align-items: center;
    justify-content: center;

    &.red_dot {
      .detail-btn {
        position: relative;

        &:before {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--danger);
        }
      }
    }
  }
  .tooltip-holder:only-child {
    /* justify-content: flex-end;
    @media (min-width: 992px) {
      justify-content: center;
    } */
    @media (max-width: 992px) {
      grid-column: ${({ numOfBtns }) =>
        numOfBtns === 4 ? `span 4 / span 4` : `span 3 / span 3`};
    }
  }
  @media (min-width: 992px) {
    position: static;
  }
  button {
    font-size: var(--font-size-xl);
    line-height: calc(var(--font-size-xl) + 0.3125rem);
    display: flex;
    align-items: center;
  }

  .delete-btn {
    color: var(--danger);
  }

  .detail-btn {
    color: var(--primary);
  }
`;

export const Wrapper = styled.div`
  padding: 0 15px;
  width: 100%;
  @media (min-width: 1500px) {
    padding: 0 50px;
  }
`;
export const ActionsWrapper = styled.div`
  .actions {
    @media (max-width: 650px) {
      flex-direction: column;
      gap: 15px !important;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
    button {
      padding: 13px 15px;
      max-width: 100%;
    }
    .Search {
      @media (max-width: 576px) {
        width: 100% !important;
      }
    }
  }
`;
