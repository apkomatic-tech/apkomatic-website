import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import getInstagramFeed from '../api/getInstagramFeed';

interface StyledFeedContainerProps {
  count: number;
}
const StyledFeedContainer = styled.section<StyledFeedContainerProps>`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media screen and (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const StyledFeedItem = styled.a`
  text-decoration: none;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .instagram-caption {
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 15;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: left;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--white);
    transition: opacity 500ms ease;
  }

  .instagram-caption-username {
    /* font-size: 1.6rem; */
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .instagram-caption-text {
    font-size: 1.4rem;
  }
  .instagram-caption-wrapper {
    max-width: 75%;
    max-height: 300px;
    overflow-y: auto;
  }

  &:hover .instagram-caption {
    opacity: 1;
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
`;

const InstagramFeed = ({ count = 5 }: { count?: number }) => {
  const [feed, setFeed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getInstagramFeed(['username'])
      .then(data => {
        if (data.hasOwnProperty('error')) {
          setError(data.error);
          setIsLoading(false);
          return;
        }

        setError(null);
        setIsLoading(false);
        setFeed(data);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, []);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  if (error) {
    return <div>There was an error loading Instagram feed</div>;
  }
  if (isLoading) {
    return <div>Loading Instagram Feed...</div>;
  }
  return (
    <StyledFeedContainer count={count}>
      {feed
        .filter(
          feedItem =>
            feedItem.media_type === 'IMAGE' ||
            feedItem.media_type === 'CAROUSEL_ALBUM'
        )
        .slice(0, count)
        .map((feedItem, index) => {
          console.log(feedItem);
          return (
            <StyledFeedItem
              key={feedItem.id}
              href={feedItem.permalink}
              rel="noreferrer"
              target="_blank"
            >
              <img src={feedItem.media_url} alt="" />
              <div className="instagram-caption">
                <div className="instagram-caption-wrapper">
                  <div className="instagram-caption-username">
                    @{feedItem.username}
                  </div>
                  <div className="instagram-caption-text">
                    {feedItem.caption}
                  </div>
                </div>
              </div>
            </StyledFeedItem>
          );
        })}
    </StyledFeedContainer>
  );
};

export default InstagramFeed;
