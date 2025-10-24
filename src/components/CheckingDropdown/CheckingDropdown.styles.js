import styled from "styled-components";

export const StyledCheckingDropdown = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 140px;
  font-size: 12px;
  line-height: 16px;
  background: var(--dark-150);
  padding: 8px 12px;
  border-radius: ${({ $radius }) => ($radius ? $radius : "5px")};
  cursor: pointer;
  position: relative;

  .arrow {
    width: 10px;
    height: 10px;
    flex-shrink: 0;
    transform: scale(1);
    transition: 0.3s all ease-in-out;
  }

  &.active {
    .arrow {
      transform: scale(-1);
    }

    .dropdown {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }

  .icon {
    width: 20px;
    height: 20px;
  }

  .dropdown {
    width: 250px;
    position: absolute;
    top: 40px;
    right: 0;
    background: var(--dark);
    padding: 12px;
    border: 1px solid var(--dark-100);
    border-radius: 12px;
    transform: translateY(10px);
    visibility: hidden;
    opacity: 0;
    transition: 0.3s all ease-in-out;
    z-index: 9;

    .dropdown-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 12px;
      border-radius: 8px;
      transition: 0.3s ease-in-out;

      &:not(:last-child) {
        margin: 0 0 10px;
      }

      .label-holder {
        display: flex;
        align-items: center;
        gap: 10px;
      }

      .text {
        display: block;
        text-align: end;
      }

      &.active,
      &:hover {
        background: var(--dark-150);
      }
    }
  }
`;
