import React, { useState } from 'react';
import Button from './Button';

const InputBox = ({ fetchThoughts }) => {
  const [newThought, setNewThought] = useState('');

  const handleThoughtChange = (e) => {
    setNewThought(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: newThought
      })
    }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
      .then((response) => response.json())
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
      .finally(() => setNewThought(''))
  }
  const handleEnterKey = (event) => {
    if (event.KeyCode === 13) {
      onFormSubmit();
    }
  };
  return (
    <form className="input-box" onSubmit={onFormSubmit}>
      <p>What&apos;s making you happy?</p>
      <input type="text" className="new-thought-input" onChange={handleThoughtChange} onKeyDown={handleEnterKey} value={newThought} />
      <Button buttonText="&#10084;&#65039; Send Happy Thought &#10084;&#65039;" textColor="black" buttonColor="pink" hoverColor="#ff4d4d" buttonWidth="220px" buttonRadius="20px" />
    </form>
  )
}

export default InputBox