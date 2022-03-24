import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  StyledFeedContainer,
  StyledFeedItem,
} from '../styles/InstagramFeed.styles';
import { FiInstagram } from 'react-icons/fi';
import moment from 'moment';
import { StyledFeatureSection } from '../styles/homepage.styles';

// TODO: fix prop types
const InstagramFeed = props => {
  console.log(props.feed);
  return (
    <StyledFeatureSection>
      <h2 className="text-center feature-section-heading">
        Follow Us On Instagram
      </h2>
      <StyledFeedContainer>
        {props.feed.map(feedItem => {
          const image = getImage(feedItem.localImage);
          return (
            <StyledFeedItem
              key={feedItem.id}
              href={feedItem.permalink}
              rel="noreferrer"
              target="_blank"
            >
              <GatsbyImage image={image} alt="" />
              <div className="feed-item-overlay">
                <div className="feed-item-caption">
                  <div className="feed-item-caption-source">
                    <FiInstagram />{' '}
                    <div>
                      <div className="feed-item-caption-author">
                        {feedItem.username}
                      </div>
                      <div className="feed-item-caption-handle">
                        @{feedItem.username}
                      </div>
                    </div>
                  </div>
                  <div className="feed-item-caption-text">
                    {feedItem.caption}
                  </div>
                </div>
                <div className="feed-item-footer">
                  <div className="feed-item-timestamp">
                    {moment(feedItem.timestamp, 'YYYYMMDD').fromNow()}
                  </div>
                </div>
              </div>
            </StyledFeedItem>
          );
        })}
      </StyledFeedContainer>
    </StyledFeatureSection>
  );
};

export default InstagramFeed;
