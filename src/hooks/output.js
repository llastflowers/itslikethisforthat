import React, { useState } from 'react';
import Form from '../components/Form';
import ThisThat from '../components/ThisThat';
import { getThisThat } from '../services/ThisThatAPI';

const ItsLikeFn = () => {
  const [showResult, setShowResult] = useState(false);
  const [output, setOutput] = useState({});

  const toggleResult = () =>
    setShowResult(true);

  const handleClick = () => {
    event.preventDefault();
    getThisThat()
      .then(output => setOutput(output));
    toggleResult();
  };

  return (
    <>     
      {!showResult && <Form
        handleClick={handleClick}/>}
      {showResult && <ThisThat object={output}/>}
    </>
  );
};

export default ItsLikeFn;
