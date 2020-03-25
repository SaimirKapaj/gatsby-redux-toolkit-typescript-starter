import React from 'react';
import { Link } from 'gatsby';
import { useSelector, useDispatch } from 'react-redux';
import { uiSelector, toggleThemeMode } from 'state/slices/ui';

import Layout from 'components/Layout';
import Image from 'components/Image';
import SEO from 'components/SEO';

const IndexPage: React.FC = () => {
  const { themeMode } = useSelector(uiSelector);
  const dispatch = useDispatch();

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Theme mode: {themeMode}</h1>
      <div>
        <button onClick={() => dispatch(toggleThemeMode())}>Switch</button>
      </div>

      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
};

export default IndexPage;
