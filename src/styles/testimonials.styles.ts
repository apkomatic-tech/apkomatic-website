import styled from 'styled-components';

const StyledTestimonials = styled.section`
  min-height: 20rem;
  padding: 8rem 0 !important;
  position: relative;
  z-index: 1;
  background-color: var(--darkColor);
  // hide arrows on smaller viewports
  .arrow {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  // pagination
  .swiper-pagination {
    bottom: 35px !important;
  }
  .swiper-pagination-bullet {
    width: 16px;
    height: 16px;
    opacity: 0.5;
    background: var(--white);
  }

  .swiper-pagination-bullet-active {
    background: var(--secondaryColor);
    opacity: 1;
  }
`;

const StyledTestimonialItem = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.9);
  .body {
    margin-bottom: 3rem;
  }
  .author {
    margin-bottom: 1rem;
  }
  .author,
  .company {
    line-height: 1;
    text-align: right;
  }
`;
const StyledTestimonialItemContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 7px;
  margin: 0 1.2rem;
  max-width: 80rem;
  padding: 4rem;
`;

export {
  StyledTestimonials,
  StyledTestimonialItem,
  StyledTestimonialItemContainer,
};
