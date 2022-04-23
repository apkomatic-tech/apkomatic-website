import React from 'react';
import { graphql } from 'gatsby';
// components
import SEO from '../components/Seo';
import InstagramFeed from '../components/InstagramFeed';
import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import GetStarted from '../components/home/GetStarted';

const IndexPage = ({ data }) => {
  const feed = data.allInstagramContent.nodes;

  return (
    <div id="homepage">
      <SEO title="Home" />
      <Hero />
      <Featured />
      <GetStarted />
      <InstagramFeed feed={feed} />
    </div>
  );
};

export default IndexPage;
export const query = graphql`
  query MyQuery {
    allInstagramContent(filter: { media_type: { eq: "IMAGE" } }, limit: 6) {
      nodes {
        id
        caption
        media_url
        media_type
        media_id
        localImage {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: DOMINANT_COLOR
              width: 500
              height: 500
            )
          }
        }
        thumbnail_url
        username
        permalink
        timestamp(fromNow: true)
      }
      totalCount
    }
  }
`;
