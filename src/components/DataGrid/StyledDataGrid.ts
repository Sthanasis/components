import { ThemeType } from 'src/utilities/theme';
import { CSSProperties } from 'react';
import styled from 'styled-components';

interface ITableProps {
  height: number;
  width: CSSProperties['width'];
  theme: ThemeType;
}

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
    width: width ?? 'auto',
  })}
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }: ITableProps) => theme.basicPalette.lightgray};
  border-radius: 4px;
  height: ${({ height }: ITableProps) => height}px;
  width: ${({ width }: ITableProps) => width};
`;

export const TableBody = styled.div`
  ${() => ({
    overflow: 'hidden',
    position: 'relative',
  })}
`;
