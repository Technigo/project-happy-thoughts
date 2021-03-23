import React, {useState, useEffect} from 'react'

import { FETCH_URL } from './reusable/urls'
import NewThoughtForm from './components/NewThoughtForm'
import ThoughtsList from 'components/ThoughtsList'

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

  return (
    <main>
      {/* Form for sending new happy thought message */}
      <NewThoughtForm
        newThought={newThought}
        setNewThought={setNewThought}
        setThoughtsList={setThoughtsList}
        thoughtsList={thoughtsList}
      />

      {/* Conditional template that will show a loading message while the data is being fetched */}
      {isPending && <div className='loading-message'>Loading...</div>}

      {/* Iterating over the array of thoughts and returning JSX for each thought  */}
      {
        thoughtsList.map(thought => 
          <ThoughtsList 
            thought={thought}
          />
        )
      }
    </main>
  )
}
