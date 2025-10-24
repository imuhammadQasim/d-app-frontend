import styled from "styled-components";

export const StyledBuyIntd = styled.div`
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 95px);
  overflow-y:scroll;
  @media (min-width: 768px) {
    height: calc(100vh - 135px);
  }

  .h3 {
    text-align: center;
    margin: 0 0 25px;
  }

  .arrow-holder {
    width: 55px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    padding: 5px;
    background: var(--dark);
    border-radius: 10px;

    .icon-holder {
      width: 45px;
      height: 45px;
      background: #414541;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
    }
  }

  .wrapper {
    width: 100%;
    max-width: 550px;
  }

  .cards-holder {
    position: relative;
    margin: 0 0 25px;
  }

  .btn-holder {
    display: flex;
    justify-content: center;
    margin: 0 0 25px;

    &:last-child {
      button {
        color: var(--white);
      }
    }
  }

  .card,
  .form-holder {
    width: 100%;
    border: 1px solid var(--dark-100);
    padding: 20px;
    border-radius: 16px;
    backdrop-filter: blur(10px);

    @media (min-width: 576px) {
      padding: 26px;
    }
  }

  .card {
    @media (min-width: 576px) {
      padding: 26px 26px 40px 26px;
    }

    &:not(:last-child) {
      margin: 0 0 12px;
    }

    .head-text {
      display: block;
      font-size: 18px;
      line-height: 22px;
      color: var(--dark-100);

      margin: 0 0 14px;
    }

    .currency-holder {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px dashed var(--dark-100);
      padding: 0 0 20px;
      margin: 0 0 20px;

      .select {
        width: max-content;
        .react-select__single-value {
          font-size: 22px;
          line-height: 26px;
        }
        .react-select__control {
          background: transparent;
          padding-left: 30px;
          padding-right: 13px;
        }
        .pref-suf {
          font-size: 22px;
        }
      }

      h3 {
        margin: 0;
        span {
          font-size: 16px;
          line-height: 20px;
          font-weight: 300;
        }
      }
    }

    .text {
      display: block;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
  }

  .form-holder {
    margin: 0 auto 25px;
    .input-holder {
      @media (min-width: 576px) {
        display: flex;
        gap: 20px;
      }
    }
  }
`;
