import { colors } from './variables';

interface Theme {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const light: Theme = {
  colors: {
    primary: colors.white,
    secondary: colors.black
  }
};

export const dark: Theme = {
  colors: {
    primary: colors.black,
    secondary: colors.white
  }
};

export type ThemeType = typeof light | typeof dark;
