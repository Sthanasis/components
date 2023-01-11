import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createContext, ReactNode, useContext } from 'react';
import GlobalStyle, { defaultTheme, ThemeType } from 'src/utilities/theme';

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
  const currentTheme = { ...defaultTheme, theme };
  return (
    <ThemeContext.Provider value={{ theme: currentTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
      <GlobalStyle theme={currentTheme} />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
