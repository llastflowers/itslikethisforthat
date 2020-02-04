import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    What is <input type="text" placeholder="anything" /> ?<br/>
    <button>Ask!</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func
};

export default Form;
