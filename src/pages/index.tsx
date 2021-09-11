import React from 'react';
import { Link, graphql } from 'gatsby';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
// icons
import { HiOutlineChevronRight } from 'react-icons/hi';
import { AiOutlineCode as DevIcon } from 'react-icons/ai';
import { RiBrush2Fill as DesignIcon } from 'react-icons/ri';
import {
  BiAccessibility as AccessibilityIcon,
  BiCommentDetail as CommunicationIcon,
} from 'react-icons/bi';
// components
import SEO from '../components/Seo';
import { StyledSecondaryButtonWithArrow } from '../components/Button';
import Testimonials from '../components/Testimonials';
// images
import HeroImage from '../images/home/hero-image-alt.svg';
//styles
import {
  StyledFeatureCard,
  StyledFeatureGrid,
  StyledFeatureIcon,
  StyledFeatureSection,
  StyledGetStartedCallout,
  StyledHero,
  StyledHeroContainer,
  StyledHeroCopy,
  StyledHeroH1,
  StyledHeroImage,
  StyledHeroTextTop,
} from '../styles/homepage.styles';

const IndexPage = ({ data }) => {
  const testimonialsData = data.allSanityTestimonial.nodes;
  return (
    <div id="homepage">
      <SEO title="Home" />
      <StyledHero>
        <StyledHeroContainer>
          <StyledHeroImage
            src={HeroImage}
            alt="Apkomatic"
            width={1000}
            height={1000}
          />
          <StyledHeroCopy>
            <StyledHeroTextTop>
              We're <span className="text-uppercase">Apkomatic</span>
            </StyledHeroTextTop>
            <StyledHeroH1>We build smart and beautiful websites.</StyledHeroH1>
            <div>
              <StyledSecondaryButtonWithArrow
                id="hero-callout-btn"
                as={Link}
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
      {/* Featured section */}
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
                No copy-paste designs. Instead, we develop unique designs for
                each client.
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
                For every project, we take accessibility seriously. We perform
                an accessibility audit during our development stage.
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
                We work closely with our clients to collect feedback during
                every stage of the project. We do not make assumptions, and we
                listen to our clients.
              </p>
            </div>
          </StyledFeatureCard>
        </StyledFeatureGrid>
      </StyledFeatureSection>
      {/* Testimonials */}
      <Testimonials items={testimonialsData} />
      {/* Call to action */}
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
