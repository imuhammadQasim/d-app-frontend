import styled from 'styled-components';

export const PaginationList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px 0 0;

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .page-input {
    height: 35px !important;
    width: 35px !important;
    padding: 5px !important;
    text-align: center;
    color: white;
    background: ${({ theme }) => theme?.light?.primary};
    border: 0px;
    border-radius: 20px;
  }
  .tooltip-holder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }
`;

export const PaginationButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(246, 248, 250, 1);

  .icon {
    display: block;
    font-size: 16px;
    line-height: 1;
    color: rgba(49, 49, 49, 1);
  }
`;
