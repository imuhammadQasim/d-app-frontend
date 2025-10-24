import styled from "styled-components";

export const StyledLiveGraph = styled.div`
  border: 1px solid var(--dark-100);
  border-radius: 16px;

  .head-wrapper {
    padding: 15px;
    @media (min-width: 576px) {
      padding: 20px;
    }

    .graph-head,
    .price-section {
      @media (min-width: 768px) {
        display: flex;
        align-self: center;
        justify-content: space-between;
      }
    }
    .graph-head {
      margin: 0 0 20px;

      .heading-holder {
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 2;
        margin: 0 0 10px;
        @media (min-width: 576px) {
          margin: 0;
        }

        img {
          width: 30px;
          height: 30px;
        }

        .heading {
          display: block;
          font-size: 20px;
          line-height: 24px;
          font-weight: 600;
        }
      }
      .tabs-holder {
        max-width: 200px;
        display: flex;
        max-width: max-content;
        margin-left: auto;
        background: var(--dark);
        border-radius: 6px;

        button {
          width: 50%;
          font-size: 14px;
          line-height: 18px;
          color: var(--white);
          padding: 8px 25px;
          border-radius: 6px;
          transition: 0.3s;

          &.active {
            background: var(--primary);
            color: var(--secondary);
          }
        }
      }
    }
  }

  .price-section {
    .price-holder {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 20px;
      @media (min-width: 576px) {
        margin: 0;
      }

      h3 {
        margin: 0;
        @media (max-width: 575px) {
          font-size: 22px;
          line-height: 26px;
        }
        .text {
          font-size: 13px;
          line-height: 17px;
          font-weight: 300;
          color: #858585;

          @media (min-width: 576px) {
            font-size: 16px;
            line-height: 20px;
          }
        }
      }

      button {
        width: auto;
        min-width: max-content;
        padding: 6px;
      }

      .currency-tag {
        display: flex;
        align-items: center;
        gap: 5px;
        background: var(--off-white);
        color: var(--secondary);
        padding: 6px;
        border-radius: 6px;
        gap: 5px;
      }
    }

    .time-duration {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 5px;
      @media (min-width: 768px) {
        justify-content: center;
      }

      li {
        line-height: 16px;
        padding: 5px;
        border-radius: 5px;
        cursor: pointer;

        &:hover,
        &.active {
          background: var(--off-white);
          color: var(--secondary);
        }
      }
    }
  }

  .highcharts-axis,
  .highcharts-credits,
  .highcharts-legend {
    display: none;
  }
  .highcharts-container {
    height: 250px !important;
  }
`;

export const StyledMiningGraph = styled.div``;
