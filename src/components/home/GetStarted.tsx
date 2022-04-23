import React, { useState } from 'react';
import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import {
  StyledCallToAction,
  StyledCallToActionWrapper,
} from '../../styles/homepage.styles';
import { StyledPrimaryButton, StyledSecondaryButton } from '../Button';

export default function GetStarted() {
  const [isInViewport, setIsInViewport] = useState(false);

  const styles = {
    callToActionBtn: {
      width: '180px',
      padding: '1.8rem',
      fontSize: '1.8rem',
    },
  };
  return (
    <ScrollAnimation
      animateIn="fadeIn"
      animateOnce
      delay={0.5}
      duration={1}
      afterAnimatedIn={visible => {
        if (visible.inViewport) {
          setIsInViewport(true);
        }

        return undefined;
      }}
    >
      <StyledCallToAction>
        <StyledCallToActionWrapper>
          <div>
            <h2 className="cta-heading">Ready to start?</h2>
          </div>
          <div>
            <ScrollAnimation
              animateIn="fadeInUp"
              animateOnce
              delay={0.15 * 1000}
              duration={0.25}
            >
              <StyledPrimaryButton
                to="/contact"
                as={Link}
                style={styles.callToActionBtn}
                onClick={() =>
                  trackCustomEvent({
                    category: 'Homepage',
                    action: 'Click Contact Us',
                    label: 'Get Started',
                  })
                }
              >
                Contact Us
              </StyledPrimaryButton>
            </ScrollAnimation>
          </div>
        </StyledCallToActionWrapper>
      </StyledCallToAction>
    </ScrollAnimation>
  );
}
