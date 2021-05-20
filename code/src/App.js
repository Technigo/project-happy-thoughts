import React, {useState, useEffect} from 'react'

import { FETCH_URL, LIKE_URL } from './reusable/urls'

import NewThoughtForm from './components/NewThoughtForm'
import ThoughtsList from 'components/ThoughtsList'

export const App = () => {

  const [thoughtsList, setThoughtsList] = useState([])
  const [isPending, setIsPending] = useState(true)
  const [newThought, setNewThought] = useState('')
  const [error, setError] = useState(null)

  useEffect (() => {
    fetchThoughtsList()
  }, [])

  // Fetching data from an API
  const fetchThoughtsList = () => {
    fetch(FETCH_URL)
    .then (response => {
      if (!response.ok) {
        throw Error('Could not fetch the data for that resource')
      }
      return response.json()
      })
    .then(data => {
      setThoughtsList(data)
      //Changing the state of isPending to false and hiding the Loading message when the fetching is completed 
      setIsPending(false)
      setError(null)
    })
    //Catching errors during the fetch
    .catch(err => {
      setIsPending(false)
      setError(err.message)
    })
  }

  return (
    <main className='main-wrapper'>
      {error && <div>{ error }</div>}
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
            key={thought._id}
            thought={thought}
            LIKE_URL={LIKE_URL}
            thoughtsList={thoughtsList}
            setThoughtsList={setThoughtsList}
          />
        )
      }
    </main>
  )
}
