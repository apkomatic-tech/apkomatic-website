/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import { TiSocialTwitter, TiAt } from 'react-icons/ti';

import Header from './header';
import 'normalize.css';
import './global.css';

const StyledFooter = styled.footer`
  background: var(--grey);
  font-size: 1.3rem;
`;
const StyledFooterContainer = styled.div`
  max-width: var(--desktopContainerWidth);
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
`;
const StyledFooterCompanyCopy = styled.div`
  max-width: 400px;
`;
const StyledFooterCopyright = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 2rem 0;
`;
const StyledFooterSocial = styled.div`
  display: flex;
  align-items: center;
  strong:first-of-type {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.2rem;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    line-height: 1;
  }
  li {
    margin-right: 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    font-size: 2.6rem;
    color: var(--dark);
    display: block;
    &:hover,
    &:focus {
      color: var(--primaryColor);
    }
  }
`;

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
                  <a href="#">
                    <TiAt />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <TiSocialTwitter />
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
