import { IBaseProps } from 'src/types/props';
import styled from 'styled-components';
import type { ThemeVariantType, ButtonType } from '../../types/types';
import type { ThemeType } from '../../assets/theme';
import { opacityHexPrefix } from '../../assets/opacityHexPrefix';

interface IStyledButtonProps {
  theme: ThemeType;
  variant: ThemeVariantType;
  elevated: boolean;
  buttonType: ButtonType;
  fullwidth: boolean;
  icon: boolean;
}

export const StyledButton = styled.button`
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: ${({ theme }: IStyledButtonProps) => theme.fontSize};
  padding: ${({ theme, icon }: IStyledButtonProps) =>
    icon ? '10px' : theme.padding};
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
  border-radius: ${({ theme, icon }: IStyledButtonProps) =>
    icon ? '50%' : theme.borderRadius};
  ${({ theme, variant, elevated, buttonType }: IStyledButtonProps) => {
    const mainColor = theme.palette[variant].main;
    switch (buttonType) {
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
