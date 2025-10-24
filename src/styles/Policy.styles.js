import { styled } from "styled-components";

export const StyledPolicy = styled.div`
  padding: 30px 15px;
  text-align: center;

  @media (min-width: 576px) {
    padding: 50px 15px;
  }

  .heading {
    display: block;
    font-size: 28px;
    line-height: 32px;
    margin: 0 0 16px;
  }

  .text {
    display: block;
    margin: 0 0 16px;
  }

  li,
  p,
  .text {
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  ul {
    width: 100%;
    max-width: 1000px;
    backdrop-filter: blur(10px);
    padding: 15px 15px 15px 25px;
    border: 1px solid var(--dark-100);
    border-radius: 16px;
    text-align: start;
    margin: 0 auto 16px;

    @media (min-width: 576px) {
      padding: 20px 20px 20px 40px;
    }

    li {
      font-weight: 100;
      list-style: decimal;
      &:not(:last-child) {
        margin: 0 0 15px;
      }
    }
  }

  .foot-text {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;

    .heading {
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;

      @media (min-width: 576px) {
        font-size: 22px;
        line-height: 26px;
      }
    }

    button {
      background: #fff7cc;
      color: var(--text-color);
    }
  }
`;
