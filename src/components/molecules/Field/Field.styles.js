import styled from 'styled-components';

export const Error = styled.span`
  text-align: left;
  display: block;
  color: var(--danger);
  min-height: 26px;
  height: auto;
  opacity: 1;
  font-size: 12px;
  line-height: 16px;
  padding-top: 3px;
  /* margin-bottom: 10px; */
  &:first-letter {
    text-transform: uppercase;
  }
`;

export const InputHolder = styled.div`
  @media (min-width: 576px) {
    position: relative;
  }
  @media (max-width: 575px) {
    position: ${({ $searchField }) => !$searchField && 'relative'};
  }
`;
