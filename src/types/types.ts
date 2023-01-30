import { ThemeType } from 'src/utilities/theme';

export type ButtonType = 'contained' | 'outlined' | 'text';
export type ThemeVariantType = 'primary' | 'secondary';
export interface IThemeProp {
  theme: ThemeType;
}
