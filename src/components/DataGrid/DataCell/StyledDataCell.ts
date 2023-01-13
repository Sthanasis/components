import styled from 'styled-components';

interface IStyledDataCellProps {
  withBorder: boolean;
  width?: number | string;
  height?: number | string;
}

export const TD = styled.td`
  ${({ withBorder, width, height }: IStyledDataCellProps) => ({
    minWidth: width,
    maxWidth: width,
    height: height ?? 'auto',
    borderRight: withBorder ? '2px solid grey' : undefined,

    alignItems: 'center',
    padding: 5,
  })}
`;
export const TH = styled.th`
  ${({ withBorder, width, height }: IStyledDataCellProps) => ({
    minWidth: width,
    maxWidth: width,
    height: height ?? 'auto',
    borderRight: withBorder ? '2px solid grey' : undefined,

    alignItems: 'center',
    padding: 5,
  })}
`;
