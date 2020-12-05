import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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
  background-color: var(--primaryColor);
`
const StyledHeaderWrapper = styled.div`
  max-width: 96rem;
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyledSiteBrand = styled.h1`
  color: var(--white);
  margin: 0;
  font-size: 2rem;
  font-weight: 400;
  a {
    color: inherit;
    text-decoration: none;
  }
`

const StyledNavigationLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(${props => props.linkCount}, auto);
  column-gap: 2rem;
  a {
    color: rgba(255, 255, 255, 0.7);
  }
  a,
  a:hover,
  a:focus {
    text-decoration: none;
  }

  a.active,
  a:hover,
  a:focus {
    color: var(--white);
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <StyledHeaderWrapper>
      <StyledSiteBrand>
        <Link to="/">{siteTitle}</Link>
      </StyledSiteBrand>
      <nav>
        <StyledNavigationLinks linkCount={links.length}>
          {links.map(link => {
            return (
              <li key={link.title}>
                <Link to={link.url} activeClassName="active">
                  {link.title}
                </Link>
              </li>
            )
          })}
        </StyledNavigationLinks>
      </nav>
    </StyledHeaderWrapper>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
