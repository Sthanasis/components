import { IBaseProps, InputElementType } from 'src/types/props';
import styled, { CSSObject } from 'styled-components';
import { ThemeType } from 'theme';

export interface IInputStaticProps extends IBaseProps {
  type?: InputElementType;
  placeholder?: string;
  fullwidth?: boolean;
  value?: string | number;
  defaultValue?: string | number;
  name?: string;
  theme: ThemeType;
  required?: boolean;
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
    } as CSSObject)
);
