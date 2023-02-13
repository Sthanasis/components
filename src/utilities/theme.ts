import roboto from 'src/assets/fonts/Roboto-Regular.ttf';
import { createGlobalStyle } from 'styled-components';

export const defaultTheme = {
  borderRadius: '4px',
  palette: {
    common: {
      main: '#ffffff',
      contrast: '#222831',
    },
    primary: {
      main: '#4d148c',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#e06934',
      contrastText: '#ffffff',
    },
  },
  fontFace: roboto,
  basicPalette: {
    error: '#c73e1d',
    bg: '#fff',
    text: '#616161',
    inputText: 'black',
    lightgray: '#E0E0E0',
  },
  shadow:
    'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;',
  fontSize: '1rem',
  padding: '10px 16px',
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    xxl: '1536px',
  },
};

export type ThemeType = typeof defaultTheme;

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'roboto';
    src: url(${({ theme }: { theme: ThemeType }) =>
      theme.fontFace}) format('truetype');
  }
  :root {
    font-family: 'roboto', sans-serif;
    color: ${({ theme }: { theme: ThemeType }) => theme.basicPalette.text};
  }
  body {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
`;
export default GlobalStyle;
