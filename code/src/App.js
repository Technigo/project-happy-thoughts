import React, {useState, useEffect} from 'react'
import moment from 'moment'

import { FETCH_URL } from './reusable/urls'

export const App = () => {
  // STATES
  const [thoughtsList, setThoughtsList] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [newThought, setNewThought] = useState('')

  // useEffect HOOK

  useEffect (() => {
    fetchThoughtsList()
  }, [])

  // FUNCTIONS

  // Fetching data from an API
  const fetchThoughtsList = () => {
    fetch(FETCH_URL)
    .then (response => response.json())
    .then(data => {
      setThoughtsList(data);
      //Changing the state of isPending to false when the fetching is completed 
      setIsPending(false);
    })
    //Catching errors during the fetch
    .catch(err => console.error(err))
  }

  //
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

  return (
    <main>
      {/* Form for sending new happy thought message */}
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

      {/* Conditional template that will show a loading message while the data is being fetched */}
      {isPending && <div className='loading-message'>Loading...</div>}

      {/* Iterating over the array of thoughts and returning JSX for each thought  */}
      {thoughtsList.map(thought => {
        return(
          <div key={thought._id}>
            <h2>{thought.message}</h2>
            <p className='date'>-{moment(thought.createdAt).fromNow()}</p>
          </div>
        )
      })}
    </main>
  )
}
