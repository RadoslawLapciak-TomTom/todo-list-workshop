import styled from 'styled-components';

export const ItemContainer = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 4px 0;
  font-size: 18px;
  &:not(:last-child) {
    border-bottom: 1px solid red;
  }
`;
