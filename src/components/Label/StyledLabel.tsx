import styled, { css } from 'styled-components';
import { ThemeType } from 'src/assets/theme';
import { slideTop } from '../../../styled/animations';
import { TextfieldVariant } from '../TextField/TextField';
import { ThemeVariantType } from 'src/types/types';

interface ILabelProps {
  theme: ThemeType;
  hasValue: boolean;
  hasFocus: boolean;
  hasError: boolean;
  variant: TextfieldVariant;
  color: ThemeVariantType;
}

export const StyledLabelContainer = styled.div(
  ({ theme, hasValue, hasFocus, hasError, variant, color }: ILabelProps) => {
    let style = css`
      position: absolute;
      white-space: nowrap;
      transition: 0.2s;
      animation: ${hasFocus ? slideTop : undefined};
      transform: ${hasFocus || hasValue ? 'scale(0.75)' : undefined};
      left: ${hasFocus || hasValue ? '5px' : undefined};
      padding: ${hasFocus || hasValue ? '0' : undefined};
      & > label {
        font-weight: 400;
        letter-spacing: 0.5px;
        position: absolute;
        margin: 0;
        line-height: 1.4em;
        padding: 0px 5px;
        color: #959595;
      }
    `;
    if (variant === 'outlined') {
      style = css`
        ${style}
        top: ${hasFocus || hasValue ? '-10px' : '12px'};
        & > label {
          background-color: ${hasValue || hasFocus
            ? theme.basicPalette.bg
            : undefined};
          color: ${hasFocus ? theme.palette[color].main : undefined};
        }
      `;
    }
    return style;
  }
);
