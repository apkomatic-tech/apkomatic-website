import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

// data
import pageLinks from '../data/urls.json';
import {
  StyledHamburgerMenu,
  StyledHamburgerMenuButton,
  StyledHamburgerMenuClose,
  StyledHamburgerMenuHeader,
  StyledHamburgerSiteBrand,
  StyledHeader,
  StyledHeaderWrapper,
  StyledNavigation,
  StyledSiteBrand,
} from '../styles/header.styles';

function renderLinks(clickHandler?: Function) {
  return pageLinks.map(link => {
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

type HeaderProps = {
  siteTitle?: string;
};

const Header = ({ siteTitle = '' }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add('no-y-overflow');
    } else {
      document.body.classList.remove('no-y-overflow');
    }
  }, [isMenuOpen]);

  return (
    <StyledHeader data-testid="header">
      <StyledHeaderWrapper>
        <StyledSiteBrand>
          <Link to="/">{siteTitle}</Link>
        </StyledSiteBrand>
        <StyledNavigation
          linkCount={pageLinks.length}
          data-testid="desktop-navigation"
        >
          <ul>{renderLinks()}</ul>
        </StyledNavigation>
        <StyledHamburgerMenuButton
          data-testid="hamburger-button"
          role="navigation"
          aria-label="Navigation"
          onClick={() => setIsMenuOpen(true)}
        >
          <HiOutlineMenu />
        </StyledHamburgerMenuButton>
        {isMenuOpen && (
          <StyledHamburgerMenu data-testid="mobile-navigation">
            <StyledHamburgerMenuHeader>
              <StyledHamburgerSiteBrand data-testid="mobile-navigation-sitebrand">
                {siteTitle}
              </StyledHamburgerSiteBrand>
              <StyledHamburgerMenuClose
                onClick={() => setIsMenuOpen(false)}
                data-testid="close-hamburger-menu"
              >
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

export default Header;
