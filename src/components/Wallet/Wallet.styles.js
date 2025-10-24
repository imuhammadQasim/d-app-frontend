import styled, { css } from "styled-components";
import bg1 from "@/assets/images/wallet-card-bg.png";
import bg2 from "@/assets/images/wallet-card-bg02.png";

export const StyledWalletCard = styled.div`
  width: 100%;
  background-image: url(${bg2.src});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 16px 16px 100px;
  border: 1px solid var(--dark-100);
  border-radius: 16px;

  @media (min-width: 768px) {
    padding: 16px 16px 130px;
  }

  &:not(:last-child) {
    background-image: url(${bg1.src});
    @media (max-width: 767px) {
      margin: 0 0 10px;
    }
  }

  .top-text {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    margin: 0 0 16px;
  }

  .total-price {
    display: block;
    font-size: 38px;
    line-height: 42px;
    font-weight: 600;
    margin: 0 0 16px;

    @media (min-width: 1400px) {
      font-size: 42px;
      line-height: 46px;
    }

    span {
      font-size: 18px;
      line-height: 22px;
      color: var(--dark-100);
      font-weight: 400;
    }
  }

  .purchase-section {
    display: flex;
    justify-content: space-between;
    background: var(--off-white);
    color: var(--secondary);
    padding: 14px 10px;
    border-radius: 10px;

    @media (min-width: 1400px) {
      padding: 14px;
    }

    .heading {
      display: block;
      font-weight: 400;
      margin: 0 0 6px;

      @media (max-width: 1399px) {
        font-size: 14px;
        line-height: 16px;
      }
    }

    .price-holder {
      display: flex;
      align-items: flex-end;
      gap: 5px;

      .price {
        font-size: 20px;
        line-height: 24px;
        font-weight: 600;
      }

      .percent {
        font-size: 14px;
        line-height: 15px;
        font-weight: 400;
      }
    }
  }
`;

export const StyledWalletTable = styled.div`
  .textWrap {
    display: flex;
    align-items: center;
    gap: 5px;

    .intd {
      font-size: 11px;
      line-height: 15px;
    }
  }
`;

export const StyledStatus = styled.div`
  width: max-content;
  min-width: 112px;
  font-size: 15px;
  line-height: 19px;
  padding: 8px 13px 8px 26px;
  background: var(--off-white);
  color: var(--secondary);
  border-radius: 5px;
  position: relative;
  margin-left: auto;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 13px;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: var(--secondary);
    border-radius: 50%;
  }

  ${({ $status }) =>
    $status === "Cancelled" &&
    css`
      background: var(--danger);
      color: var(--text-color);

      &:before {
        background: var(--text-color);
      }
    `}
`;

export const StyledWallet = styled.div`
  border: 1px solid var(--dark-100);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  padding: 10px;
  margin-top: 10px;

  @media (min-width: 992px) {
    padding: 20px;
  }

  .wallet-head {
    margin: 0 0 16px;

    @media (min-width: 576px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .heading-holder {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 0 0 10px;
      @media (min-width: 576px) {
        margin: 0;
      }

      h1 {
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        margin: 0;
      }

      img {
        width: 30px;
        height: 30px;
      }
    }

    .btn-holder {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
  }

  .content-holder {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 1200px) {
      flex-direction: row;
    }

    .cards-holder {
      @media (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        gap: 10px;
      }
      @media (min-width: 1200px) {
        width: 30%;
        flex-direction: column;
      }
    }

    .table-holder {
      @media (min-width: 1200px) {
        width: 70%;
      }
    }
  }
`;
