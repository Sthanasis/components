import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createContext, ReactNode, useContext } from 'react';
import GlobalStyle, { defaultTheme, ThemeType } from 'src/assets/theme';

interface IThemeContext {
  theme: ThemeType;
}

const initialState: IThemeContext = {
  theme: defaultTheme,
};

const ThemeContext = createContext<IThemeContext>(initialState);

interface IThemeProviderProps {
  children: ReactNode;
  theme?: ThemeType;
}

export const ThemeProvider = ({
  children,
  theme = defaultTheme,
}: IThemeProviderProps) => {
  return (
    <ThemeContext.Provider value={{ theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
      <GlobalStyle theme={theme} />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
