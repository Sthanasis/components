import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { createContext, ReactNode, useContext, useState } from 'react';
import GlobalStyle, { defaultTheme, ThemeType } from 'src/utilities/theme';

interface IThemeContext {
  theme: ThemeType;
  setTheme: (t: ThemeType) => void;
}

const initialState: IThemeContext = {
  theme: defaultTheme,
  setTheme: () => null,
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
  const [currentTheme, setCurrentTHeme] = useState<ThemeType>({
    ...defaultTheme,
    // overide default theme with provided theme
    ...theme,
  });

  const setTheme = (t: ThemeType) => {
    setCurrentTHeme(t);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme }}>
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
      <GlobalStyle theme={currentTheme} />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
export default ThemeContext;
