import React, { useEffect, useState } from 'react';

export const SendThoughts = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  const [textColor, setTextColor] = useState('black');

  useEffect(() => {
    if (newThought.length < 5 || newThought.length > 140) {
      console.log(newThought)
      setTextColor('red')
    } else { setTextColor('black') }
  }, [newThought, textColor])

  return (
    <form onSubmit={onFormSubmit}>
      <h1>What&apos;s making you happy right now?</h1>
      <textarea rows="4" cols="40" style={{ color: `${textColor}` }} value={newThought} onChange={onNewThoughtChange} placeholder="Type your happy thought here..." />
      <p className={newThought.length < 5 || newThought.length > 140 ? 'counter-red' : 'counter'}>{newThought.length}/140</p>
      <button className="post-button" disabled={newThought.length < 5 || newThought.length > 140} type="submit">❤️ Send Happy Thought ❤️</button>
    </form>
  )
}