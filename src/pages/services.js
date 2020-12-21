import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import { StyledSecondaryButton } from '../components/Button';
import { minDesktopWidth } from '../config/styles';

const StyledCardGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem;
  row-gap: 2rem;
  @media screen and (max-width: ${minDesktopWidth}) {
    grid-template-columns: 1fr;
  }
`;

const StyledCard = styled.article`
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  background: var(--white);
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  overflow: hidden;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.1);
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
  justify-content: center;
  background-color: var(--grey);
`;
const StyledCardBody = styled.div`
  padding: 2rem;
`;
const StyledCardFooter = styled.div`
  padding: 2rem;
  text-align: center;
  border-top: 2px solid var(--grey);
`;

const ServicesPage = () => {
  return (
    <>
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
          <StyledCard>
            <StyledCardHeader>Web Design</StyledCardHeader>
            <StyledCardBody>
              <p>We offer clean and aesthetically pleasing designs.</p>
            </StyledCardBody>
            <StyledCardFooter>
              <StyledSecondaryButton
                as={Link}
                style={{
                  width: '210px',
                  display: 'block',
                  margin: 'auto',
                }}
              >
                Contact for Quote
              </StyledSecondaryButton>
            </StyledCardFooter>
          </StyledCard>
          <StyledCard>
            <StyledCardHeader>Web Development</StyledCardHeader>
            <StyledCardBody>
              <p>
                We build websites using right tools and we follow best practices
                to make your websites fast and responsive
              </p>
            </StyledCardBody>
            <StyledCardFooter>
              <StyledSecondaryButton
                as={Link}
                style={{
                  width: '210px',
                  display: 'block',
                  margin: 'auto',
                }}
              >
                Contact for Quote
              </StyledSecondaryButton>
            </StyledCardFooter>
          </StyledCard>
        </StyledCardGrid>
      </Wrapper>
    </>
  );
};

export default ServicesPage;
