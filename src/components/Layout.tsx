/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { TiSocialInstagram, TiAt } from 'react-icons/ti';

import Header from './Header';
import 'normalize.css';
import './global.css';
import {
  StyledFooter,
  StyledFooterCompanyCopy,
  StyledFooterContainer,
  StyledFooterCopyright,
  StyledFooterSocial,
} from '../styles/layout.styles';

type LayoutProps = {
  children: React.ReactNode[];
};

const Layout = ({ children }: LayoutProps) => {
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
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Apkomatic`} />
      <div className="page">
        <main className="content">{children}</main>
        <StyledFooter>
          <StyledFooterContainer>
            <StyledFooterCompanyCopy>
              <p>
                We are a group of passionate web designers and developers. We
                design and develop high quality and affordable web applications
                and sites for individuals and businesses.
              </p>
            </StyledFooterCompanyCopy>
            <StyledFooterSocial>
              <strong>Connect with us:</strong>
              <ul>
                <li>
                  <a href="mailto:apkomatic@gmail.com" aria-label="Email">
                    <TiAt />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/apkomatic"
                    aria-label="Instagram"
                  >
                    <TiSocialInstagram />
                  </a>
                </li>
              </ul>
            </StyledFooterSocial>
          </StyledFooterContainer>
          <StyledFooterCopyright>
            © {new Date().getFullYear()},{' '}
            {data.site.siteMetadata?.title || 'Apkomatic'}
          </StyledFooterCopyright>
        </StyledFooter>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
