import styled from 'styled-components';

export const ToDosListContainer = styled.ol`
  list-style-type: none;
  margin: 16px 0;
  width: 100%;
  padding: 0;
`;

export const ToDosContainer = styled.div`
  width: 400px;
`;

export const ToDoContent = styled.span<{ finished: boolean }>`
  text-decoration: ${({ finished }) => (finished ? 'line-through' : 'none')};
`;
