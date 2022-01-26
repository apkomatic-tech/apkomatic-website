import React, { useEffect, useRef, useState } from 'react';
import { graphql } from 'gatsby';

// components
import SEO from '../components/Seo';
import InstagramFeed from '../components/InstagramFeed';
import Hero from '../components/home/Hero';
import Featured from '../components/home/Featured';
import GetStarted from '../components/home/GetStarted';

function unveil(element: HTMLElement, onIntersecting: () => void) {
  const unveilCallback: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    onIntersecting();
    observer.unobserve(entry.target);
  };
  const unveilOpts: IntersectionObserverInit = {
    root: null,
    threshold: 0.5,
  };
  const intObserver = new IntersectionObserver(unveilCallback, unveilOpts);
  intObserver.observe(element);
}

const IndexPage = ({ data }) => {
  const [showCallToAction, setShowCallToAction] = useState(false);
  const callToActionElementRef = useRef<HTMLElement>();
  const feed = data.allInstagramContent.nodes;

  useEffect(() => {
    unveil(callToActionElementRef.current, () => setShowCallToAction(true));
  });

  return (
    <div id="homepage">
      <SEO title="Home" />
      <Hero />
      <Featured />
      <InstagramFeed feed={feed} />
      <GetStarted
        elRef={callToActionElementRef}
        showCallToAction={showCallToAction}
      />
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
        timestamp
      }
      totalCount
    }
  }
`;
