import React from 'react';
import Accordion from '../components/Accordion';
import Wrapper from '../components/Wrapper';
import SEO from '../components/Seo';

// data
import faqJSON from '../data/faq.json';

const FaqPage = () => {
  return (
    <div id="faq-page">
      <SEO title="Frequently Asked Questions" />

      <Wrapper
        style={{
          marginTop: '6rem',
          marginBottom: '4rem',
          maxWidth: '80rem',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(3rem, 5vw, 4rem)',
            margin: 0,
            textAlign: 'center',
            paddingBottom: '2rem',
            borderBottom: '2px solid var(--grey)',
          }}
        >
          Frequently Asked Questions
        </h1>
        <Accordion items={faqJSON} />
      </Wrapper>
    </div>
  );
};

export default FaqPage;
