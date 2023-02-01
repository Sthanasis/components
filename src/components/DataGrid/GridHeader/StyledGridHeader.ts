import { ThemeType } from './../../../utilities/theme';
import styled from 'styled-components';

export const StyledGridHeader = styled.div`
  ${() => ({ display: 'flex' })}
`;

export const StyledContainer = styled.div`
  ${({ theme }: { theme: ThemeType }) => ({
    borderBottom: `1px solid ${theme.basicPalette.lightgray}`,
  })}
`;
