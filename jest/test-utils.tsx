import { render as tlRender } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'src/utilities/theme';

const render = (ui: ReactNode, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return {
    user: userEvent.setup(),
    ...tlRender(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>),
  };
};
export * from '@testing-library/react';
export { render };
