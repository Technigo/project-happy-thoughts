import React from 'react';
import Button from './Button';

const ThoughtBox = () => {
  return (
    <div className="thought-box">
      <p>Thoughts will go here</p>
      <Button buttonText="Heart" textColor="black" buttonColor="hotpink" buttonWidth="60px" />
    </div>
  )
}

export default ThoughtBox