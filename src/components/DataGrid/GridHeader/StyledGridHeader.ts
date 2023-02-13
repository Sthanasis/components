import { ThemeType } from 'src/utilities/theme';
import styled from 'styled-components';

export const StyledHeaderList = styled.div`
  ${() => ({ display: 'flex' })}
`;

export const StyledContainer = styled.div`
  ${({ theme }: { theme: ThemeType }) => ({
    borderBottom: `1px solid ${theme.basicPalette.lightgray}`,
  })}
`;
