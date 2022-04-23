import React from 'react';
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image';
import { FiInstagram } from 'react-icons/fi';
import ScrollAnimation from 'react-animate-on-scroll';

import { InstagramFeedItem } from '../typings/instagram';
import {
  StyledFeedContainer,
  StyledFeedItem,
} from '../styles/InstagramFeed.styles';
import { StyledFeatureSection } from '../styles/homepage.styles';

type InstagramFeedProps = {
  feed: InstagramFeedItem[];
};
const InstagramFeed: React.FC<InstagramFeedProps> = props => {
  return (
    <ScrollAnimation animateIn="fadeInUp" animateOnce duration={0.5}>
      <StyledFeatureSection>
        <h2 className="text-center feature-section-heading">
          Follow Us On Instagram
        </h2>
        <StyledFeedContainer>
          {props.feed.map(fi => {
            const image = getImage(fi.localImage);
            return (
              <StyledFeedItem
                key={fi.id}
                href={fi.permalink}
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
                          {fi.username}
                        </div>
                        <div className="feed-item-caption-handle">
                          @{fi.username}
                        </div>
                      </div>
                    </div>
                    <div className="feed-item-caption-text">{fi.caption}</div>
                  </div>
                  <div className="feed-item-footer">
                    <div className="feed-item-timestamp">{fi.timestamp}</div>
                  </div>
                </div>
              </StyledFeedItem>
            );
          })}
        </StyledFeedContainer>
      </StyledFeatureSection>
    </ScrollAnimation>
  );
};

export default InstagramFeed;
