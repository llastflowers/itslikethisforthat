import React from 'react';
import PropTypes from 'prop-types';

const ThisThat = ({ thiss, that }) => (
  <section>
    <h1></h1>
    <h2>It&8217;s like {thiss} for {that}.</h2>
  </section>
);

ThisThat.propTypes = {
  thiss: PropTypes.string.isRequired,
  that: PropTypes.string.isRequired
};

export default ThisThat;
