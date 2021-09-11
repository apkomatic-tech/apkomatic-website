import React from 'react';
import {
  StyledSplashHeader,
  StyledSplashHeaderWrapper,
} from '../styles/splashHeader.styles';

type SplashHeaderProps = {
  headingText: string;
  subheadingText?: string;
  backgroundImage?: string;
};

const SplashHeader: React.FC<SplashHeaderProps> = ({
  headingText,
  subheadingText,
  backgroundImage,
}) => {
  return (
    <StyledSplashHeader background={backgroundImage}>
      <StyledSplashHeaderWrapper>
        <h1 className="splash-heading">{headingText}</h1>
        {subheadingText && <p className="splash-text">{subheadingText}</p>}
      </StyledSplashHeaderWrapper>
    </StyledSplashHeader>
  );
};

export default SplashHeader;
