import React from 'react';
import Button from './Button';

const InputBox = () => {
  return (
    <div className="input-box">
      <p>What&apos;s making you happy?</p>
      <input type="text" className="new-thought-input" />
      <Button buttonText="Send Happy Thought" textColor="black" buttonColor="hotpink" buttonWidth="175px" />
    </div>
  )
}

export default InputBox