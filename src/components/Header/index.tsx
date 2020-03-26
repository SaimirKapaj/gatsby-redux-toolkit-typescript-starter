import React from 'react';
import { Link } from 'gatsby';

import * as Styled from './styles';

interface IProps {
  siteTitle: string;
}

const Header: React.FC<IProps> = ({ siteTitle }) => (
  <Styled.Header>
    <Styled.HeaderContainer>
      <Styled.Title>
        <Link to="/">{siteTitle}</Link>
      </Styled.Title>
    </Styled.HeaderContainer>
  </Styled.Header>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
