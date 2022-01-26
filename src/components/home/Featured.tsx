import React from 'react';
// icons
import { AiOutlineCode as DevIcon } from 'react-icons/ai';
import { RiBrush2Fill as DesignIcon } from 'react-icons/ri';
import { BiCommentDetail as CommunicationIcon } from 'react-icons/bi';
import { IoAccessibility as AccessibilityIcon } from 'react-icons/io5';

import {
  StyledFeatureSection,
  StyledFeatureGrid,
  StyledFeatureCard,
  StyledFeatureIcon,
} from '../../styles/homepage.styles';

export default function Featured() {
  return (
    <StyledFeatureSection>
      <h2 className="text-center feature-section-heading">
        We can help you build your online presence.
      </h2>
      <p className="text-center feature-section-subheading">
        We take our work seriously and therefore only deliver high-quality
        results that our customers will love.
      </p>
      <StyledFeatureGrid>
        <StyledFeatureCard>
          <StyledFeatureIcon>
            <DesignIcon />
          </StyledFeatureIcon>
          <div>
            <h3>Design</h3>
            <p>
              No copy-paste designs. Instead, we develop unique designs for each
              client.
            </p>
          </div>
        </StyledFeatureCard>
        <StyledFeatureCard>
          <StyledFeatureIcon>
            <DevIcon />
          </StyledFeatureIcon>
          <div>
            <h3>Performance</h3>
            <p>
              We use best practices and technology stacks that will result in
              high-speed and responsive web applications/sites.
            </p>
          </div>
        </StyledFeatureCard>
        <StyledFeatureCard>
          <StyledFeatureIcon>
            <AccessibilityIcon />
          </StyledFeatureIcon>
          <div>
            <h3>Accessibility</h3>
            <p>
              For every project, we take accessibility seriously. We perform an
              accessibility audit during our development stage.
            </p>
          </div>
        </StyledFeatureCard>
        <StyledFeatureCard>
          <StyledFeatureIcon>
            <CommunicationIcon />
          </StyledFeatureIcon>
          <div>
            <h3>Communication</h3>
            <p>
              We work closely with our clients to collect feedback during every
              stage of the project. We do not make assumptions, and we listen to
              our clients.
            </p>
          </div>
        </StyledFeatureCard>
      </StyledFeatureGrid>
    </StyledFeatureSection>
  );
}
