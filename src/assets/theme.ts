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
  basicPalette: {
    error: '#c73e1d',
    bg: '#fff',
    text: '#616161',
  },
  fontSize: '1rem',
  padding: '10px 16px',
};
export type ThemeType = typeof defaultTheme;
