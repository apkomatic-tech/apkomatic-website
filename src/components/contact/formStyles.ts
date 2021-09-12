import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const baseInputStyles = css`
  border-radius: 0;
  appearance: none;
  box-shadow: none;
  display: block;
  font-size: inherit;
  line-height: 1;
  transition: border-color 0.15s ease-in-out;
  width: 100%;
  padding: 1.35rem 0.65rem 1.35rem 0.95rem;
  border: 1px solid #999;
  border-radius: 7px;
  box-shadow: 0 0 22px rgba(0, 0, 0, 0.04);
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
  margin-top: 8rem;
  margin-bottom: 0;
  .heading {
    font-size: clamp(3rem, 5vw, 4rem);
    font-weight: 700;
    line-height: 1.1;
    margin: 0;
  }
  .subheading {
    color: #888;
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
  padding: 3rem 0 2rem;
  @media screen and (min-width: 767px) {
    padding: 4rem;
  }
  * {
    box-sizing: inherit;
  }
`;
export const StyledFormBlock = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
  z-index: 1;
  &:not::last-of-type {
    margin-bottom: 0;
  }
`;
export const StyledFormError = styled.div`
  color: var(--errorColor);
  font-size: 1.1rem;
  position: absolute;
  bottom: 3px;
  left: 0;
  padding-left: 1rem;
`;
export const StyledFormInput = styled.input`
  ${baseInputStyles}
`;
export const StyledFormTextArea = styled.textarea`
  ${baseInputStyles}
`;
export const StyledFormLabel = styled(motion.label)`
  position: absolute;
  top: 0;
  left: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  z-index: 5;
  transform-origin: left;
  display: inline-block;
`;
export const StyledAlertContainer = styled.div`
  margin: 2rem 0;
  @media screen and (min-width: 767px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;
