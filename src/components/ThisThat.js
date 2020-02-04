import React from 'react';
import PropTypes from 'prop-types';

const ThisThat = ({ object }) => {
  console.log(object);
  const thing1 = object.this;
  const thing2 = object.that;
  return (
    <section>
      {/* <h1>What is that thing?</h1> */}
      <h2>So, basically, it&#39;s like {thing1} for {thing2}.</h2>
    </section>
  );
};

ThisThat.propTypes = {
  object: PropTypes.object
};

export default ThisThat;
