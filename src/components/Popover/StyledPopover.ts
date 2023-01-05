import { fadeIn } from 'src/assets/animations';
import { ThemeType } from 'src/assets/theme';
import styled from 'styled-components';

export interface IStyledPopover {
  x?: number;
  y?: number;
  visible: boolean;
  theme: ThemeType;
}

export const StyledPopover = styled.div`
  ${({ x, y, theme }: IStyledPopover) => ({
    position: 'absolute',
    zIndex: 10,
    padding: 16,
    top: y,
    left: x,
    boxShadow: theme.shadow,
    backgroundColor: theme.basicPalette.bg,
    backgroundImage:
      'linear-gradient(rgba(255,255,255,.12),rgba(255,255,255,.12))',
    borderRadius: theme.borderRadius,
    width: 'max-content',
  })}
  animation: ${fadeIn} .2s linear;
`;
