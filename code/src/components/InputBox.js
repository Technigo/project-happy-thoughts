import React, { useState } from 'react';
// import Confetti from 'react-confetti';

import Button from './Button';

const InputBox = ({ fetchThoughts, clickCount }) => {
  const [newThought, setNewThought] = useState('');
  const [characters, setCharacters] = useState(0);
  // const [confetti, setConfetti] = useState(false)

  const handleThoughtChange = (e) => {
    setNewThought(e.target.value);
    setCharacters(e.target.value.length);
  }

  const handleErrorMessage = () => {
    if (characters < 5) {
      alert('Please enter more than 5 characters for your happy thought.')
    } else if (characters > 140) {
      alert('Please enter less than 140 characters for your happy thought.')
    }
  }

  const onFormSubmit = (e) => {
    // setConfetti(true)
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
      .then((data) => {
        if (data.errors) {
          handleErrorMessage()
        } else fetchThoughts()
      })
      .finally(() => {
        setNewThought('');
      })
  }
  const handleEnterKey = (event) => {
    if (event.KeyCode === 13) {
      onFormSubmit();
    }
  };
  return (
    <form className="input-box" onSubmit={onFormSubmit}>
      {/* eslint-disable-next-line max-len */}
      {/* {confetti && <Confetti colors={['#f44336', '#e91e63']} recycle={false} numberOfPieces={60} />} */}
      <p>What&apos;s making you happy?</p>
      <input type="text" className="new-thought-input" onChange={handleThoughtChange} onKeyDown={handleEnterKey} value={newThought} />
      <div className="counters">
        <p>{characters}/140</p>
        <p>Your Likes: {clickCount}</p>
      </div>
      <Button
        buttonText="&#10084;&#65039; Send Happy Thought &#10084;&#65039;"
        textColor="black"
        buttonColor="pink"
        hoverColor="#ff4d4d"
        buttonWidth="240px"
        buttonRadius="20px" />
    </form>
  )
}

export default InputBox