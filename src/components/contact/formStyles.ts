import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const baseInputStyles = css`
  border-radius: 0;
  appearance: none;
  box-shadow: none;
  display: block;
  font-size: inherit;
  line-height: 1.5;
  min-height: calc(1.5em + 0.75rem + 2px);
  outline: none;
  transition: border-color 0.15s ease-in-out;
  width: 100%;
  padding: 2rem 0.65rem 0.75rem 1rem;
  border: 1px solid var(--baseTextColor);
  border-radius: 1px;

  &.hasError {
    color: var(--errorColor);
    border-color: var(--errorColor);
  }
  &::not(.hasError):focus {
    color: var(--errorColor);
  }
`;
export const StyledForm = styled.form`
  --errorColor: #b9003e;
  box-sizing: border-box;
  width: 100%;
  display: block;
  background-color: var(--white);
  padding: 0;
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
  font-size: 1.4rem;
  position: absolute;
  bottom: 0;
  left: 0;
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
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  z-index: 5;
  transform-origin: left;
`;
