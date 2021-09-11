import styled from 'styled-components';

export const StyledHero = styled.div`
  background-color: var(--grey);
  overflow: hidden;
  @media screen and (min-width: 767px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;
export const StyledHeroImage = styled.img`
  display: none;
  @media screen and (min-width: 700px) {
    position: absolute;
    z-index: 4;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    max-width: 320px;
    right: 0;
  }
  @media screen and (min-width: 767px) {
    right: -9px;
    max-width: 400px;
  }
  @media screen and (min-width: 1024px) {
    max-width: 600px;
    right: -24px;
  }
`;
export const StyledHeroContainer = styled.div`
  max-width: var(--desktopWideContainerWidth);
  padding: 7rem 2rem;
  margin: auto;
  position: relative;
  z-index: 1;
  @media screen and (min-width: 960px) {
    padding-top: 15rem;
    padding-bottom: 15rem;
  }
`;
export const StyledHeroCopy = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  @media screen and (min-width: 700px) {
    width: 75%;
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
`;
export const StyledHeroTextTop = styled.p`
  color: var(--primaryColor);
  font-size: 1.8rem;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: var(--headingFont);
  font-weight: 600;
`;
export const StyledHeroH1 = styled.h1`
  font-size: clamp(3rem, 5vw, 5rem);
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.08rem;
  line-height: 1.1;
  color: var(--darkColor);
`;

export const StyledFeatureSection = styled.section`
  margin: auto;
  max-width: var(--desktopWideContainerWidth);
  padding: 7rem 2rem;
  @media screen and (min-width: 767px) {
    padding-bottom: 10rem;
    padding-top: 10rem;
  }
  .feature-section-heading {
    font-size: 3rem;
    margin-top: 0;
    margin-bottom: 1rem;
    text-align: center;
  }
  .feature-section-subheading {
    margin-bottom: 7rem;
    margin-top: 0;
    color: #666;
    font-size: 2rem;
  }
`;
export const StyledFeatureGrid = styled.div`
  display: grid;
  grid-row-gap: 4rem;
  @media screen and (min-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-column-gap: 4rem;
  }
`;
export const StyledFeatureCard = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-gap: 2rem;
  h3 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  p {
    color: #666;
    margin: 0;
  }
`;
export const StyledFeatureIcon = styled.div`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.2rem;
  background: #5d2c8d;
  color: #fff;
  border-radius: 5px;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.15);
`;
export const StyledGetStartedCallout = styled.div`
  text-align: center;
  background: var(--primaryColor);
  padding: 8rem 2rem;
  .h1 {
    font-size: 3rem;
    color: var(--white);
    margin-bottom: 3rem;
  }
`;
