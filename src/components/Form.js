import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ handleClick }) => (
  <form onSubmit={handleClick}>
    <button>What does your startup do?</button>
  </form>
);

Form.propTypes = {
  handleClick: PropTypes.func
};

export default Form;
