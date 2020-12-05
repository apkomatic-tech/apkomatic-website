import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"
import { minDesktopWidth } from "../config/styles"

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "About Us",
    url: "/about",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
  {
    title: "Contact Us",
    url: "/contact",
  },
]

const StyledHeader = styled.header`
  background-color: var(--white);
`
const StyledHeaderWrapper = styled.div`
  max-width: var(--desktopContainerWidth);
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
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
`
const StyledHamburgerSiteBrand = styled(StyledSiteBrand)`
  color: var(--baseTextColor);
`

const StyledNavigation = styled.nav`
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
    }
  }
`
const StyledBaseHamburgerButton = styled.button`
  display: flex;
  justify-content: center;
  appearance: none;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 2.5rem;
  align-items: center;
  color: var(--baseTextColor);
`

const StyledHamburgerMenuButton = styled(StyledBaseHamburgerButton)`
  border: 2px solid var(--baseTextColor);
  border-radius: 3px;
  &:hover,
  &:focus {
    background-color: var(--secondaryColor);
    color: var(--baseTextColor);
    border-color: var(--secondaryColor);
  }
  @media screen and (min-width: ${minDesktopWidth}) {
    display: none;
  }
`

const StyledHamburgerMenu = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: var(--secondaryColor);

  ul {
    list-style: none;
    padding: 2rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    line-height: 2;
  }

  @media screen and (min-width: ${minDesktopWidth}) {
    display: none;
  }
`

const StyledHamburgerMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`

const StyledHamburgerMenuClose = styled(StyledBaseHamburgerButton)`
  &:hover {
    color: var(--primaryColor);
  }
`

function renderLinks() {
  return links.map(link => {
    return (
      <li key={link.title}>
        <Link to={link.url} activeClassName="active">
          {link.title}
        </Link>
      </li>
    )
  })
}

const Header = ({ siteTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
            <ul>{renderLinks()}</ul>
          </StyledHamburgerMenu>
        )}
      </StyledHeaderWrapper>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
