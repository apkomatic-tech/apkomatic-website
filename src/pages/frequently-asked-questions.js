import React from 'react';
import Accordion from '../components/Accordion.tsx';
import SplashBanner from '../components/SplashBanner';
import Wrapper from '../components/Wrapper';

import faqJSON from '../data/faq.json';

const FaqPage = () => {
  return (
    <div id="faq-page">
      <SplashBanner title="Frequently Asked Questions" />
      <Wrapper
        wrapperWidth="small"
        style={{
          marginTop: '4rem',
          marginBottom: '4rem',
        }}
      >
        <Accordion
          items={faqJSON}
          style={{
            marginTop: '7rem',
            marginBottom: '7rem',
          }}
        />
      </Wrapper>
    </div>
  );
};

export default FaqPage;
