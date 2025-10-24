import styled from "styled-components";

export const StyledLoader = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;

  .loader {
    display: block;
    position: relative;
    width: 60px;
    height: 60px;
    background: #fff;
    border-radius: 50%;
    overflow: hidden;
  }
  .loader:after {
    content: "";
    position: absolute;
    inset: 8px;
    margin: auto;
    background: rgba(0, 0, 0, 1);
    border-radius: 50%;
  }
  .loader:before {
    content: "";
    position: absolute;
    inset: 0px;
    margin: auto;
    background: var(--primary);
    animation: crlMugLoader 2s linear infinite alternate;
  }
  @keyframes crlMugLoader {
    0%,
    10% {
      transform: translateY(64px);
    }
    90%,
    100% {
      transform: translateY(0px);
    }
  }
`;
