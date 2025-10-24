import styled from "styled-components";
import cardBg from "@/assets/images/investment-card-bg.png";

export const StyledPromotionalRewards = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--dark-100);
  border-radius: 16px;
  padding: 10px;
  backdrop-filter: blur(10px);

  @media (min-width: 1400px) {
    padding: 20px;
  }

  .heading-holder {
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 2;
    border-bottom: 1px dashed var(--dark-100);
    padding: 0 0 16px;
    margin: 0 0 16px;

    img {
      width: 30px;
      height: 30px;
    }

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 600;
      @media (min-width: 1400px) {
        font-size: 20px;
        line-height: 24px;
      }
    }
  }

  .card-holder {
    @media (max-width: 1199px) {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
`;

export const CardStyled = styled.div`
  background-image: url(${cardBg.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 1px solid var(--dark-100);
  border-radius: 16px;
  padding: 15px;

  @media (min-width: 1400px) {
    padding: 20px;
  }

  position: relative;
  overflow: hidden;

  &:not(:last-child) {
    @media (min-width: 1200px) {
      margin: 0 0 16px;
    }
  }

  .card-img {
    position: absolute;
    bottom: ${({ imgBottom }) => (imgBottom ? imgBottom : "-50px")};
    right: ${({ imgRight }) => (imgRight ? imgRight : "-30px")};
  }

  .tag {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--off-white);
    color: var(--text-color);
    padding: 6px;
    border-radius: 5px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 500;
  }

  .heading {
    display: block;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
    margin: 0 0 10px;
  }

  p {
    max-width: 300px;
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  button {
    padding: 10px;
    @media (max-width: 1399px) {
      width: max-content;
      padding: 10px 12px;
    }
  }
`;
