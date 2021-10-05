import styled, { css } from 'styled-components';
import { minDesktopWidth } from '../config/styles';

const StyledFooter = styled.footer`
  background: var(--offWhite);
  --footer-text-color: rgba(0, 0, 0, 0.6);
`;
const StyledFooterContainer = styled.div`
  max-width: var(--desktopWideContainerWidth);
  margin: auto;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
`;

const StyledFooterSocial = styled.div`
  margin-bottom: 1rem;
  @media screen and (min-width: 767px) {
    margin-bottom: 0;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    margin-left: 1rem;
    line-height: 1;
    text-align: center;
  }
  li {
    display: inline-block;
    margin-right: 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    font-size: 3rem;
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
  color: rgba(0, 0, 0, 0.6);
  order: 1;
  @media screen and (min-width: 767px) {
    order: -1;
  }
`;

export {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterCopyright,
  StyledFooterSocial,
};
