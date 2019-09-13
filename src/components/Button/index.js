import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Button as StyledButton } from './styles';

const Button = ({ children, to, primary }) => <>
  <Link to={to}>
    <StyledButton primary={primary}>
      {children}
    </StyledButton>
  </Link>
</>

Button.propTypes = {
  primary: PropTypes.bool,
};

Button.defaultProps = {
  primary: true,
};

export { Button };
