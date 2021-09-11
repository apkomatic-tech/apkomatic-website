import styled from 'styled-components';
import { minDesktopWidth } from '../config/styles';

const StyledFooter = styled.footer`
  background: var(--grey);
  font-size: 1.3rem;
`;
const StyledFooterContainer = styled.div`
  max-width: var(--desktopWideContainerWidth);
  margin: auto;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: ${minDesktopWidth}) {
    display: block;
  }
`;
const StyledFooterCompanyCopy = styled.div`
  max-width: 400px;
`;
const StyledFooterCopyright = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  padding: 2rem 0;
`;
const StyledFooterSocial = styled.div`
  display: flex;
  align-items: center;
  strong:first-of-type {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.2rem;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 1rem;
    line-height: 1;
  }
  li {
    margin-right: 0.5rem;
    &:last-of-type {
      margin-right: 0;
    }
  }
  a {
    font-size: 2.6rem;
    color: var(--dark);
    display: block;
    &:hover,
    &:focus {
      color: var(--primaryColor);
    }
  }
`;

export {
  StyledFooter,
  StyledFooterContainer,
  StyledFooterCompanyCopy,
  StyledFooterCopyright,
  StyledFooterSocial,
};
