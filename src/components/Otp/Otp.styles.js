import { css, styled } from "styled-components";

export const OtpInputWrapper = styled.div`
  max-width: ${({ $width }) => $width || "440px"};
  margin: 0 auto 20px;

  .otp-fields {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-bottom: 20px;

    /* @media (min-width: 576px) {
      gap: 20px;
    } */
  }

  input {
    width: 100%;
    max-width: ${({ $inputWidth }) => $inputWidth || "70px"};
    height: 50px;
    border: 1px solid transparent;
    background: var(--dark);
    color: var(--white);
    border-radius: 10px;
    padding: 10px;
    font-size: 28px;
    line-height: 32px;
    box-sizing: border-box;
    outline: none;
    text-align: center;

    @media (max-width: 576px) {
      height: 50px;
      padding: 10px 10px 5px;
      font-size: 20px;
      line-height: 24px;
    }

    &::placeholder {
      font-size: 35px;
      line-height: 20px;
      color: var(--white);
    }
  }

  input:focus::placeholder {
    color: transparent;
  }

  .timer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .resend-code {
      color: var(--golden);
      cursor: pointer;

      ${({ $disable }) =>
        $disable &&
        css`
          pointer-events: none;
          color: gray;
          cursor: not-allowed;
        `}
    }
  }
`;
