import React from 'react';
import { Link } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

import {
  StyledCallToAction,
  StyledCallToActionWrapper,
} from '../../styles/homepage.styles';
import { StyledPrimaryButton } from '../Button';

export default function GetStarted({ elRef, showCallToAction }) {
  const styles = {
    callToActionBtn: {
      width: '180px',
      padding: '1.8rem',
      fontSize: '1.8rem',
    },
  };
  return (
    <StyledCallToAction
      ref={elRef}
      className={showCallToAction ? '' : `visually-hidden`}
    >
      <div className="pattern-box"></div>
      <div className="watermark" aria-hidden="true">
        Connect
      </div>
      <StyledCallToActionWrapper>
        <div>
          <h2 className="cta-heading">Ready to start?</h2>
        </div>
        <div>
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
        </div>
      </StyledCallToActionWrapper>
    </StyledCallToAction>
  );
}
