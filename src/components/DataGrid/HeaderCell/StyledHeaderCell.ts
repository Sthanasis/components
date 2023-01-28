import styled from 'styled-components';
import { IStyledDataCellProps } from '../utilities/types';
export const TH = styled.th`
  ${({ withBorder, width, height }: IStyledDataCellProps) => ({
    minWidth: width,
    maxWidth: width,
    height: height ?? 'auto',
    borderRight: withBorder ? '2px solid grey' : undefined,
    textAlign: 'left',
    padding: '15px 5px',
    textTransform: 'capitalize',
    cursor: 'pointer',
  })}
`;

export const THContainer = styled.div`
  ${() => ({
    display: 'flex',
    height: '25px',
    alignItems: 'center',
  })}
`;
