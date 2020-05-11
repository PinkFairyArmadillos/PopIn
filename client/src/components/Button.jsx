import React from 'react';
import PropTypes from 'prop-types';

/* Button used for logging in */
const Button = (props) => {
  const { onClick, title } = props;
  return <button onClick={onClick} type="button">{ title }</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
