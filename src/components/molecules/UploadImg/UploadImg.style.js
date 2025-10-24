import styled from "styled-components";

export const StyledUploadImage = styled.div`
  width: 100%;
  max-width: 80px;
  height: 80px;
  margin-bottom: ${({ $noMargin }) => ($noMargin ? "0" : " 30px")};
  position: relative;
  overflow: hidden;
  border: 2px solid var(--text-color);
  border-radius: 50px;
  cursor: pointer;
  z-index: 1;

  @media (min-width: 768px) {
    max-width: 100px;
    height: 100px;
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    .change-photo {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .icon-img {
    display: block;
    width: 100%;
    height: auto;
    background: var(--primary);
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: 0.3s;
  }

  .change-photo {
    position: absolute;
    top: 30px;
    left: 0;
    width: 100%;
    opacity: 0;
    transform: translateY(50px);
    transition: 0.3s;
    cursor: pointer;

    img {
      margin: 0 auto 5px;
    }

    .text {
      display: block;
      font-size: 12px;
      line-height: 16px;
      font-weight: 700;
      text-align: center;
      color: var(--white);
    }
  }

  input {
    display: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }
`;
