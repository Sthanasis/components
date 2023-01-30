import styled from 'styled-components';
import { IStyledDataCellProps } from '../utilities/types';
export const StyledHeaderCell = styled.div`
  ${({ withBorder, width = 100, height, theme }: IStyledDataCellProps) => ({
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
    width: `${width}px`,
    height: height ?? 'auto',
    borderRight: withBorder
      ? `2px solid ${theme.basicPalette.lightgray}`
      : undefined,
    textAlign: 'left',
    padding: '15px 5px',
    textTransform: 'capitalize',
  })}
`;

export const HeaderCellContainer = styled.div`
  ${() => ({
    display: 'flex',
    height: '25px',
    alignItems: 'center',
    cursor: 'pointer',
  })}
`;
