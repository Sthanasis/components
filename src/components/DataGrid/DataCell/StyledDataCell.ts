import styled from 'styled-components';
import { IStyledDataCellProps } from '../utilities/types';

export const TD = styled.td`
  ${({ withBorder, width, height }: IStyledDataCellProps) => ({
    minWidth: width,
    maxWidth: width,
    height: height ?? 'auto',
    borderRight: withBorder ? '2px solid grey' : undefined,
    textAlign: 'left',
    padding: 5,
  })}
`;
