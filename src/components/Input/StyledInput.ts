import { IBaseProps } from 'src/types';
import styled, { CSSObject } from 'styled-components';
import { ThemeType } from 'src/utilities/theme';

interface IInputStaticProps extends IBaseProps {
  theme: ThemeType;
  fullwidth: boolean;
}

export const StyledInput = styled.input(
  ({ fullwidth, theme }: IInputStaticProps) =>
    ({
      padding: theme.padding,
      width: fullwidth ? '-webkit-fill-available' : undefined,
      paddingRight: '25px',
      fontSize: theme.fontSize,
      textDecoration: 'none',
      backgroundColor: 'transparent',
      border: 'none',
      outline: 'none',
      borderRadius: theme.borderRadius,
      display: 'inline-block',
      position: 'relative',
      color: theme.basicPalette.inputText || theme.basicPalette.text,
    } as CSSObject)
);
