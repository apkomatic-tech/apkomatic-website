import styled, { css } from 'styled-components';

type StyledHeaderProps = {
  background?: string;
};
export const StyledSplashHeader = styled.header<StyledHeaderProps>`
  min-height: 220px;
  padding-top: 8rem;
  padding-bottom: 8rem;
  background-color: var(--baseTextColor);
  ${props =>
    props.background
      ? css`
          background-image: url(${props.background});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        `
      : ''}
  .splash-heading {
    font-size: 4rem;
    color: #fff;
    margin: 0;
  }
  .splash-text {
    color: rgba(255, 255, 255, 0.8);
    font-size: 1.8rem;
    @media screen and (min-width: 767px) {
      max-width: 60%;
    }
  }
`;
export const StyledSplashHeaderWrapper = styled.div`
  max-width: var(--desktopWideContainerWidth);
  margin: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;
