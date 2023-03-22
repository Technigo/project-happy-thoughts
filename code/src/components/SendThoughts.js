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
      <textarea style={{ color: `${textColor}` }} value={newThought} onChange={onNewThoughtChange} placeholder="Type your happy thought here" />
      <button className="post-button" disabled={newThought.length < 5 || newThought.length > 140} type="submit">❤️ Send Happy Thought ❤️</button>
    </form>
  )
}