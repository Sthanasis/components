export const defaultTheme = {
  borderRadius: "4px",
  palette: {
    common: {
      main: "#ffffff",
      contrast: "#222831",
    },
    primary: {
      main: "#726a95",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#709fb0",
      contrastText: "#ffffff",
    },
  },
  fontSize: "1rem",
  padding: "10px 16px",
};
export type ThemeType = typeof defaultTheme;
