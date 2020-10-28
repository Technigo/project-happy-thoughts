import React, { useState } from 'react';

export const ThoughtInput = ({ onMessageChange}) => {
  const [newThought, setNewThought] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onMessageChange(newThought)
  }

  const handleThought = event => {
    setNewThought(event.target.value)
  }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                onChange={handleThought}
            />
            <button
                type='submit'
                disabled={newThought.length < 5 || newThought.length > 140 ? true : false}
            >
            send happy thought
            </button>
            <p>{newThought.length} / 140</p>
        </form>
    )

}