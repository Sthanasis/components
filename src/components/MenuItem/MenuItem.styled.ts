import { opacityHexPrefix } from 'src/utilities/opacityHexPrefix';
import { ThemeType } from 'src/utilities/theme';
import styled from 'styled-components';

interface IStyledMenuItemProps {
  isselected: boolean;
  theme?: ThemeType;
}

export const StyledMenuItem = styled.option`
  ${({ isselected, theme }: IStyledMenuItemProps) => ({
    display: 'flex',
    backgroundColor: isselected ? theme?.basicPalette.lightgray : 'transparent',
    justifyContent: 'flex-start',
    padding: theme?.padding,
    cursor: 'pointer',
  })};
  &:hover {
    background-color: ${({ theme, isselected }) =>
        !isselected && theme?.basicPalette.lightgray}${opacityHexPrefix[50]};
  }
`;
