import { createGlobalStyle } from 'styled-components';
import { TTheme } from 'styles/theme';

export default createGlobalStyle<{ theme: TTheme }>`
  body {
    font-family: sans-serif;
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: rebeccapurple
  }
`;
