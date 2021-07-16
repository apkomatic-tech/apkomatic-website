import React from 'react';
import Accordion from '../components/Accordion';
import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

// data
import faqJSON from '../data/faq.json';

const FaqPage = () => {
  return (
    <div id="faq-page">
      <SEO title="Frequently Asked Questions" />
      <SplashBanner title="Frequently Asked Questions" />
      <Wrapper
        style={{
          marginTop: '4rem',
          marginBottom: '4rem',
          maxWidth: '72rem',
        }}
      >
        <Accordion
          items={faqJSON}
          customStyles={{
            marginTop: '7rem',
            marginBottom: '7rem',
          }}
        />
      </Wrapper>
    </div>
  );
};

export default FaqPage;
