import styled from 'styled-components';

interface IStyledDataCellProps {
  withBorder: boolean;
  width: number | string;
  height: number | string;
}

export const StyledDataCell = styled.div`
  ${({ withBorder, width, height }: IStyledDataCellProps) => ({
    minWidth: width,
    maxWidth: width,
    height: height ?? 'auto',
    borderRight: withBorder ? '2px solid grey' : undefined,
    display: 'flex',
    alignItems: 'center',
    padding: 5,
  })}
`;
