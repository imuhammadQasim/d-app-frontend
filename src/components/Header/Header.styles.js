import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 10px;
  left: 10px;
  right: 10px;
  padding: 10px 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  backdrop-filter: blur(200px);
  z-index: 99;
  transition: 0.3s;

  @media (min-width: 768px) {
    justify-content: space-between;
    padding: 17px;
  }

  .scrolled & {
    top: 0;
    left: 0;
    right: 0;
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
  }

  .logo-holder {
    width: 100%;
    max-width: 230px;
    display: none;
    cursor: pointer;
    @media (min-width: 768px) {
      display: block;
    }

    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }

  .logo-sm {
    width: 30px;
    height: 30px;
    display: block;

    @media (min-width: 768px) {
      display: none;
    }

    img {
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }

  .user-info,
  .head,
  .dropdown-item,
  .logout {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .user-image {
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50%;
    background: var(--primary);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-name {
    display: block;
    font-weight: 600;
  }

  .pages-holder {
    display: none;

    @media (min-width: 768px) {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .page,
    .notification,
    .logout {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--dark);
      border-radius: 10px;
      width: 40px;
      height: 40px;
      overflow: hidden;
      transition: 0.4s;

      .text {
        display: none;
        font-weight: 500;
      }

      &.active {
        width: max-content;
        background: var(--primary);
        color: var(--secondary);
        padding: 10px 12px;
        gap: 5px;

        img {
          filter: invert(20%) sepia(9%) saturate(2959%) hue-rotate(106deg)
            brightness(61%) contrast(105%);
        }

        .text {
          display: block;
        }
      }
    }

    .notification,
    .logout {
      cursor: pointer;

      &:hover {
        background: var(--primary);
        color: var(--secondary);
        img {
          filter: invert(20%) sepia(9%) saturate(2959%) hue-rotate(106deg)
            brightness(61%) contrast(105%);
        }
      }
    }

    .user-info {
      position: relative;
      cursor: pointer;

      .arrow {
        width: 13px;
        height: 13px;
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
    }

    .dropdown {
      width: 250px;
      position: absolute;
      top: 60px;
      right: 0;
      background: var(--dark);
      padding: 12px;
      border: 1px solid var(--dark-100);
      border-radius: 12px;
      transform: translateY(10px);
      visibility: hidden;
      opacity: 0;
      transition: 0.3s all ease-in-out;

      .head {
        padding: 0 0 10px;
        border-bottom: 1px solid var(--dark-100);
        margin: 0 0 12px;

        a {
          font-size: 14px;
          line-height: 18px;
        }
      }

      .dropdown-item {
        padding: 10px 12px;
        border-radius: 8px;
        transition: 0.3s ease-in-out;

        &:not(:last-child) {
          margin: 0 0 10px;
        }

        &.active,
        &:hover {
          background: var(--dark-150);
        }
      }
    }
  }

  .menu-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 15px;
    display: block;

    @media (min-width: 768px) {
      display: none;
    }
  }

  .nav-links {
    width: 260px;
    height: 90vh;
    position: fixed;
    top: 60px;
    left: -100%;
    background: #eaffea;
    display: flex;
    flex-direction: column;
    padding: 30px 20px;
    border-radius: 0 20px 20px 0;
    transition: all 0.4s ease-in-out;
    color: var(--text-color);
    overflow: hidden;

    @media (min-width: 768px) {
      display: none;
    }

    ul,
    .logout {
      img {
        width: 20px;
        height: 20px;
        filter: invert(15%) sepia(8%) saturate(17%) hue-rotate(350deg)
          brightness(20%) contrast(88%);
      }
    }

    ul {
      flex-grow: 1;
      border-bottom: 1px solid #c5d6c5;
      margin: 0 0 15px;

      li {
        display: flex;
        align-items: center;
        gap: 10px;

        padding: 15px;
        border-radius: 10px;

        &:hover,
        &.active {
          color: var(--secondary);
          background: var(--white);
          font-weight: 500;

          img {
            filter: invert(20%) sepia(9%) saturate(2959%) hue-rotate(106deg)
              brightness(50%) contrast(105%);
          }
        }
      }
    }

    .head {
      margin: 0 0 20px;

      a {
        font-size: 14px;
        line-height: 18px;
      }
    }

    .logout {
      background: #fff7cc;
      padding: 13px 16px;
    }
  }

  .nav-active & {
    .nav-links {
      left: -12px;
    }
  }
`;
