import { motion } from 'framer-motion';
import styled from 'styled-components';

export const StyledHero = styled.div`
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid var(--grey);
  @media screen and (min-width: 767px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
  }
  .pattern-box {
    display: none;
    @media screen and (min-width: 1024px) {
      display: block;
      position: absolute;
      z-index: -1;

      background-color: #ffffff;
      opacity: 0.3;
      background-image: radial-gradient(
        #5d2c8d 0.6000000000000001px,
        #ffffff 0.6000000000000001px
      );
      background-size: 12px 12px;
    }
  }
  .pattern-box-1 {
    width: 400px;
    height: 400px;
    top: 15px;
    left: -25px;
  }
  .pattern-box-2 {
    width: 400px;
    height: 400px;
    bottom: 15px;
    right: -25px;
  }
  .decor-box {
    display: block;
    position: absolute;
    left: 25%;
    top: 50%;
    transform: skew(11deg, 11deg) translateY(-50%);
    background: rgba(93, 44, 141, 0.1);
    z-index: -1;
    width: 300px;
    height: 300px;
    opacity: 0.6;
    @media screen and (min-width: 767px) {
      opacity: 1;
      left: 15%;
      width: 400px;
      height: 400px;
    }
    @media screen and (min-width: 1024px) {
      left: 15%;
      width: 500px;
      height: 500px;
    }
  }
`;
export const StyledHeroImage = styled.svg`
  display: none;
  @media screen and (min-width: 767px) {
    position: absolute;
    z-index: -1;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    max-width: 320px;
    right: 0;
  }
  @media screen and (min-width: 1024px) {
    max-width: 420px;
    right: -9px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 550px;
    right: -12px;
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
export const StyledHeroCopy = styled(motion.div)`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  @media screen and (min-width: 767px) {
    width: 75%;
    text-align: left;
  }
  @media screen and (min-width: 1024px) {
    width: 60%;
    margin-right: 3rem;
  }
`;
export const StyledHeroTextTop = styled.p`
  color: var(--primaryColor);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: var(--headingFont);
  font-weight: 600;
  line-height: 1;
`;
export const StyledHeroH1 = styled.h1`
  font-size: 5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.08rem;
  line-height: 1.1;
  color: var(--darkColor);
  background: var(--darkColor);
  background: -webkit-linear-gradient(to right, #5d2c8d 9%, #b60045 91%);
  background: -moz-linear-gradient(to right, #5d2c8d 9%, #b60045 91%);
  background: linear-gradient(to right, #5d2c8d 9%, #b60045 91%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 1024px) {
    font-size: 6rem;
  }
  @media screen and (min-width: 1280px) {
    font-size: 10rem;
  }
`;

export const StyledFeatureSection = styled.section`
  margin: auto;
  max-width: var(--desktopWideContainerWidth);
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 7rem;
  @media screen and (min-width: 767px) {
    padding-top: 10rem;
  }
  .feature-section-heading {
    font-size: clamp(3rem, 5vw, 3rem);
    line-height: 1.1;
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
  background: var(--primaryColor);
  color: #fff;
  border-radius: 5px;
  box-shadow: 4px 0 8px rgba(0, 0, 0, 0.15);
`;
export const StyledCallToAction = styled.section`
  background-color: var(--grey);
  padding-top: 9rem;
  padding-bottom: 9rem;
  transition: 700ms ease;
  position: relative;
  z-index: 1;
  overflow: hidden;
  &.visually-hidden {
    opacity: 0;
    transform: translateY(15px);
  }
  @media screen and (min-width: 767px) {
    padding-top: 16rem;
    padding-bottom: 16rem;
  }
  .pattern-box {
    display: block;
    position: absolute;
    z-index: -2;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    opacity: 0.2;
    background-image: radial-gradient(
      #5d2c8d 0.6000000000000001px,
      transparent 0.6000000000000001px
    );
    background-size: 12px 12px;
  }
  .watermark {
    color: rgba(0, 0, 0, 0.03);
    top: 15%;
    left: 50%;
    transform: translateX(-50%);
  }
`;
export const StyledCallToActionWrapper = styled.div`
  max-width: var(--desktopWideContainerWidth);
  margin: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  text-align: center;

  .cta-heading {
    margin: 0 0 2rem;
    font-size: clamp(4rem, 5vw, 6rem);
    line-height: 1.1;
  }
`;
