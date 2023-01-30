import { IThemeProp } from 'src/types/types';
import styled from 'styled-components';
import { ROW_HEIGHT } from '../utilities/constants';

interface IStyledDataRow extends IThemeProp {
  noBorder: boolean;
}

export const StyledDataRow = styled.div`
  ${({ theme, noBorder }: IStyledDataRow) => ({
    height: ROW_HEIGHT,
    display: 'flex',
    alignItems: 'center',
    borderBottom: noBorder
      ? undefined
      : `1px solid ${theme.basicPalette.lightgray}`,
  })}
`;
