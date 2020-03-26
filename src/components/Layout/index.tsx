import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { useSelector } from 'react-redux';
import { uiSelector } from 'state/slices/ui';

import Header from 'components/Header';

import GlobalStyles from 'styles/globalStyles';
import * as Theme from 'styles/theme';
import * as Styled from './styles';

interface IProps {
  children: React.ReactNode;
}

const Layout: React.FC<IProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { themeMode } = useSelector(uiSelector);

  return (
    <ThemeProvider theme={Theme[themeMode]}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Styled.LayoutContainer>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </Styled.LayoutContainer>
    </ThemeProvider>
  );
};

export default Layout;
