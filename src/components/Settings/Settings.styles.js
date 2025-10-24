import styled, { css } from "styled-components";

export const StyledSideBar = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  border: 1px solid var(--dark-100);
  border-radius: 16px;
  padding: 15px 12px;
  overflow: hidden;

  @media (min-width: 1400px) {
    padding: 16px;
  }

  .menu {
    display: block;
    margin: 0 0 16px;
  }

  .nav-holder {
    flex-grow: 1;
    overflow: auto;
  }

  ul {
    display: flex;
    gap: 10px;
    width: 800px;

    @media (min-width: 1200px) {
      width: auto;
      display: unset;
      flex-grow: 1;
    }

    li {
      display: flex;
      gap: 10px;
      padding: 12px;

      border-radius: 8px;
      transition: 0.3s;
      cursor: pointer;

      @media (min-width: 1400px) {
        padding: 14px 16px;
      }

      @media (max-width: 1199px) {
        font-size: 14px;
        line-height: 18px;
        background: var(--dark-100);
        padding: 8px 12px;
      }

      &:not(:last-child) {
        @media (min-width: 1200px) {
          margin: 0 0 10px;
        }
        @media (min-width: 1400px) {
          margin: 0 0 16px;
        }
      }

      &:hover,
      &.active {
        background: var(--off-white);
        color: var(--secondary);

        img {
          filter: invert(20%) sepia(9%) saturate(2959%) hue-rotate(106deg)
            brightness(61%) contrast(105%);
        }

        &:nth-child(3) {
          background: var(--danger);
          color: var(--text-color);

          img {
            filter: invert(15%) sepia(43%) saturate(3%) hue-rotate(7deg)
              brightness(33%) contrast(93%);
          }
        }
      }

      img {
        width: 20px;
        height: 20px;
      }
    }

    .get-help {
      display: flex;

      @media (min-width: 1200px) {
        display: none;
      }
    }
  }

  .get-help {
    display: none;
    align-items: center;
    gap: 5px;
    background: #fff7cc;
    color: var(--text-color);
    border-radius: 8px;
    padding: 8px 12px;
    cursor: pointer;

    @media (min-width: 1200px) {
      display: flex;
      justify-content: center;
      padding: 20px 15px;
      border-radius: 16px;
    }

    @media (min-width: 1400px) {
      padding: 43px 25px;
    }

    .heading {
      display: block;
      @media (min-width: 1200px) {
        font-weight: 600;
      }
    }

    .text {
      display: none;
      font-size: 12px;
      line-height: 16px;
      font-weight: 500;

      @media (min-width: 1200px) {
        display: block;
      }
    }

    img {
      width: 20px;
      height: 20px;

      @media (min-width: 1200px) {
        width: 24px;
        height: 24px;
      }
    }
  }

  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const StyledPreference = styled.section`
  .user-info {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding-left: 16px;
    text-align: center;
    margin: 0 0 25px;

    @media (min-width: 768px) {
      align-items: flex-end;
      flex-direction: row;
      text-align: start;
      margin: 0 0 40px;
    }

    .user-name-holder {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 5px;
      margin: 0 0 10px;

      .user-name {
        display: block;
        font-size: 20px;
        line-height: 24px;
        font-weight: 500;
        
        @media (min-width: 576px) {
          font-weight: 600;
        }
      }

      img {
        width: 25px;
        height: 25px;
      }
    }

    .user-email {
      display: block;
      font-size: 14px;
      line-height: 18px;
      width:100%;
      text-align: center;
      
  }

  .account-heading {
    border-bottom: 1px solid var(--dark-100);
    text-align: center;
    padding: 0 0 16px;

    @media (min-width: 768px) {
      text-align: start;
    }

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      margin: 0 0 10px;

      @media (min-width: 576px) {
        font-weight: 600;
      }
    }

    .text {
      @media (max-width: 576px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  .preferences-holder {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    row-gap: 30px;
    padding: 20px 0;
    @media (min-width: 768px) {
      padding: 40px 0 20px;
    }

    .preference {
      width: 100%;
      padding: 0 10px;

      @media (min-width: 576px) {
        width: 50%;
        padding: 0 20px;
      }

      @media (min-width: 992px) {
        width: 33.33%;
      }

      @media (min-width: 1400px) {
        width: 25%;
      }

      .heading {
        display: block;
        font-weight: 400;
        margin: 0 0 10px;

        @media (min-width: 576px) {
          font-weight: 500;
        }
      }

      .text-holder {
        display: flex;
        align-items: center;
        gap: 10px;

        .text {
          display: block;
          flex-grow: 1;

          &.email {
            color: var(--dark-500);
          }

          &.status {
            color: var(--primary);
          }
        }

        .action-icon {
          cursor: pointer;
        }
      }
    }
  }
`;

export const StyledPreferenceHero = styled.section`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 310px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 15px;
  position: relative;
  z-index: 1;
  margin: 0 0 -40px;

  @media (min-width: 768px) {
    height: 200px;
    padding: 32px;
    margin: 0 0 -30px;
  }

  button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: #fff7cc;
    color: var(--text-color);
    padding: 10px 15px;
    cursor: pointer;
    border-radius: 8px;

    input {
      display: none;
    }

    label {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 14px;
      line-height: 18px;
      cursor: pointer;

      img {
        width: 16px;
        height: 16px;
      }

      span {
        display: none;

        @media (min-width: 768px) {
          display: block;
        }
      }
    }
  }

  .info {
    width: 100%;

    .heading {
      display: block;
      font-family: "Vina Sans", serif;
      font-size: 24px;
      line-height: 30px;
      color: var(--text-color);
      text-align: center;
      margin: 0 0 16px;

      @media (min-width: 768px) {
        font-size: 30px;
        line-height: 34px;
      }
    }

    br {
      display: block;
    }

    .user {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;

      .user-img {
        width: 40px;
        height: 40px;
        background: #98ff98;
        border-radius: 50%;
        overflow: hidden;

        img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
        }
      }

      .user-name {
        display: block;
        font-weight: 400;
        color: var(--text-color);
      }
    }
  }
`;

export const StyledNotifications = styled.div`
  .head {
    padding: 0 0 16px;
    border-bottom: 1px solid var(--dark-100);
    margin: 0 0 16px;

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      margin: 0 0 10px;
    }
  }

  .text {
    @media (max-width: 575px) {
      font-size: 14px;
      line-height: 18px;
    }
  }

  .col {
    padding: 15px 10px;
    border-bottom: 1px solid var(--dark);
    @media (min-width: 576px) {
      padding: 20px;
    }

    .heading {
      display: block;
      font-weight: 500;
      margin: 0 0 10px;

      @media (min-width: 576px) {
        margin: 0 0 16px;
      }
    }

    .col-content {
      display: flex;
      align-items: center;
      gap: 10px;

      .text {
        flex-grow: 1;
        margin: 0;
      }
    }
  }
`;

export const StyledAccountDeActive = styled.div`
  .head,
  .text-section,
  .balance-summary,
  .deactive-section {
    padding: 0 0 16px;
    border-bottom: 1px solid var(--dark-100);

    .heading {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: 500;
      margin: 0 0 10px;
    }

    .title {
      display: block;
      font-weight: 500;
      margin: 0 0 8px;

      @media (min-width: 576px) {
        margin: 0 0 16px;
      }

      span {
        color: #fff7cc;
      }
    }

    p,
    span {
      font-weight: 200;

      @media (max-width: 575px) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }

  .text-section {
    padding: 20px 0;
    @media (min-width: 576px) {
      padding: 35px 0 20px;
    }
  }

  .balance-summary {
    padding: 20px 0;

    .cards-holder {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;

      @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (min-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
      }

      .card {
        display: flex;
        justify-content: space-between;
        background: var(--dark-150);
        border: 1px dashed var(--dark-100);
        padding: 15px;
        border-radius: 16px;

        @media (min-width: 768px) {
          padding: 20px 25px;
        }

        .amount {
          display: block;
          font-size: 20px;
          line-height: 24px;
          font-weight: 700;
          margin: 0 0 6px;

          @media (min-width: 576px) {
            font-size: 24px;
            line-height: 28px;
            margin: 0 0 12px;
          }
        }
      }
    }
  }

  .deactive-section {
    padding: 20px 0;
    margin: 0 0 16px;
    overflow: hidden;

    > div {
      overflow: auto;
    }
    .tabs-holder {
      width: 470px;
      display: flex;
      gap: 16px;

      @media (min-width: 576px) {
        width: auto;
      }

      .tab {
        color: var(--white);
        background: var(--dark-150);
        padding: 10px 15px 10px 45px;
        border: 1px solid var(--dark-100);
        border-radius: 10px;
        transition: 0.3s;
        position: relative;
        cursor: pointer;

        .radio {
          position: absolute;
          top: 50%;
          left: 15px;
          transform: translateY(-50%);
          width: 18px;
          height: 18px;
          border: 1px solid var(--white);
          border-radius: 50%;

          &:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 13px;
            height: 13px;
            background: var(--text-color);
            border-radius: 50%;
            opacity: 0;
            transition: 0.3s;
          }
        }

        .text {
          font-weight: 400;
        }

        &:hover,
        &.active {
          background: #fff7cc;
          color: var(--text-color);

          .radio {
            border-color: var(--text-color);
          }
        }

        &.active {
          .radio {
            &::before {
              opacity: 1;
            }
          }
        }
      }
    }
  }

  .btn-holder {
    display: flex;
    justify-content: center;

    @media (min-width: 576px) {
      justify-content: flex-end;
    }
  }
  ::-webkit-scrollbar {
    height: 0;
  }
`;

export const StyledSettings = styled.div`
  border: 1px solid var(--dark-100);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  padding: 10px;
  margin-top: 10px;

  @media (min-width: 1400px) {
    padding: 20px;
  }

  h1 {
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    margin: 0;
  }

  .settings-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 0 0 16px;

    img {
      width: 24px;
      height: 24px;
    }
  }

  .content-holder {
    @media (min-width: 1200px) {
      display: flex;
      gap: 10px;
      height: calc(100vh - 200px);
    }

    .sidebar-holder {
      margin: 0 0 16px;
      @media (min-width: 1200px) {
        width: 20%;
        margin: 0;
      }
    }

    .content {
      border: 1px solid var(--dark-100);
      border-radius: 16px;
      backdrop-filter: blur(10px);
      padding: 16px 10px;
      overflow: auto;

      @media (min-width: 768px) {
        padding: 16px;
      }

      @media (min-width: 1200px) {
        width: 80%;
      }

      @media (min-width: 1400px) {
        padding: 20px;
      }
    }
    ::-webkit-scrollbar {
      width: 0 !important;
    }
  }
`;
