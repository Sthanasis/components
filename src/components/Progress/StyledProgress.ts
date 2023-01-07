import styled, { css } from 'styled-components';
import {
  indeterminate_first,
  indeterminate_second,
} from '../../utilities/animations';
import { ThemeType } from 'src/utilities/theme';
import { opacityHexPrefix } from '../../utilities/opacityHexPrefix';
import { spin } from '../../utilities/animations';
import { ThemeVariantType } from 'src/types/types';

interface IProps {
  theme: ThemeType;
  type: 'spinner' | 'linear';
  color: ThemeVariantType;
}

export const StyledProgress = styled.div(
  ({ type = 'spinner', theme, color }: IProps) => {
    if (type === 'spinner') {
      return css`
        height: ${theme.fontSize};
        width: ${theme.fontSize};
        border: 0.25rem solid ${theme.palette[color].main}${opacityHexPrefix[50]};
        border-top: 0.25rem solid ${theme.palette[color].main};
        border-radius: 50%;
        animation: ${spin} 2s infinite linear;
      `;
    }
    return css`
      overflow: hidden;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      height: 5px;
      background-color: ${theme.palette[color].main}${opacityHexPrefix[50]};
      & div {
        position: relative;
        width: 100%;
        height: 100%;
        &:before {
          content: '';
          position: absolute;
          height: 100%;
          animation: ${indeterminate_first} 1.5s infinite ease-out;
          background-color: ${theme.palette[color].main};
        }
        &:after {
          content: '';
          position: absolute;
          height: 100%;
          animation: ${indeterminate_second} 1.5s infinite ease-in;
          background-color: ${theme.palette[color].main}${opacityHexPrefix[80]};
        }
      }
    `;
  }
);
