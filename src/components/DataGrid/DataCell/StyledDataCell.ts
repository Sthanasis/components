import styled from 'styled-components';
import { IStyledDataCellProps } from '../utilities/types';

export const StyledDataCell = styled.div`
  ${({ width = 100, height }: IStyledDataCellProps) => ({
    minWidth: `${width}px`,
    maxWidth: `${width}px`,
    width: `${width}px`,
    height: height ?? 'auto',
    textAlign: 'left',
    padding: 5,
    display: 'flex',
  })}
`;
