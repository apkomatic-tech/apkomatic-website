import styled from 'styled-components';

type StyledWrapperProps = {
  wide?: boolean;
};
const Wrapper = styled.div<StyledWrapperProps>`
  margin: auto;
  max-width: ${props =>
    props.wide
      ? 'var(--desktopWideContainerWidth)'
      : 'var(--desktopContainerWidth)'};
  padding-left: 2rem;
  padding-right: 2rem;
`;

export default Wrapper;
