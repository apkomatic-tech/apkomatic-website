import React from 'react';
import { TiAt, TiSocialInstagram } from 'react-icons/ti';
import { Link } from 'gatsby';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterSocial,
  StyledFooterCopyright,
} from '../styles/footer.styles';

import pageLinks from '../data/urls.json';

function renderLinks(clickHandler?: Function) {
  return pageLinks.map(link => {
    return (
      <li key={link.title}>
        <Link
          to={link.url}
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

type FooterProps = {
  siteTitle?: string;
};
const Footer: React.FC<FooterProps> = ({ siteTitle = 'Apkomatic' }) => {
  return (
    <StyledFooter>
      <StyledFooterContainer>
        <StyledFooterCopyright>
          © {new Date().getFullYear()}, {siteTitle}
        </StyledFooterCopyright>
        <StyledFooterSocial>
          <ul>
            <li>
              <a href="mailto:apkomatic@gmail.com" aria-label="Email">
                <TiAt />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/apkomatic" aria-label="Instagram">
                <TiSocialInstagram />
              </a>
            </li>
          </ul>
        </StyledFooterSocial>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export default Footer;
