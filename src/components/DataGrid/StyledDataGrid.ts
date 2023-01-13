import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
`;
export const Thead = styled.thead``;
export const Tbody = styled.tbody`
  ${() => ({
    overflow: 'auto',
    maxHeight: '100px',
  })}
`;
