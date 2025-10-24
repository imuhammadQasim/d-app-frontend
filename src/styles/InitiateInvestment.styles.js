import { styled } from "styled-components";

export const StyledInitiateInvestment = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: calc(100vh - 95px);

  @media (min-width: 768px) {
    height: calc(100vh - 105px);
  }

  @media (min-width: 576px) {
    padding: 50px 15px;
  }

  h1 {
    display: block;
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 16px;
  }

  .invest {
    width: 100%;
    max-width: 600px;
    backdrop-filter: blur(10px);
    border: 1px solid var(--dark-100);
    border-radius: 16px;
    padding: 15px;
    margin: 0 auto 25px;

    @media (min-width: 576px) {
      padding: 25px;
    }

    img {
      margin: 0 auto 16px;
    }

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      margin: 0 0 16px;
    }

    p {
      @media (max-width: 575px) {
        font-size: 14px;
        line-height: 18px;
      }
    }

    .amount {
      display: block;
      font-size: 32px;
      line-height: 36px;
      font-weight: 500;
      margin: 0 0 16px;

      span {
        font-size: 16px;
        line-height: 20px;
        font-weight: 400;
      }
    }

    .checkbox-holder {
      display: flex;
      justify-content: center;

      > div {
        width: max-content;

        span {
          @media (max-width: 575px) {
            font-size: 13px;
            line-height: 18px;
          }
        }
      }
    }
  }

  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 0 0 20px;

    &:last-child {
      button {
        color: #fff;
      }
    }
  }
`;
