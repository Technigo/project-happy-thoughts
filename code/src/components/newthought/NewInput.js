import React, { useState } from 'react';

import Textarea from './Textarea';
import InputInfo from './InputInfo';

const NewInput = ({ onInputChange }) => {
  const [newThought, setNewThought] = useState('');

  const onHandleSubmit = event => {
    event.preventDefault();
    onInputChange(newThought);
    setNewThought('');
  };

  return (
    <form className='new-thought' onSubmit={onHandleSubmit}>
      <Textarea newThought={newThought} setNewThought={setNewThought} />
      <InputInfo newThought={newThought} />
    </form>
  );
};

export default NewInput;