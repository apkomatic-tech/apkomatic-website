import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: auto;
  max-width: ${({ wrapperWidth }) =>
    wrapperWidth === 'small' ? '65rem' : 'var(--desktopContainerWidth)'};
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Wrapper = ({ wrapperWidth, children, ...rest }) => {
  return (
    <StyledWrapper wrapperWidth={wrapperWidth} {...rest}>
      {children}
    </StyledWrapper>
  );
};

Wrapper.propTypes = {
  wrapperWidth: PropTypes.string,
};
Wrapper.defaultProps = {
  wrapperWidth: 'normal',
};

export default Wrapper;
