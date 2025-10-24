import styled from "styled-components";

export const HeadHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 15px;
`;

export const Arrows = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  line-height: 1;
  width: 25px;
  height: 25px;
`;

export const Select = styled.select`
  border: none;
  background: none;
  outline: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  text-align: center;
  font-family: var(--base-font-sans-serif);
  option {
    font-size: 12px;
  }
`;

export const SelectHolder = styled.div`
  display: flex;
  align-items: center;
  select {
    margin: 0 10px;
  }
`;
