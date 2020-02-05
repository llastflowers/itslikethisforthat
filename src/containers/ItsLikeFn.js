import React from 'react';
import Form from '../components/Form';
import ThisThat from '../components/ThisThat';
import { useOutput } from '../hooks/output';

const ItsLikeFn = () => {
  const { showResult, output, handleClick } = useOutput();

  return (
    <>     
      {!showResult && <Form
        handleClick={handleClick}/>}
      {showResult && <ThisThat object={output}/>}
    </>
  );
};

export default ItsLikeFn;
