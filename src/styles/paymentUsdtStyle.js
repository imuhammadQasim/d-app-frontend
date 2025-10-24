import styled from "styled-components";

export const USDTStyled = styled.div`
  .wallet-button-div {
    background-color: #eaffea;
    display: flex;
    border-radius: 8px;
    padding: 1px 20px;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: 0.3s all ease-in-out;
  }
  button.tw-connect-wallet.css-cfth79 {
    width: fit-content;
    height: 43px !important;
    background-color: transparent !important;
    color: black !important;
  }
  .wallet-button-div:hover,
  button.tw-connect-wallet.css-cfth79:hover {
    background-color: #98ff98 !important;
    color: #0f780d !important;
  }
  .wallet-img {
    height: 22px !important;
    width: 22px !important;
    position: absolute;
    left: 33%;
  }
  button.tw-connected-wallet.css-11u9h2h {
    background-color: transparent;
  }
  .tw-connected-wallet + .wallet-img {
    display: none !important;
  }
`;
