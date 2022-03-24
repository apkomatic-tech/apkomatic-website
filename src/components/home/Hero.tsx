import React from 'react';
import { Link } from 'gatsby';

import {
  StyledHero,
  StyledHeroContainer,
  StyledHeroCopy,
  StyledHeroH1,
} from '../../styles/homepage.styles';

import { StyledSecondaryButtonWithArrow } from '../Button';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import { HiOutlineChevronRight } from 'react-icons/hi';
import HeroImage from './HeroImage';

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroContainer>
        <HeroImage width={1000} height={1000} />
        <StyledHeroCopy
          initial={{ y: 25, opacity: 0.25 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <StyledHeroH1>We build smart and beautiful websites.</StyledHeroH1>
          <div>
            <StyledSecondaryButtonWithArrow
              id="hero-callout-btn"
              as={Link}
              style={{
                marginTop: '2rem',
                minWidth: '200px',
                padding: '2rem',
                fontSize: '2rem',
              }}
              to="/contact"
              onClick={() => {
                trackCustomEvent({
                  category: 'Homepage',
                  action: 'Click Contact Us',
                  label: 'Hero',
                });
              }}
            >
              Contact Us
              <HiOutlineChevronRight />
            </StyledSecondaryButtonWithArrow>
          </div>
        </StyledHeroCopy>
      </StyledHeroContainer>
      <div className="decor-box"></div>
    </StyledHero>
  );
};

export default Hero;
