import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <button>What does your startup do?</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
