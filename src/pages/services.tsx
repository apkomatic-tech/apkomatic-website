import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';
import { StyledGhostButton } from '../components/Button';
import { minDesktopWidth } from '../config/styles';

const StyledCardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3.5rem;
  row-gap: 3rem;
  @media screen and (max-width: ${minDesktopWidth}) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.article`
  background: var(--white);
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  overflow: hidden;
  border-radius: 1px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  * {
    box-sizing: inherit;
  }
`;

const StyledCardHeader = styled.div`
  padding: 2rem;
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--headingFont);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  line-height: 1;
  display: flex;
  align-items: center;
  background-color: var(--primaryColor);
  color: #fff;
`;
const StyledCardBody = styled.div`
  padding: 2rem;
`;
const StyledCardFooter = styled.div`
  padding: 2rem;
`;

const ServicesPage = () => {
  return (
    <div id="services-page">
      <SEO title="Services" />
      <SplashBanner
        title="Services"
        message="Our mission is to build affordable websites for all kind of businesses and organizations. We offer different pricing plans to match your needs."
      />
      <Wrapper
        style={{
          marginTop: '4rem',
          marginBottom: '4rem',
        }}
      >
        <StyledCardGrid>
          <StyledCard className="card">
            <StyledCardHeader>Web Design</StyledCardHeader>
            <StyledCardBody>
              <p>We offer clean and aesthetically pleasing designs.</p>
            </StyledCardBody>
            <StyledCardFooter>
              <StyledGhostButton
                as={Link}
                to="/contact"
                style={{ width: 'auto' }}
              >
                Contact for Quote
              </StyledGhostButton>
            </StyledCardFooter>
          </StyledCard>
          <StyledCard className="card">
            <StyledCardHeader>Web Development</StyledCardHeader>
            <StyledCardBody>
              <p>
                We build websites using right tools and we follow best practices
                to make your websites fast and responsive
              </p>
            </StyledCardBody>
            <StyledCardFooter>
              <StyledGhostButton as={Link} to="/contact">
                Contact for Quote
              </StyledGhostButton>
            </StyledCardFooter>
          </StyledCard>
        </StyledCardGrid>
      </Wrapper>
    </div>
  );
};

export default ServicesPage;
