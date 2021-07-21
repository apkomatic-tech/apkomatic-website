import { Link } from 'gatsby';
import PropTypes from 'prop-types';
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
        <StyledNavigation linkCount={pageLinks.length}>
          <ul>{renderLinks()}</ul>
        </StyledNavigation>
        <StyledHamburgerMenuButton
          role="navigation"
          aria-label="Navigation"
          onClick={() => setIsMenuOpen(true)}
        >
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
