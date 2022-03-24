import styled from 'styled-components';

export const StyledFeedContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.4rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
export const StyledFeedItem = styled.a`
  text-decoration: none;
  position: relative;
  z-index: 1;
  overflow: hidden;

  .feed-item-overlay {
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    opacity: 0;
    color: var(--white);
  }

  // caption
  .feed-item-caption {
    text-align: left;
    transition: opacity 500ms ease;
    padding: 3rem 4rem 2rem 4rem;
    overflow: auto;
  }

  .feed-item-caption-source {
    font-weight: bold;
    margin-bottom: 2.5rem;
    display: flex;
    align-items: center;
    svg {
      display: inline-block;
      font-size: 2.8rem;
      color: var(--secondaryColor);
      margin-right: 1rem;
    }
    .feed-item-caption-author {
      color: var(--white);
      font-size: 2rem;
    }
    .feed-item-caption-handle {
      color: var(--grey);
      font-size: 1.3rem;
    }
  }
  .feed-item-caption-text {
    font-size: 1.4rem;
  }

  .feed-item-footer {
    padding: 1rem 4rem 2rem 1rem;
    .feed-item-timestamp {
      text-align: right;
      font-size: 1.4rem;
      font-style: italic;
    }
  }

  &:hover .feed-item-overlay,
  &:focus .feed-item-overlay,
  &:active .feed-item-overlay {
    opacity: 1;
  }
`;
