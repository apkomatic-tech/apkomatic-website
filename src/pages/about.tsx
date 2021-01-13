import React from 'react';
import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

const AboutPage = () => {
  return (
    <div id="about-page">
      <SEO title="About Us" />
      <SplashBanner title="About Us" />
      <Wrapper
        style={{
          marginTop: '7rem',
          marginBottom: '7rem',
          maxWidth: '65rem',
        }}
      >
        <h2>Who We Are</h2>
        <p>
          We are a web development company based in Los Angeles, California. Our
          company consists of professionals who are passionate about web
          technology and aim at delivering high quality work. We work with all
          type of clients - individuals, profit and non-profit
          businesses/organizations.
        </p>
        <h2>Our Mission</h2>
        <p>
          Build high quality websites for all individuals, businesses, or
          organizations.
        </p>
      </Wrapper>
    </div>
  );
};

export default AboutPage;
