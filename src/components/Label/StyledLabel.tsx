import styled, { css } from 'styled-components';
import { ThemeType } from 'src/assets/theme';
import { slideTop } from '../../../styled/animations';

interface ILabelProps {
  theme: ThemeType;
  hasValue: boolean;
  hasFocus: boolean;
}

export const StyledLabelContainer = styled.div(
  ({ theme, hasValue, hasFocus }: ILabelProps) => {
    return css`
      position: absolute;
      top: 12px;
      white-space: nowrap;
      transition: 0.2s;
      ${() =>
        hasFocus &&
        `
        animation: ${slideTop};
        left: 0;
        padding: 0;
        transform: scale(.75);
      `}
      & label {
        font-weight: 400;
        letter-spacing: 0.5px;
        position: absolute;
        margin: 0;
        line-height: 1.4em;
        padding: 0px 10px;
        color: #959595;
      }
    `;
  }
);
