import React from 'react'

import { FETCH_URL } from '../reusable/urls'

const NewThoughtForm = ({newThought, setNewThought, setThoughtsList, thoughtsList}) => {

  //Updating newThoughts value (message the user sumbit) from the form input 
  const onNewThoughtChange = event => {
    setNewThought(event.target.value)
  }

   //When the form is submitted save the newThought (message the user sumbit) on the server by using fetch post request and update the list of all happy thoughts
   const onFormSubmit = event => {
    event.preventDefault()
    setNewThought('')

    const postRequest = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch(FETCH_URL, postRequest)
      .then(response => response.json())
      .then(receivedThought => setThoughtsList([receivedThought, ...thoughtsList]))
      .catch(error => console.error(error))
  }

  return(
    <form className='thought-form' id='form' onSubmit={onFormSubmit}>
      <label htmlFor='newThought' className='new-thought'>
        <h1 className='form-title'>What's making you happy right now?</h1>
        <textarea
          className='form-input'
          id='newThought'
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder='Write your happy thought here ...'
          form='form'
        >
        </textarea>
        {/* Remaining characters counter */}
        <div className="the-count">
          <span className={newThought.length > 140 ? 'red-counter' : 'black-counter'}>{newThought.length} / 140</span>
        </div>
        <button
          type='submit'
          className='form-button'
          // Conditionally disable submit button if there are more than 140 characters
          disabled={newThought.length === 0 || newThought.length > 140}>
            <span role='img' aria-label='heart emoji'>❤️</span>Send Happy Thought<span role='img' aria-label='heart emoji'>❤️</span>
        </button>
      </label>
    </form>
  )
}

export default NewThoughtForm