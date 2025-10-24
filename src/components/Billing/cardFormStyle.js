import styled from "styled-components";

export const CardFormStyle = styled.div`
  .card-element {
    padding: 13px;
    background-color: #4b4b4b;
    border-radius: 10px;
    margin-bottom: 15px;
    color: #fff !important;
    font-size: 13px;
    margin-top: 7px;
    width: 100%;
  }
  .stripe-input {
    width: 100%;
  }

  input::placeholder {
    font-size: 12px;
    font-weight: 400;
    color: white !important;
  }
  .two-col.expiry-col {
    display: flex;
    gap: 15px;
  }
`;
