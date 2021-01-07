import styled from 'styled-components';

interface StyledButtonProps {
  readonly large: boolean;
}

export const StyledBaseButton = styled.button<StyledButtonProps>`
  // subtle shadow
  appearance: none;
  background: var(--grey);
  border-radius: 3px;
  border: 2px solid transparent;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  color: var(--baseTextColor);
  cursor: pointer;
  display: inline-block;
  font-family: var(--headingFont);
  font-size: ${props => (props.large ? '2rem' : '')};
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1;
  opacity: 0.9;
  padding: ${props => (props.large ? '1.2rem' : '0.8rem')};
  text-align: center;
  text-decoration: none;
  transition: 300ms ease;
  &:hover {
    opacity: 1;
  }
`;

export const StyledPrimaryButton = styled(StyledBaseButton)`
  color: var(--white);
  border-color: var(--primaryColor);
  background: var(--primaryColor);
  &:hover,
  &:focus {
    color: var(--white);
    border-color: var(--primaryColor);
    background: var(--primaryColor);
  }
`;

export const StyledSecondaryButton = styled(StyledBaseButton)`
  color: var(--baseTextColor);
  border-color: var(--secondaryColor);
  background: var(--secondaryColor);
  &:hover,
  &:focus {
    color: var(--baseTextColor);
    border-color: var(--secondaryColor);
    background: var(--secondaryColor);
  }
`;

export const StyledPrimaryButtonWithArrow = styled(StyledPrimaryButton)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  svg {
    margin-left: 10px;
    transition: 100ms;
    transform: translateX(0);
  }
  &:hover svg {
    transform: translateX(10px);
  }
`;

export const StyledSecondaryButtonWithArrow = styled(StyledSecondaryButton)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  svg {
    margin-left: 10px;
    transition: 100ms;
    transform: translateX(0);
  }
  &:hover svg {
    transform: translateX(10px);
  }
`;
