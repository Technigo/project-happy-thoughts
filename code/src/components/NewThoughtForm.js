import React from 'react'

import { FETCH_URL } from '../reusable/urls'

const NewThoughtForm = ({newThought, setNewThought, setThoughtsList, thoughtsList}) => {

  //Updating newThoughts value from the form input 
  const onNewThoughtChange = event => {
    setNewThought(event.target.value)
  }

   //When the form is submitted save the newThought message on the server by using fetch post request
   const onFormSubmit = event => {
    event.preventDefault()

    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch(FETCH_URL, postRequest)
      .then(response => response.json())
      .then(receivedThought => setThoughtsList([...thoughtsList, receivedThought]))
      .catch(error => console.error(error))
  }

  //Returning JSX for the new thoughts form input
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