import { ThemeType } from 'src/assets/theme';
import { ThemeVariantType } from 'src/types/types';
import styled from 'styled-components';
import { TextfieldVariant } from './TextField';

interface IStyledTextFieldProps {
  variant: TextfieldVariant;
  contrast: boolean;
  fullwidth: boolean;
  hasError: boolean;
  theme: ThemeType;
  hasFocus: boolean;
  color: ThemeVariantType;
}

export const StyledTextField = styled.div(
  ({
    theme,
    fullwidth,
    variant,
    hasError,
    hasFocus,
    color,
  }: IStyledTextFieldProps) => {
    let style = `
        position: relative;
        width: fit-content;
        border-radius: ${theme.borderRadius};
        border-style: solid;
        line-height: 1.4em;
        transition: .2s;
        padding: 5px;
        margin: 10px 0;
        width: ${fullwidth ? '-webkit-fill-available' : undefined};
   `;
    if (variant === 'outlined') {
      style = `
            ${style}
            border-width: 1px;
            border-color: rgba(0,0,0,.4);
            &:hover {
              border-color: ${
                hasFocus ? theme.palette[color].main : 'rgba(0,0,0,1)'
              };
            }
            border: ${
              hasError ? `2px solid ${theme.basicPalette.error}` : undefined
            };
            border-color: ${
              hasFocus ? `${theme.palette[color].main}!important` : undefined
            };

        `;
    }
    if (variant === 'filled') {
      style = `
            ${style}
            border: none;
            padding: 10px 5px 0px 5px;
            border-bottom: ${
              hasError ? `2px solid ${theme.basicPalette.error}` : undefined
            };
            background-color: rgba(0,0,0,.06);
            &:hover {
              background-color: rgba(0,0,0,.09);
            }
        `;
    }
    return style;
  }
);
