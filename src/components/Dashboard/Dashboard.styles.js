import { styled } from "styled-components";

export const StyledDashboard = styled.div`
  padding-top: 10px;

  @media (min-width: 1200px) {
    display: flex;
    gap: 10px;
  }

  .graph-holder {
    margin: 0 0 16px;
    @media (min-width: 1200px) {
      width: 70%;
      margin: 0;
    }

    .head {
      margin: 0 0 10px;
      @media (min-width: 992px) {
        display: flex;
        gap: 10px;
      }
    }
  }

  .promotions {
    @media (min-width: 1200px) {
      width: 30%;
    }
  }
`;
