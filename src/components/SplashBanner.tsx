import React from 'react';
import {
  StyledBanner,
  StyledBannerContainer,
} from '../styles/splashbanner.styles';

interface SplashBannerProps {
  title?: string;
  message?: string;
  children?: any;
}

const SplashBanner = ({ title, message, children }: SplashBannerProps) => {
  return (
    <StyledBanner>
      <StyledBannerContainer>
        {title && <h1>{title}</h1>}
        {children}
        {message && <p>{message}</p>}
      </StyledBannerContainer>
    </StyledBanner>
  );
};

export default SplashBanner;
