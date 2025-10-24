import styled from "styled-components";

export const StyledLoginTemplate = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
  min-height: 100vh;

  .form-section {
    width: 100%;
    display: flex;
    align-items: center;
    @media (min-width: 992px) {
      width: 50%;
    }

    .form-holder {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;

      .heading {
        display: block;
        font-size: 28px;
        line-height: 32px;
        font-weight: 700;
        text-align: center;
        margin: 0 0 16px;
      }

      .logo-holder {
        width: 100%;
        max-width: 260px;
        margin: 0 auto 16px;

        img {
          display: block;
          width: 100%;
          height: auto;
        }
      }

      p {
        text-align: center;
        margin: 0 0 25px;
      }
    }
  }

  .img-holder {
    width: 50%;
    border-radius: 30px;
    background: linear-gradient(to bottom, #2b4731 0%, #49724f 100%);
    position: relative;
    overflow: hidden;
    user-select: none;
    display: none;

    @media (min-width: 992px) {
      display: block;
    }

    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      max-width: 100%;
      height: auto;
    }
  }

  .login-form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 25px;

    a {
      flex-shrink: 0;
      color: var(--golden);
    }
  }

  .btn {
    margin: 10px 0 20px;
  }

  .create-account {
    display: block;
    text-align: center;

    a {
      font-weight: 600;
      color: var(--primary);
      text-decoration: underline;
    }
  }

  .sign-up-head {
    display: flex;
    gap: 16px;
  }

  .paymentMethod {
    .paymentMethodContent {
      h4 {
        text-align: center;
        font-size: 28px;
        font-weight: 700;
      }

      p {
        font-size: 16px;
        font-weight: 500;

        span {
          color: #98ff98;
        }
      }
    }

    /* radioBtn */
    .paymentMethodCart {
      border-style: none;
      background-color: #292929;
      padding: 20px;
      border-radius: 10px;

      h5 {
        font-size: 16px;
        font-weight: 400;
        margin-bottom: 16px;
      }

      label:nth-of-type(1) {
        margin-bottom: 17px;
      }

      label {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 12px;
        font-weight: 300;
        cursor: pointer;

        input[type="radio"] {
          accent-color: #98ff98;
          margin: 0;
          cursor: pointer;
        }

        img {
          height: 16px;
          width: 16px;
        }
      }
      input:-webkit-autofill {
        -webkit-text-fill-color: black !important;
        transition: background-color 5000s ease-in-out 0s;
      }
    }
  }

  .creditCartPayment {
    background-color: #292929;
    padding: 20px;
    border-radius: 10px;

    .logo-holder {
      display: none !important;
    }

    h5 {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-bottom: 30px;

      img {
        width: 20px;
        height: 20px;
      }
    }

    form {
      display: flex;
      flex-direction: column;
    }

    label {
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 14px;
    }

    input {
      font-size: 12px;
      font-weight: 300;
      background-color: #4b4b4b;
      color: white;
      padding: 15px;
      margin-bottom: 15px;
      box-sizing: border-box;
      border-radius: 10px;
      border-style: none;

      &:focus {
        outline: none;
        box-shadow: none;
        border: none;
      }
    }

    .row {
      display: flex;
      gap: 10px;

      .half {
        flex: 1;
        display: flex;
        flex-direction: column;
        min-width: 0;
      }
    }

    .lastinput {
      margin-bottom: 26px;
    }

    button {
      padding: 15px;
      margin-bottom: 15px;
      width: 100%;
      border: none;
    }

    p {
      font-size: 12px;
      font-weight: 300;
      text-align: center;
      color: #9d9d9d;
      margin-bottom: 0 !important;
    }

    .inputError {
      border-style: none;
      /* box-shadow: 0 0 0 3px rgba(255, 77, 79, 0.08); */
      box-shadow: none;
    }

    .errorText {
      color: #ff4d4f !important;
      text-align: start !important;
      font-size: 13px;
      margin-top: -5px !important;
      padding-bottom: 18px;
      padding-left: 6px;
    }
  }

  .creditCardForm {
    background-color: #292929;
    padding: 20px;
    border-radius: 10px;

    h5 {
      font-size: 17px;
      font-weight: 400;
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      gap: 7px;

      img {
        width: 20px;
        height: auto;
      }
    }

    form {
      ::placeholder {
        font-size: 12px;
        font-weight: 400;
        color: #9d9d9d;
      }

      .form-holder {
        margin-bottom: 15px;
      }

      .horizontalFrom {
        display: flex;
        align-items: center;
        gap: 12px;
      }
    }

    button {
      width: 100%;
      margin-bottom: 15px;
    }

    .footerText {
      font-size: 12px;
      font-weight: 300;
      color: #9d9d9d;
      margin-bottom: 0 !important;
    }
  }

  .paymentUSDT {
    border-style: none;
    background-color: #292929;
    padding: 20px;
    border-radius: 10px;

    .logo-holder {
      display: none !important;
    }

    .paymentUSDTContent {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      gap: 7px;
      h5 {
        margin-bottom: 0;
      }
      img {
        width: 22px;
        height: 22px;
      }
    }
    p {
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 30px !important;
    }

    button {
      gap: 10px;
      padding: 12px;
      width: 100%;
      border-style: none;
      img {
        width: 22px;
        height: 22px;
      }
    }
  }

  .procedureUSDT {
    border-style: none;
    background-color: #292929;
    padding: 23px;
    border-radius: 10px;

    .logo-holder {
      display: none !important;
    }

    .procedureUSDTContent {
      margin-bottom: 30px;
      display: flex;
      align-items: center;
      gap: 7px;
      h5 {
        margin-bottom: 0;
      }
      img {
        width: 20px;
        height: auto;
      }
    }
    .connectedWallet {
      font-size: 13px;
      font-weight: 400;
      margin-bottom: 12px !important;
      text-align: start !important;
      color: #9d9d9d;
    }

    .link {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: start !important;
      margin-bottom: 33px;

      img {
        width: 20px;
        height: auto;
        cursor: pointer;
      }

      p {
        font-size: 12px;
        font-weight: 300;
        color: white;
        margin-bottom: 0 !important;
      }
    }

    .paymentAmount {
      padding: 20px;
      border-radius: 10px;
      background-color: #4b4b4b;
      margin-bottom: 26px;

      p {
        font-size: 12px;
        font-weight: 500;
        color: #98ff98;
        margin-bottom: 8px !important;
        text-align: center !important;
      }
      h6 {
        font-size: 16px;
        font-weight: 700;
        text-align: center !important;
        margin-bottom: 0 !important;
      }
    }

    button {
      margin-bottom: 15px;
      padding: 12px;
      width: 100%;
      border-style: none;
    }

    .secureBlockchain {
      font-size: 12px;
      font-weight: 300;
      color: #9d9d9d;
      margin-bottom: 0 !important;
    }
  }

  .card-number.StripeElement.StripeElement--empty {
    padding: 13px;
    background-color: #4b4b4b;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff;
    font-size: 13px;
    margin-top: 7px;
  }
  .expiry.StripeElement.StripeElement--empty {
    width: 100%;
    padding: 13px;
    background-color: #4b4b4b;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff;
    margin-top: 7px;
  }
  .ElementsApp,
  .ElementsApp .InputElement {
    font-size: 14px;
  }

  .cvc.StripeElement.StripeElement--empty {
    width: 100%;
    padding: 13px;
    background-color: #4b4b4b;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff;
    margin-top: 7px;
  }
  input.InputElement.is-empty.Input.Input--empty,
  input.InputElement.is-empty.Input.Input--empty {
    color: white;
  }
  label.stripe-label {
    flex: 1;
  }
  .ipo-note {
    background: #d1fae5; /* light green background */
    color: #065f46; /* dark green text */
    text-align: center;
    font-weight: 600;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 0.95rem;
  }
`;
