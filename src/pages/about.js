import React from 'react';
import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';

const AboutPage = () => {
  return (
    <>
      <SplashBanner title="About Us" />
      <Wrapper
        wrapperWidth="small"
        style={{
          marginTop: '4rem',
          marginBottom: '4rem',
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
    </>
  );
};

export default AboutPage;
