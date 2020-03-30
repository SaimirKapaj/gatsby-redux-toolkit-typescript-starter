import { createGlobalStyle } from 'styled-components';
import { ThemeType } from 'assets/styles/theme';

export default createGlobalStyle<{ theme: ThemeType }>`
  body {
    margin: 0;
    color: ${({ theme }) => theme.colors.secondary};
    background: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: rebeccapurple
  }
`;
