import { ThemeType } from 'src/utilities/theme';
import { CSSProperties } from 'react';
import styled from 'styled-components';

interface ITableProps {
  height: number;
  width: CSSProperties['width'];
  theme: ThemeType;
}

export const TableContainer = styled.div`
  ${({ theme, pagination }: { theme: ThemeType; pagination: boolean }) => ({
    overflow: 'auto',
    height: '100%',
    width: 'auto',
    borderBottom: pagination
      ? `1px solid ${theme.basicPalette.lightgray}`
      : undefined,
  })}
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }: ITableProps) => theme.basicPalette.lightgray};
  border-radius: 4px;
  height: ${({ height }: ITableProps) => height}px;
  width: fit-content;
  max-width: 100%;
  overflow: hidden;
`;

export const VirtualBody = styled.div`
  ${() => ({
    position: 'relative',
  })}
`;
