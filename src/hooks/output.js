import { useState } from 'react';
import { getThisThat } from '../services/ThisThatAPI';

export const useOutput = () => {
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

  return { showResult, output, handleClick };
};
