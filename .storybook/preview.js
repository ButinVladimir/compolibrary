import { ThemeProvider } from 'styled-components';

import { light } from './light-theme';
import { dark } from './dark-theme';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    desciption: 'Custom theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
};

const themes = {
  light,
  dark,
};
const getTheme = theme => themes[theme];

const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);

  return (
    <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
  );
};

export const decorators = [withThemeProvider];