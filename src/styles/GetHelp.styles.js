import styled, { css } from "styled-components";

export const StyledGetHelp = styled.div`
  .before-typing {
    height: calc(100vh - 105px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    h1 {
      font-size: 34px;
      line-height: 38px;
      font-weight: 42px;
    }

    .text {
      text-align: center;
      margin: 0 0 30px;
    }
  }

  .img-holder {
    width: 100%;
    max-width: 160px;
    margin: 0 0 30px;

    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .input-holder {
    display: flex;
    width: 100%;
    max-width: 500px;
    background: var(--dark-150);
    border-radius: 10px;
    position: relative;

    input {
      width: 100%;
      height: 45px;
      font-family: var(--base-font-sans-serif);
      font-size: 14px;
      line-height: 18px;
      font-weight: 300;
      background: transparent;
      color: var(--white);
      padding: 10px 40px;
      border: none;
      outline: none;

      &::placeholder {
        color: var(--white);
      }
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 16px;
      transform: translateY(-50%);
      cursor: pointer;

      &.send {
        left: auto;
        right: 16px;
      }
    }
  }

  .bottom-text {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    margin: 0;
    cursor: pointer;

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
    }

    a {
      color: #fff7cc;
      font-style: italic;
      text-decoration: underline;
    }
  }

  .messages-holder {
    width: 100%;
    padding: 10px 0;

    .message-type-section {
      width: 100%;
      max-width: 1200px;
      position: fixed;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      border-top: 1px solid var(--dark-150);
      padding: 20px 10px;
      margin: 0 auto;
    }

    .input-holder {
      margin: 0 auto 20px;
    }

    .bottom-text {
      position: static;
      transform: none;
    }
  }

  .messages-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: calc(100vh - 230px);
    overflow-y: auto;
    padding: 0 5px;

    @media (min-width: 768px) {
      height: calc(100vh - 260px);
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }
`;

export const Message = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 15px;

  &:not(:last-child) {
    margin: 0 0 15px;
  }

  .image-holder {
    width: 40px;
    height: 40px;
    background: var(--primary);
    border-radius: 50%;
    flex-shrink: 0;
    overflow: hidden;

    @media (min-width: 576px) {
      width: 50px;
      height: 50px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .message {
    width: 100%;
    max-width: 500px;
    padding: 10px 15px;
    border-radius: 12px;
    background: var(--off-white);
    color: var(--text-color);
    font-weight: 400;
    position: relative;
    margin: 0 0 5px;

    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
      padding: 10px;
    }

    &::before {
      content: "";
      position: absolute;
      left: -10px;
      bottom: 0;
      width: 0;
      height: 0;
      transform: rotate(-25deg);
      border-top: 5px solid transparent;
      border-right: 15px solid var(--off-white);
      border-bottom: 5px solid transparent;
    }
  }

  .time-holder {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 12px;
    line-height: 16px;
  }

  ${({ send }) =>
    send &&
    css`
      flex-direction: row-reverse;

      .image-holder {
        background: var(--white);
        padding: 4px;
      }

      .message {
        background: #fff7cc;
        &::before {
          left: auto;
          right: -10px;
          transform: rotate(200deg);
          border-right: 15px solid #fff7cc;
        }
      }
    `}
`;
