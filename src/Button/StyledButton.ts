import styled from "styled-components";
import type { VariantType } from "../../types/types";
import type { ThemeType } from "../../theme";
import opacity from "../assets/opacityHexPrefix";

interface IProps {
  theme: ThemeType;
  variant: VariantType;
  elevated: boolean;
  color: "primary" | "secondary" | "common";
}

export const ButtonContainer = styled.button`
  font-size: ${({ theme }: IProps) => theme.fontSize};
  padding: ${({ theme }: IProps) => theme.padding};
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
  border-radius: ${({ theme }: IProps) => theme.borderRadius};
  ${({ theme, variant, elevated, color }: IProps) => {
    const mainColor = theme.palette[color].main;

    switch (variant) {
      case "contained":
        return `
            background-color: ${mainColor};
            color: #fff;
            &:hover {
                background-color: ${mainColor}${opacity[80]};
            }
            box-shadow: ${elevated ? "0px 2px 4px rgba(0, 0, 0, 0.4)" : "none"};
        `;
      case "outlined":
        return `
          border-width: 1.5px;
          border-style: solid;
          border-color: ${mainColor}${opacity[50]};
          &:hover {
            border-color: ${mainColor};
            background-color: ${mainColor}${opacity[5]};
          }  
        `;
      default:
        return `
            color:${mainColor};
            &:hover {
                background-color: ${mainColor}${opacity[5]};
            }
        `;
    }
  }}
`;
