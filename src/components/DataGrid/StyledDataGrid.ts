import styled from 'styled-components';

export const TableContainer = styled.div`
  ${() => ({
    overflow: 'auto',
    height: '100%',
    border: '1px solid lightgray',
    borderRadius: '4px',
    width: 'max-content',
  })}
`;

export const Table = styled.table`
  border-collapse: collapse;
`;
export const Thead = styled.thead`
  position: sticky;
  top: 0;
  background-color: white;
  box-shadow: 0px 2px 5px -2px rgba(0, 0, 0, 0.4);
`;
export const Tbody = styled.tbody`
  ${() => ({
    overflow: 'auto',
    maxHeight: '100px',
  })}
`;
