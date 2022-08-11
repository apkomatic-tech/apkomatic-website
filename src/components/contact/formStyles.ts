import styled, { css } from 'styled-components';

const baseInputStyles = css`
  border-radius: 0;
  appearance: none;
  box-shadow: none;
  display: block;
  font-size: inherit;
  line-height: 1;
  transition: border-color 0.15s ease-in-out;
  width: 100%;
  padding: 1rem 0.9rem;
  border: 1px solid #999;
  border-radius: 1px;
  /* box-shadow: 0 0 22px rgba(0, 0, 0, 0.04); */
  outline-offset: -1px;
  &:focus {
    border-color: #444;
  }

  &.hasError {
    color: var(--errorColor);
    border-color: var(--errorColor);
  }
  &::not(.hasError):focus {
    color: var(--errorColor);
  }
  &.hasError:focus {
    outline-color: var(--errorColor);
  }
`;
export const StyledFormHeading = styled.div`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 0;
  @media screen and (min-width: 767px) {
    margin-top: 8rem;
  }
  .heading {
    font-size: clamp(3rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
  }
  .subheading {
    color: #555;
    margin: 1rem 0 0;
  }
`;
export const StyledForm = styled.form`
  --errorColor: #b9003e;
  box-sizing: border-box;
  width: 100%;
  display: block;
  background-color: var(--white);

  border-radius: 8px;
  padding: 3rem 0;
  margin-bottom: 7rem;
  @media screen and (min-width: 767px) {
    padding: 4rem 0;
  }
  * {
    box-sizing: inherit;
  }
`;
export const StyledFormBlock = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 1.345rem;
  z-index: 1;
  &:not::last-of-type {
    margin-bottom: 0;
  }
`;
export const StyledFormError = styled.div`
  color: var(--errorColor);
  font-size: 1.3rem;
  position: absolute;
  bottom: -5px;
  left: 2px;
`;
export const StyledFormInput = styled.input`
  ${baseInputStyles}
`;
export const StyledFormTextArea = styled.textarea`
  ${baseInputStyles}
`;
export const StyledFormLabel = styled.label`
  font-weight: 600;
  cursor: pointer;
  display: inline-block;
  margin-bottom: 0.5rem;
  color: rgba(0, 0, 0, 0.8);
`;
export const StyledAlertContainer = styled.div`
  margin: 2rem 0;
  @media screen and (min-width: 767px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
