import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30vh;
  position: relative;
  z-index: 1;
  background-color: var(--primaryColor);
  color: var(--white);
  text-align: center;
  overflow: hidden;
`;
const StyledBannerContainer = styled(motion.div)`
  max-width: 60rem;
  margin: auto;
  padding: 4rem 2rem;
`;
const StyledTitle = styled(motion.h1)`
  margin-bottom: 2.5rem;
  position: relative;
  z-index: 1;
  padding: 2rem;
  border: 3px solid var(--darkColor);
  box-shadow: 10px 10px 0 rgba(0, 0, 0, 0.4);
  font-size: 2.6rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 1px;
`;

const SplashBanner = ({ title, message }) => {
  return (
    <StyledBanner>
      <StyledBannerContainer
        transition={{
          delay: 0.1,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <StyledTitle>{title}</StyledTitle>
        {message && <p>{message}</p>}
      </StyledBannerContainer>
    </StyledBanner>
  );
};

SplashBanner.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SplashBanner;
