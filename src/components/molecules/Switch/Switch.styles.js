import styled from "styled-components";

export const ToggleSwitchStyle = styled.div`
  display: flex;
  align-items: center;
  input {
    display: none;
  }
  .title {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    user-select: none;
    margin-right: 8px;
    cursor: pointer;
  }
  .switch {
    display: inline-block;
    position: relative;
    width: 35px;
    height: 20px;
    border-radius: 20px;
    background: #414141;
    transition: background 0.28s cubic-bezier(0.4, 0, 0.2, 1);
    vertical-align: middle;
    cursor: pointer;
    margin: 0;
  }
  .switch::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 3px;
    width: 12px;
    height: 12px;
    border: 2px solid #181818;
    border-radius: 50%;
    box-shadow: 0px 24px 52px -14px rgba(29, 41, 57, 0.16);
    transition: left 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      background 0.28s cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28),
      0 0 0 20px rgba(128, 128, 128, 0.1);
  }
  input:checked + .switch {
    background: var(--off-white);
  }
  input:checked + .switch::before {
    left: 19px;
    background: var(--primary);
  }
  input:checked + .switch:active::before {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.28), 0 0 0 20px rgba(0, 150, 136, 0.2);
  }
`;
