import styled from 'styled-components';
import { minDesktopWidth } from '../config/styles';

type StyledNavigationProps = {
  readonly linkCount: number | undefined;
};

const StyledHeader = styled.header`
  background-color: var(--white);
`;
const StyledHeaderWrapper = styled.div`
  max-width: var(--desktopContainerWidth);
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledSiteBrand = styled.h1`
  color: var(--primaryColor);
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  font-family: var(--headingFont);
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  a {
    color: inherit;
    font-family: inherit;
    text-decoration: none;
  }
`;
const StyledHamburgerSiteBrand = styled(StyledSiteBrand)`
  color: var(--baseTextColor);
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
      column-gap: 1.2rem;
    }

    a {
      color: var(--darkGrey);
      padding: 0.2rem 0.4rem;
      position: relative;
      z-index: 1;
    }

    // hover effect
    a::before {
      background: rgba(255, 196, 0, 0.25);
      content: '';
      display: block;
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      transition: width 220ms;
      width: 0;
      z-index: -1;
    }
    a:hover::before {
      left: 0;
      width: 100%;
    }
    a,
    a:hover,
    a:focus {
      text-decoration: none;
    }

    a.active,
    a:hover,
    a:focus {
      color: var(--primaryColor);
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
  font-size: 2.5rem;
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
  background: var(--secondaryColor);
  z-index: 999;

  ul {
    list-style: none;
    padding: 2rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    line-height: 2;
    color: var(--baseTextColor);
    display: block;
    padding: 0.5rem;
    &:hover,
    &:focus {
      background: rgba(0, 0, 0, 0.05);
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
  padding: 2rem;
`;

const StyledHamburgerMenuClose = styled(StyledBaseHamburgerButton)`
  &:hover {
    color: var(--primaryColor);
  }
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
