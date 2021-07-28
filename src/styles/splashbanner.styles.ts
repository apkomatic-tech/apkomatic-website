import styled from 'styled-components';

const StyledBanner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 15vh;
  position: relative;
  z-index: 1;
  background-color: var(--primaryColor);
  color: var(--white);
  text-align: center;
  overflow: hidden;
`;
const StyledBannerContainer = styled.div`
  max-width: 60rem;
  margin: auto;
  padding: 4rem 2rem;
  h1 {
    margin-bottom: 2.5rem;
    position: relative;
    z-index: 1;
    padding: 2rem;
    font-size: 2.6rem;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border-radius: 1px;
    .small {
      text-transform: capitalize;
      font-size: 1.6rem;
    }
  }
`;

export { StyledBanner, StyledBannerContainer };
