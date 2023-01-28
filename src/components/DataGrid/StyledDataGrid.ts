import { CSSProperties } from 'react';
import styled from 'styled-components';

export const TableContainer = styled.div`
  ${({
    width,
    height,
  }: {
    width?: CSSProperties['width'];
    height?: CSSProperties['height'];
  }) => ({
    overflow: 'auto',
    height: height ?? '100%',
    border: '1px solid lightgray',
    borderRadius: '4px',
    width: width ?? 'auto',
  })}
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
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
