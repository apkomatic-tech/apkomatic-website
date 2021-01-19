import React from 'react';
import styled from 'styled-components';
import { MdSentimentVeryDissatisfied } from 'react-icons/md';

import SEO from '../components/Seo';
import Wrapper from '../components/Wrapper';

const Styled404Container = styled.div`
  text-align: center;
  h1 {
    margin-top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      margin-right: 0.5rem;
      transform: scale(1.1);
    }
  }
`;

const NotFoundPage = () => (
  <div id="four-oh-four-page">
    <SEO title="404: Not found" />
    <Wrapper
      style={{
        marginTop: '7rem',
        marginBottom: '7rem',
        maxWidth: '45rem',
      }}
    >
      <Styled404Container>
        <h1>
          <MdSentimentVeryDissatisfied /> Page not Found
        </h1>
        <p>
          Oops, we can't find the page you are looking forward. Try going back
          to the previous page.
        </p>
      </Styled404Container>
    </Wrapper>
  </div>
);

export default NotFoundPage;
