import React, { useState, forwardRef, useImperativeHandle } from 'react';

import CardError from 'components/CardError';

import TextAreaStyled from './style';

const TextArea = forwardRef(({ fieldValue, handleMessage }, ref) => {
  const [charCount, setCharCount] = useState(0);
  const [error, setError] = useState();

  useImperativeHandle(ref, () => ({
    resetField: () => {
      setCharCount(0);
    },
    handleNewError: (err) => {
      setError(err);
    }
  }));

  const onInputChange = (event) => {
    const textVal = event.target.value;
    handleMessage(textVal);
    setCharCount(textVal.length);
  };
  return (
    <>
      <TextAreaStyled
        id="happyThought"
        value={fieldValue}
        rows="5"
        cols="45"
        onChange={onInputChange}
        maxLength="140" />
      {error && <CardError {...error} handleConfirm={() => setError()} />}
      <TextAreaStyled.Counter faded>{charCount} / 140</TextAreaStyled.Counter>
    </>
  );
});

export default TextArea;
