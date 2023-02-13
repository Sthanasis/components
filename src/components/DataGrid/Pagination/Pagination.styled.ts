import { ThemeType } from 'src/utilities/theme';
import styled from 'styled-components';

export const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 20px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }: { theme: ThemeType }) =>
      theme.breakpoints.md}) {
    justify-content: center;
  }
`;
