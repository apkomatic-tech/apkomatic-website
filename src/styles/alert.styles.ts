import styled, { css } from 'styled-components';

function handleThemingFromType(type: string) {
  switch (type) {
    case 'error':
      return css`
        background-color: var(--redOpaque);
        border-color: var(--red);
        .icon {
          color: var(--red);
        }
      `;
    case 'warning':
      return css`
        background-color: var(--yellowOpaque);
        border-color: var(--yellow);
        .icon {
          color: var(--yellow);
        }
      `;
    case 'success':
    default:
      return css`
        background-color: var(--greenOpaque);
        border-color: var(--green);
        .icon {
          color: var(--green);
        }
      `;
  }
}

type StyledAlertProps = {
  type: string;
};
export const StyledAlert = styled.div<StyledAlertProps>`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-gap: 1rem;
  padding: 2rem;
  align-items: center;
  border-left: 6px solid;
  border-radius: 2px;
  .icon {
    font-size: 2.35rem;
    padding-right: 1rem;
  }
  .heading {
    font-weight: 700;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.86);
    font-size: 1.6rem;
    line-height: 1.1;
  }
  .text {
    color: rgba(0, 0, 0, 0.7);
    font-size: 1.4rem;
  }
  .close-btn {
    appearance: none;
    line-height: 1;
    text-decoration: none;
    text-align: center;
    font-size: 2rem;
    background: none;
    border: 0;
    cursor: pointer;
    padding: 0;
  }
  .close-btn svg {
    opacity: 0.8;
  }
  ${props => handleThemingFromType(props.type)};
`;
