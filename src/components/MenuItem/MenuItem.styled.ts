import { opacityHexPrefix } from 'src/utilities/opacityHexPrefix';
import { ThemeType } from 'src/utilities/theme';
import styled from 'styled-components';

interface IStyledMenuItemProps {
  selected: boolean;
  theme?: ThemeType;
}

export const StyledMenuItem = styled.div`
  ${({ selected, theme }: IStyledMenuItemProps) => ({
    display: 'flex',
    backgroundColor: selected ? theme?.basicPalette.lightgray : 'transparent',
    justifyContent: 'center',
    padding: theme?.padding,
    cursor: 'pointer',
  })};
  &:hover {
    background-color: ${({ theme, selected }) =>
        !selected && theme?.basicPalette.lightgray}${opacityHexPrefix[50]};
  }
`;
