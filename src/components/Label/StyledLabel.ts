import styled, { css } from 'styled-components';
import { ThemeType } from 'src/utilities/theme';
import { slideTop } from 'src/utilities/animations';

import { TextfieldVariant, ThemeVariantType } from 'src/types/types';
import { opacityHexPrefix } from 'src/utilities/opacityHexPrefix';

interface ILabelProps {
  theme: ThemeType;
  hasValue: boolean;
  hasFocus: boolean;
  hasError: boolean;
  variant: TextfieldVariant;
  color: ThemeVariantType;
  withIcon: boolean;
}

export const StyledLabelContainer = styled.div(
  ({
    theme,
    hasValue,
    hasFocus,
    hasError,
    variant,
    color,
    withIcon,
  }: ILabelProps) => {
    let style = css`
      position: absolute;
      white-space: nowrap;
      transition: 0.2s;
      animation: ${hasFocus ? slideTop : undefined};
      transform: ${hasFocus || hasValue ? 'scale(0.75)' : undefined};
      left: ${() => {
        if (hasFocus || hasValue) {
          return '5px';
        } else {
          if (withIcon) {
            return '30px';
          }
          return undefined;
        }
      }};
      padding: ${hasFocus || hasValue ? '0' : undefined};
      & > label {
        font-weight: 400;
        transition: 0.2s;
        letter-spacing: 0.5px;
        position: absolute;
        margin: 0;
        line-height: 1.4em;
        padding: 0px 5px;
        color: ${theme.basicPalette.text}${opacityHexPrefix[80]};
      }
    `;
    if (variant === 'outlined') {
      style = css`
        ${style}
        top: ${hasFocus || hasValue ? '-10px' : '14px'};

        & > label {
          background-color: ${hasValue || hasFocus
            ? theme.basicPalette.bg
            : undefined};
          color: ${() => {
            if (hasError) {
              return theme.basicPalette.error;
            }
            if (hasFocus) {
              return theme.palette[color].main;
            }
            return;
          }};
        }
      `;
    }
    if (variant === 'filled') {
      style = css`
        ${style}
        top: ${hasFocus || hasValue ? '0px' : '14px'};

        & > label {
          color: ${hasError
            ? `${theme.basicPalette.error}!important`
            : undefined};
          color: ${hasFocus ? theme.palette[color].main : undefined};
        }
      `;
    }
    return style;
  }
);
