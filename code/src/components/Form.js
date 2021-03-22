import React, { useState } from 'react';

export const Form = ({ onNewThought }) => {
    const [newThought, setNewThought] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewThought(newThought)
        setNewThought('')
    }

    return (
        <form 
          onSubmit={handleSubmit}
          className="form-container">
        <label htmlFor="message">What's making you happy right now?</label>
        <textarea 
          id="message" 
          type="text" 
          minLength="5"
          maxLength="140"
          value={newThought} 
          onChange={event => setNewThought(event.target.value)}>
        </textarea>
        <button 
          type="submit"
          className="button">Send Happy Thought</button>
      </form>
    )
}