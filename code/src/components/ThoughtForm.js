import React from 'react'

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">My happy thought</label> 
      <input 
        id="newThought"
        type="text" 
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
      />
      <button type="submit">Send thought!</button>
    </form>
  )
}

export default ThoughtForm