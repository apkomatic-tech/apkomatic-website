import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import SEO from '../components/seo';
import {
  StyledPrimaryButtonWithArrow,
  StyledSecondaryButtonWithArrow,
} from '../components/Button';
import { minDesktopWidth } from '../config/styles';

// external components
import Testimonials from '../components/Testimonials';

// images
import DesignImage from '../images/home/featured-design.svg';
import CodeImage from '../images/home/featured-code.svg';
import EthicsImage from '../images/home/featured-relationship.svg';

const StyledHero = styled.div`
  background-color: var(--grey);
  margin-bottom: 5rem;
  overflow: hidden;
`;
const StyledHeroContainer = styled.div`
  max-width: var(--desktopContainerWidth);
  padding: 7rem 2rem;
  margin: auto;
`;
const StyledHeroCopy = styled.div`
  width: 100%;
  @media screen and (min-width: ${minDesktopWidth}) {
    max-width: 60vw;
  }
`;
const StyledHeroTextTop = styled(motion.p)`
  color: var(--primaryColor);
  font-size: 2rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: var(--headingFont);
  opacity: 0.8;
  font-weight: 600;
`;
const StyledHeroH1 = styled(motion.h1)`
  font-size: clamp(3rem, 5vw, 5rem);
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.15rem;
  line-height: 1.1;
`;

const maxFeaturedImgW = '320px';
const StyledFeatureRow = styled.div`
  &:last-of-type {
    margin-bottom: 0;
  }
`;
const StyledFeatureRowContainer = styled.div`
  max-width: var(--desktopContainerWidth);
  margin: auto;
  padding: 5rem 2rem;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: ${props =>
    props.reverse ? `${maxFeaturedImgW} 1fr` : `1fr ${maxFeaturedImgW}`};
  column-gap: 5rem;
  img {
    max-width: ${maxFeaturedImgW};
    width: 100%;
    height: auto;
    margin: auto;
    display: block;
  }
  @media screen and (max-width: ${minDesktopWidth}) {
    grid-template-columns: 1fr;
  }
`;

const StyledGetStartedCallout = styled.div`
  text-align: center;
  background: var(--secondaryColor);
  padding: 8rem 2rem;
`;

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />
      <StyledHero>
        <StyledHeroContainer>
          <StyledHeroCopy>
            <StyledHeroTextTop
              transition={{
                delay: 0.1,
                stiffness: 80,
              }}
              initial={{
                y: -25,
              }}
              animate={{
                y: 0,
              }}
            >
              We're <span className="text-uppercase">Apkomatic</span>
            </StyledHeroTextTop>
            <StyledHeroH1
              transition={{
                delay: 0.5,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              We can build you a smart and beautiful website.
            </StyledHeroH1>
            <motion.div
              transition={{
                delay: 0.5,
                stiffness: 80,
              }}
              initial={{
                y: '100vh',
              }}
              animate={{
                y: 0,
              }}
            >
              <StyledSecondaryButtonWithArrow
                as={Link}
                large
                style={{
                  marginTop: '2rem',
                  minWidth: '200px',
                }}
                to="/contact"
              >
                Contact Us
                <HiOutlineChevronRight />
              </StyledSecondaryButtonWithArrow>
            </motion.div>
          </StyledHeroCopy>
        </StyledHeroContainer>
      </StyledHero>
      <StyledFeatureRow>
        <StyledFeatureRowContainer>
          <div>
            <h2>Design</h2>
            <p>
              We recognize that good design is very important as it visually
              communicates with your users and customers. We take it seriously.
              Whether you are a small business looking for a simple website to
              promote your services or mid-size organization looking to refresh
              your website look or add new features - we got you covered.
            </p>
          </div>
          <img src={DesignImage} alt="Design" />
        </StyledFeatureRowContainer>
      </StyledFeatureRow>
      <StyledFeatureRow
        style={{
          backgroundColor: 'var(--grey)',
        }}
      >
        <StyledFeatureRowContainer reverse={true}>
          <img src={CodeImage} alt="Development" />
          <div>
            <h2>Development</h2>
            <p>
              We recognize that good design is very important as it visually
              communicates with your users and customers. We take it seriously.
              Whether you are a small business looking for a simple website to
              promote your services or mid-size organization looking to refresh
              your website look or add new features - we got you covered.
            </p>
          </div>
        </StyledFeatureRowContainer>
      </StyledFeatureRow>
      <StyledFeatureRow>
        <StyledFeatureRowContainer>
          <div>
            <h2>Work Ethics</h2>
            <p>
              We truly care about our customers and that's why our work is not
              done after we build your product. We will keep in touch with you
              if you need help maintaining your website or web application. We
              value your time and business.
            </p>
          </div>
          <img src={EthicsImage} alt="Work Ethics" />
        </StyledFeatureRowContainer>
      </StyledFeatureRow>
      <Testimonials />
      <StyledGetStartedCallout>
        <div className="h1">Ready to Get Started?</div>
        <p>
          Drop us a line. It only takes a few minutes. We will take care of the
          rest.
        </p>
        <StyledPrimaryButtonWithArrow
          style={{
            width: '220px',
          }}
          to="/contact"
          as={Link}
        >
          Get a Quote <HiOutlineChevronRight />
        </StyledPrimaryButtonWithArrow>
      </StyledGetStartedCallout>
    </>
  );
};

export default IndexPage;
