import styled from 'styled-components';
import { minDesktopWidth, minDesktopWidthLarge } from '../config/styles';

type StyledNavigationProps = {
  readonly linkCount: number | undefined;
};

const StyledHeader = styled.header`
  background-color: #fff;
`;
const StyledHeaderWrapper = styled.div`
  max-width: var(--desktopWideContainerWidth);
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledSiteBrand = styled.h1`
  color: var(--primaryColor);
  margin: 0;
  font-size: 2.2rem;
  font-weight: bold;
  font-family: var(--headingFont);
  text-transform: uppercase;
  letter-spacing: -0.01rem;
  a {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  }
`;
const StyledHamburgerSiteBrand = styled(StyledSiteBrand)`
  color: #fff;
`;

const StyledNavigation = styled.nav<StyledNavigationProps>`
  display: none;

  @media screen and (min-width: ${minDesktopWidth}) {
    line-height: 1;
    display: block;
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: grid;
      grid-template-columns: repeat(${props => props.linkCount}, auto);
    }

    a {
      color: var(--darkGrey);
      padding: 0.2rem 0.4rem;
      position: relative;
      z-index: 1;
      font-size: clamp(1.5rem, 5vw, 1.7rem);
      & {
        text-decoration: none;
      }
    }

    a.active,
    a:hover,
    a:focus {
      color: var(--primaryColor);
    }

    a.active {
      font-weight: bold;
    }
  }
  @media screen and (min-width: ${minDesktopWidth}) and (max-width: ${minDesktopWidthLarge}) {
    ul {
      column-gap: 1.6rem;
    }
  }
  @media screen and (min-width: ${minDesktopWidthLarge}) {
    ul {
      column-gap: 2.2rem;
    }
  }
`;
const StyledBaseHamburgerButton = styled.button`
  display: inline-flex;
  justify-content: center;
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 2.9rem;
  align-items: center;
  padding: 2px 5px;
  color: var(--baseTextColor);
`;

const StyledHamburgerMenuButton = styled(StyledBaseHamburgerButton)`
  border: 0;
  &,
  &:hover,
  &:focus {
    color: var(--baseTextColor);
  }
  @media screen and (min-width: ${minDesktopWidth}) {
    display: none;
  }
`;

const StyledHamburgerMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--primaryColor);
  z-index: 999;

  ul {
    list-style: none;
    padding: 2rem 0;
    margin: 0 2rem;
    border-top: 2px solid rgba(255, 255, 255, 0.13);
  }

  a {
    text-decoration: none;
    font-size: 2rem;
    line-height: 2;
    color: rgba(255, 255, 255, 0.9);
    display: block;
    padding: 0.5rem;
    &:hover,
    &:focus {
      background: rgba(255, 255, 255, 0.05);
    }
  }

  @media screen and (min-width: ${minDesktopWidth}) {
    display: none;
  }
`;

const StyledHamburgerMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem 3rem 2rem;
`;

const StyledHamburgerMenuClose = styled(StyledBaseHamburgerButton)`
  color: rgba(255, 255, 255, 0.9);
`;

export {
  StyledHeader,
  StyledHeaderWrapper,
  StyledSiteBrand,
  StyledNavigation,
  StyledHamburgerMenu,
  StyledHamburgerMenuButton,
  StyledHamburgerMenuClose,
  StyledHamburgerSiteBrand,
  StyledHamburgerMenuHeader,
};
