import styled, { css } from 'styled-components';
import { minDesktopWidth } from '../config/styles';

const StyledFooter = styled.footer`
  background: var(--offWhite);
  padding-top: 5rem;
  padding-bottom: 5rem;
  --footer-text-color: rgba(0, 0, 0, 0.6);
`;
const StyledFooterContainer = styled.div`
  max-width: var(--desktopWideContainerWidth);
  margin: auto;
  padding: 0 2rem;
`;

const StyledFooterLinks = styled.ul`
  list-style: none;
  padding-bottom: 2rem;
  justify-content: flex-start;
  display: grid;
  grid-row-gap: 2rem;
  grid-column-gap: 1.5rem;
  max-width: 60rem;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  li {
    display: inline-block;
  }
  a {
    color: var(--footer-text-color);
    text-decoration: none;
    font-size: 1.5rem;
    &:hover,
    &:focus {
      text-decoration: underline;
      color: var(--baseLinkColor);
    }
  }
`;

const StyledFooterSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
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
    color: var(--footer-text-color);
    display: block;
    &:hover,
    &:focus {
      color: var(--primaryColor);
    }
  }
`;

const StyledFooterCopyright = styled.div`
  text-align: center;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.5);
`;

export {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterLinks,
  StyledFooterCopyright,
  StyledFooterSocial,
};
