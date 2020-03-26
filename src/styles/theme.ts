import { colors } from './variables';

interface ITheme {
  colors: {
    primary: string;
    secondary: string;
  };
}

export const light: ITheme = {
  colors: {
    primary: colors.white,
    secondary: colors.black
  }
};

export const dark: ITheme = {
  colors: {
    primary: colors.black,
    secondary: colors.white
  }
};

export type TTheme = typeof light | typeof dark;
