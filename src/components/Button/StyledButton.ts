import styled from 'styled-components';
import type { ThemeVariantType, ButtonType } from 'src/types/types';
import type { ThemeType } from 'src/utilities/theme';
import { opacityHexPrefix } from 'src/utilities/opacityHexPrefix';

interface IStyledButtonProps {
  theme: ThemeType;
  color: ThemeVariantType;
  elevated: boolean;
  variant: ButtonType;
  fullwidth: boolean;
  icon: boolean;
  contrast: boolean;
  rounded?: boolean;
}

export const StyledButton = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: ${({ theme }: IStyledButtonProps) => theme.fontSize};
  padding: ${({ theme, icon }: IStyledButtonProps) => {
    if (icon) return '10px';
    return theme.padding;
  }};
  ${({ rounded }: IStyledButtonProps) => ({
    maxWidth: rounded ? '33px' : undefined,
    height: rounded ? '33px' : undefined,
  })};
  overflow: hidden;
  cursor: pointer;
  display: flex;
  transition: 0.2s;
  align-items: center;
  justify-content: center;
  position: relative;
  text-decoration: none;
  border: none;
  outline: none;
  background-color: transparent;
  border-radius: ${({ theme, icon, rounded }: IStyledButtonProps) =>
    icon || rounded ? '50%' : theme.borderRadius};
  ${({ theme, color, elevated, variant }: IStyledButtonProps) => {
    const mainColor = theme.palette[color].main;
    switch (variant) {
      case 'contained':
        return `
            background-color: ${mainColor};
            color: #fff;
            &:hover {
                background-color: ${mainColor}${opacityHexPrefix[80]};
            }
            &:disabled {
                background-color: gray;
                color: lightgray;
                cursor: not-allowed;
            }
            box-shadow: ${elevated ? '0px 2px 4px rgba(0, 0, 0, 0.4)' : 'none'};
        `;
      case 'outlined':
        return `
          color:${mainColor};
          border-width: 1.5px;
          border-style: solid;
          border-color: ${mainColor}${opacityHexPrefix[50]};
          &:hover {
            border-color: ${mainColor};
            background-color: ${mainColor}${opacityHexPrefix[5]};
          }
          &:disabled {
            color: lightgray;
            border-color: lightgray;
            cursor: not-allowed;
            background-color: initial;
          }  
        `;
      default:
        return `
            color:${mainColor};
            &:hover {
                background-color: ${mainColor}${opacityHexPrefix[5]};
            }
            &:disabled {
                color: lightgray;
                cursor: not-allowed;
                background-color: initial;
            }
        `;
    }
  }}
`;
