import * as React from 'react';

import Layout from '../components/layout';
import Seo from '../components/seo';
import HeroProduct from '../components/hero-product/hero-product';

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroProduct />
  </Layout>
);

export default IndexPage;
