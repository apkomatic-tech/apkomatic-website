import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import { minDesktopWidth } from '../config/styles';

const links = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Questions',
    url: '/frequently-asked-questions',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

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

interface StyledNavigationProps {
  readonly linkCount: number | undefined;
}

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
      column-gap: 2rem;
    }

    a {
      color: var(--darkGrey);
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
      font-weight: 600;
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
    background-color: var(--secondaryColor);
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

function renderLinks(clickHandler?: Function) {
  return links.map(link => {
    return (
      <li key={link.title}>
        <Link
          to={link.url}
          activeClassName="active"
          onClick={() => {
            if (typeof clickHandler === 'function') {
              clickHandler();
            }
          }}
        >
          {link.title}
        </Link>
      </li>
    );
  });
}

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-y-overflow');
    } else {
      document.body.classList.remove('no-y-overflow');
    }
  }, [isMenuOpen]);

  return (
    <StyledHeader>
      <StyledHeaderWrapper>
        <StyledSiteBrand>
          <Link to="/">{siteTitle}</Link>
        </StyledSiteBrand>
        <StyledNavigation linkCount={links.length}>
          <ul>{renderLinks()}</ul>
        </StyledNavigation>
        <StyledHamburgerMenuButton onClick={() => setIsMenuOpen(true)}>
          <HiOutlineMenu />
        </StyledHamburgerMenuButton>
        {isMenuOpen && (
          <StyledHamburgerMenu>
            <StyledHamburgerMenuHeader>
              <StyledHamburgerSiteBrand>{siteTitle}</StyledHamburgerSiteBrand>
              <StyledHamburgerMenuClose onClick={() => setIsMenuOpen(false)}>
                <HiOutlineX />
              </StyledHamburgerMenuClose>
            </StyledHamburgerMenuHeader>
            <ul>{renderLinks(() => setIsMenuOpen(false))}</ul>
          </StyledHamburgerMenu>
        )}
      </StyledHeaderWrapper>
    </StyledHeader>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
