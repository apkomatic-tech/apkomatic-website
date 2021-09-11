import { Link } from 'gatsby';
import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineCode as DevIcon } from 'react-icons/ai';
import { RiBrush2Fill as DesignIcon } from 'react-icons/ri';

import SEO from '../components/Seo';
import { StyledGhostButton } from '../components/Button';
import { minDesktopWidth } from '../config/styles';
import SplashHeader from '../components/SplashHeader';
import HeaderBackground from '../images/services/header-bg.jpg';

const StyledCardGrid = styled.section`
  display: grid;
  gap: 6rem;
  transform: translateY(-60px);
  max-width: var(--desktopWideContainerWidth);
  margin: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  @media screen and (min-width: ${minDesktopWidth}) {
    transform: translateY(-80px);
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const StyledCard = styled.article`
  background: var(--white);
  border-radius: 8px;
  box-shadow: 0 12px 15px rgba(0, 0, 0, 0.09);
  box-sizing: border-box;
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-rows: 1fr 1fr max-content;
  * {
    box-sizing: inherit;
  }
`;

const StyledCardIcon = styled.div`
  position: absolute;
  top: -3rem;
  left: 3rem;
  background-color: var(--primaryColor);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: #fff;
  border-radius: 5px;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.15);
`;
const StyledCardHeader = styled.h3`
  margin-top: 6.5rem;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 2.3rem;
  line-height: 1;
  padding-left: 3rem;
  padding-right: 3rem;
`;
const StyledCardBody = styled.div`
  color: var(--darkGrey);
  padding-left: 3rem;
  padding-right: 3rem;
`;
const StyledCardFooter = styled.div`
  margin-top: 3rem;
  padding: 2rem 3rem;
  background: var(--grey);
  a {
    font-size: 1.6rem;
    &:hover {
      background: #fff;
    }
  }
  /* padding: 2rem; */
`;

const ServicesPage = () => {
  return (
    <div id="services-page">
      <SEO title="Services" />
      <SplashHeader
        headingText="Services"
        subheadingText="Our mission is to build affordable websites for all kind of businesses and organizations. We offer different pricing plans to match your needs."
        backgroundImage={HeaderBackground}
      />

      <StyledCardGrid>
        <StyledCard className="card">
          <StyledCardIcon>
            <DesignIcon />
          </StyledCardIcon>
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
          <StyledCardIcon>
            <DevIcon />
          </StyledCardIcon>
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
    </div>
  );
};

export default ServicesPage;
