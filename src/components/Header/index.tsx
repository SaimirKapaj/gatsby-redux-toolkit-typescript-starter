import React from 'react';
import { Link } from 'gatsby';

import { HeaderBg, HeaderContainer, Title } from './styles';

interface Props {
  siteTitle: string;
}

/**
 * Header component
 *
 * @param {Props} props
 */
const Header: React.FC<Props> = ({ siteTitle }) => (
  <HeaderBg>
    <HeaderContainer>
      <Title>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </Title>
    </HeaderContainer>
  </HeaderBg>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
