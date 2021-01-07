import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  margin: auto;
  max-width: var(--desktopContainerWidth);
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Wrapper = ({ children, ...rest }) => {
  return <StyledWrapper {...rest}>{children}</StyledWrapper>;
};

Wrapper.propTypes = {
  wrapperWidth: PropTypes.string,
};
Wrapper.defaultProps = {
  wrapperWidth: 'normal',
};

export default Wrapper;
