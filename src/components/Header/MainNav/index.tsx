import React, { useState } from 'react';
import { Link } from 'gatsby';

import { MainNavWrapper, Nav, NavItem, OpenNavButton, CloseNavButton } from './styles';
import Icon from 'utils/Icon';

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <MainNavWrapper>
      <OpenNavButton onClick={() => setOpen(true)}>
        <Icon icon="bars" />
      </OpenNavButton>
      <Nav open={open}>
        <CloseNavButton onClick={() => setOpen(false)}>
          <Icon icon="times" />
        </CloseNavButton>
        <NavItem>
          <Link to="/" activeClassName="active">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contact/" activeClassName="active">
            Contact Us
          </Link>
        </NavItem>
      </Nav>
    </MainNavWrapper>
  );
};

export default MainNav;
