/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './header/header';
import '../global-styles.scss';
import './layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="layout">
      <Header />
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">© Команда Superlive</footer>
    </div>
  );
};

export default Layout;
