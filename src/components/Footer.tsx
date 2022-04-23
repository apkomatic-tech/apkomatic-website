import React from 'react';
import { TiAt, TiSocialInstagram } from 'react-icons/ti';
import {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterSocial,
  StyledFooterCopyright,
} from '../styles/footer.styles';

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
              <a
                href="https://instagram.com/apkomatic"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
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
