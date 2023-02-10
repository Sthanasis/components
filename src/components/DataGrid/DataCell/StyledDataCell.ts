import styled from 'styled-components';
import { IStyledDataCellProps } from 'src/types';

export const StyledDataCell = styled.div`
  ${({ width = 100, withBorder, theme }: IStyledDataCellProps) => ({
    minWidth: typeof width === 'string' ? width : `${width}px`,
    maxWidth: typeof width === 'string' ? width : `${width}px`,
    width: typeof width === 'string' ? width : `${width}px`,
    height: '100%',
    textAlign: 'left',
    alignItems: 'center',
    padding: 5,
    display: 'flex',
    borderBottom: withBorder
      ? `1px solid ${theme.basicPalette.lightgray}`
      : undefined,
  })}
`;
