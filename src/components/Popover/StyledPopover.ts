import { fadeIn } from 'src/utilities/animations';
import { ThemeType } from 'src/utilities/theme';
import styled from 'styled-components';

export interface IStyledPopover {
  x?: number;
  y?: number;
  visible: boolean;
  width?: number;
  theme: ThemeType;
}

export const StyledPopover = styled.div`
  ${({ x, y, theme, width }: IStyledPopover) => ({
    position: 'absolute',
    zIndex: 10,
    padding: '10px 0',
    top: y,
    left: x,
    boxShadow: theme.shadow,
    backgroundColor: theme.basicPalette.bg,
    backgroundImage:
      'linear-gradient(rgba(255,255,255,.12),rgba(255,255,255,.12))',
    borderRadius: theme.borderRadius,
    width: width ?? 'max-content',
  })}
  animation: ${fadeIn} .2s linear;
`;
