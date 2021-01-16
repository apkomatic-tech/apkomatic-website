import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { HiOutlineChevronRight } from 'react-icons/hi';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

// external components
import SEO from '../components/Seo';
import {
  StyledPrimaryButtonWithArrow,
  StyledSecondaryButtonWithArrow,
} from '../components/Button';
import Testimonials from '../components/Testimonials';
import { minDesktopWidth } from '../config/styles';

// images
import DesignImage from '../images/home/featured-design.svg';
import CodeImage from '../images/home/featured-code.svg';
import EthicsImage from '../images/home/featured-relationship.svg';

const StyledHero = styled.div`
  background-color: var(--grey);
  overflow: hidden;
`;
const StyledHeroContainer = styled.div`
  max-width: var(--desktopContainerWidth);
  padding: 7rem 2rem;
  margin: auto;
  @media screen and (min-width: 960px) {
    padding-top: 15rem;
    padding-bottom: 15rem;
  }
`;
const StyledHeroCopy = styled.div`
  width: 100%;
  @media screen and (min-width: ${minDesktopWidth}) {
    max-width: 50vw;
  }
`;
const StyledHeroTextTop = styled.p`
  color: var(--primaryColor);
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: var(--headingFont);
  font-weight: 600;
`;
const StyledHeroH1 = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.08rem;
  line-height: 1.1;
  color: var(--darkColor);
`;

const maxFeaturedImgW = '320px';
const StyledFeatureRow = styled.div`
  &:last-of-type {
    margin-bottom: 0;
  }
`;
interface StyledFeatureRowContainerProps {
  readonly reverse?: boolean;
}
const StyledFeatureRowContainer = styled.div<StyledFeatureRowContainerProps>`
  max-width: var(--desktopContainerWidth);
  margin: auto;
  padding: 5rem 0;
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
  @media screen and (max-width: 1180px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
`;

const StyledGetStartedCallout = styled.div`
  text-align: center;
  background: var(--primaryColor);
  padding: 8rem 2rem;
  .h1 {
    font-size: 3rem;
    color: var(--white);
    margin-bottom: 3rem;
  }
`;

const IndexPage = ({ data }) => {
  const testimonialsData = data.allSanityTestimonial.nodes;
  return (
    <div id="homepage">
      <SEO title="Home" />
      <StyledHero>
        <StyledHeroContainer>
          <StyledHeroCopy>
            <StyledHeroTextTop>
              We're <span className="text-uppercase">Apkomatic</span>
            </StyledHeroTextTop>
            <StyledHeroH1>We build smart and beautiful websites.</StyledHeroH1>
            <div>
              <StyledSecondaryButtonWithArrow
                id="hero-callout-btn"
                as={Link}
                size="large"
                style={{
                  marginTop: '2rem',
                  minWidth: '200px',
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
      <Testimonials items={testimonialsData} />
      <StyledGetStartedCallout>
        <div className="h1">Ready to Get Started?</div>
        <StyledSecondaryButtonWithArrow
          size="large"
          style={{
            width: '220px',
          }}
          to="/contact"
          as={Link}
          onClick={() => {
            trackCustomEvent({
              category: 'Homepage',
              action: 'Click Contact Us',
              label: 'Get Started',
            });
          }}
        >
          Get a Quote <HiOutlineChevronRight />
        </StyledSecondaryButtonWithArrow>
      </StyledGetStartedCallout>
    </div>
  );
};

export const query = graphql`
  query {
    allSanityTestimonial {
      nodes {
        _id
        content
        author
        company
      }
    }
  }
`;

export default IndexPage;
