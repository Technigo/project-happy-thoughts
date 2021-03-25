import React, { useState, useEffect } from 'react'

// URLS
import { HAPPY_THOUGHTS_URL, LIKE_THOUGHT_URL } from './reusable/urls'

// Components
import SendThought from './components/SendThought'
import ThoughtsList from './components/ThoughtsList'
import Loader from './components/Loader'
import ErrorPopup from './components/ErrorPopup'

export const App = () => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [newThought, setNewThought] = useState('')
  const [error, setError] = useState('hide')
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    fetchThoughtsList()
  }, [])

  //GET:
  const fetchThoughtsList = () => {
    fetch(HAPPY_THOUGHTS_URL)
      .then(response => response.json())
  //    .then(thoughts => setThoughtsList(thoughts))
      .then((thoughts => {
        if (thoughts.ok) {  //if loading is true it should "turn off" setLoading 
          setLoading(false)
        } else { // ? 
          setThoughtsList(thoughts)
        }
      })) 
      .catch(error => console.error(error))
  }

  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value)
  }

  //POST: 
    const handleFormSubmit = (e) => {
    e.preventDefault()

    const options = {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ message: newThought })
      }

    fetch(HAPPY_THOUGHTS_URL, options)
      .then(response => {
        if (!response.ok) { 
          setError('show');
          setNewThought('')
            return null;
        } 
        return response.json();
      }) 
      
      .then(response => {
        if (response) {
          fetchThoughtsList()
        }
      })
      .catch(error => console.error(error))
      
/*       fetch(HAPPY_THOUGHTS_URL, options)
        .then(response => {
          if (response.ok) { 
            fetchThoughtsList()
          } else { 
            setError('show')
            setNewThought('')
          }
        })
        .catch(error => console.error(error)) */

      // .then(recievedThought => setThoughtsList([...thoughtsList, recievedThought]))
      // Refetch data from the server & update local state at the same time.

//      .then(() => fetchThoughtsList())
  } 

  const handleHeartsIncrease = (id) => {

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(LIKE_THOUGHT_URL(id), options)
      .then(res => res.json())
      .then(() => fetchThoughtsList())
      .catch(err => console.error(err))
  }

  return (
    <>
      <SendThought 
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        handleFormSubmit={handleFormSubmit}
      />
      <ThoughtsList 
        thoughtsList={thoughtsList}
        handleHeartsIncrease={handleHeartsIncrease}  
      />
{/*       {error === 'show' &&
        <ErrorPopup
          message="Oops, your message needs to be more than 4 characters. Please give it one more try!" 
          setError={setError} 
        />
      } */}
      { error ? 
      <ErrorPopup
        message="Oops, your message needs to be more than 4 characters. Please give it one more try!" 
        setError={setError} 
      /> : 
      null 
      }

      {loading === true && 
        <Loader />
      }
    </>
  )
}
