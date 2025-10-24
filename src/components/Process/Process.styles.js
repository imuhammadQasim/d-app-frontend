import styled from "styled-components";

export const StyledProcess = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  height: calc(100vh - 95px);

  @media (min-width: 768px) {
    height: calc(100vh - 105px);
  }

  .gif-holder {
    width: 90px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 247, 204, 0.1);
    border-radius: 100px;
    margin: 0 auto 15px;
    @media (min-width: 576px) {
      width: 120px;
      height: 120px;
      margin: 0 auto 25px;
    }
    @media (min-width: 768px) {
      width: 150px;
      height: 150px;
      margin: 0 auto 35px;
    }

    img {
      width: 70px;
      height: 70px;
      @media (min-width: 576px) {
        width: 90px;
        height: 90px;
      }
      @media (min-width: 768px) {
        width: 110px;
        height: 110px;
      }
    }
  }

  .heading {
    display: block;
    font-size: 28px;
    line-height: 34px;
    font-weight: 700;
    margin: 0 0 15px;
    @media (min-width: 768px) {
      font-size: 34px;
      line-height: 38px;
    }
  }

  .text {
    display: block;
    white-space: pre-line;
    margin: 0 0 20px;
    @media (min-width: 768px) {
      margin: 0 0 30px;
    }
  }

  .error {
    width: 100%;
    max-width: 280px;
    font-size: 12px;
    line-height: 16px;
    font-weight: 500;
    display: flex;
    align-items: center;
    background: var(--off-white);
    color: var(--text-color);
    gap: 5px;
    padding: 6px 16px;
    border-radius: 8px;
    margin: 0 auto 16px;
  }

  button {
    @media (max-width: 575px) {
      width: 100%;
    }
  }

  .btn-holder {
    margin: 0 0 16px;
  }

  .back-btn {
    button {
      color: var(--white);
    }
  }
`;

export const StyledProgressBar = styled.div`
  content: "";
  width: 225px;
  height: 10px;
  background: var(--text-color);
  border-radius: 3px;
  margin: 0 auto;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${({ $progress }) => $progress && $progress};
    background: var(--primary);
    border-radius: 3px;
  }
`;
