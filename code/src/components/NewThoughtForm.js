import React from 'react'

const NewThoughtForm = ({onFormSubmit, newThought, setNewThought}) => {

  //Updating newThoughts value from the form input 
  const onNewThoughtChange = event => {
    setNewThought(event.target.value)
  }
  return(
    <form onSubmit={onFormSubmit}>
      <label htmlFor='newThought'>
        <h1>What's making you happy right now?</h1>
        <input 
          type='text'
          id='newThought'
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder='Write your happy thought here ...'
        />
        <button type='submit'>Send Happy Thought</button>
      </label>
    </form>
  )
}

export default NewThoughtForm