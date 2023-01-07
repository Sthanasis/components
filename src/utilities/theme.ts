import roboto from 'src/assets/fonts/Roboto-Regular.ttf';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: roboto;
    src: url(${({ theme }: { theme: ThemeType }) =>
      theme.fontFace}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  :root {
    font-family: roboto;
    color: ${({ theme }: { theme: ThemeType }) => theme.basicPalette.text};
  }
  body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
  }
`;

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
  },
  shadow:
    'rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;',
  fontSize: '1rem',
  padding: '10px 16px',
};

export type ThemeType = typeof defaultTheme;
export default GlobalStyle;
