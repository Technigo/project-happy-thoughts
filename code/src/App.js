import React, { useEffect, useState } from 'react'
import FormNewThought from './components/FormNewThought'
import ThoughtsList from './components/ThoughtsList'
import LoadingSpinner from './components/LoadingSpinner'
import Header from 'components/Header'

import { API_URL, LIKES_URL, DELETE_URL } from './utils/urls'


export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    fetchThoughts()
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setThoughts(data.response)
        console.log(data)
      })
      .finally(() => {
        setLoading(false)
      })
      .catch(error => console.error(error))
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought, name: username })
    }

    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        //if error, then invoke error function
        if (data.errors) {
          handleError(data)
        }
        else {
          // no error, fetch thoughts after loading spinner, empty the input and empty the error
          setLoading(true)
          setTimeout(() => fetchThoughts(), 200);
          setNewThought('')
          setUsername('')
          setError('')
        }
      })
      .catch(error => console.error(error))
  }

  const handleError = (data) => {
    const errorMessage = data.errors.message.kind

    if (errorMessage === 'required') {
      setError('You cannot send an empty message!')
    } else if (errorMessage === 'minlength') {
      setError('Your message should be at least 5 characters!')
    } else if (errorMessage === 'maxlength') {
      setError('Your message is too long! Max 140 characters')
    }
  }

  const handleLikesIncrease = (id) => {
    const likes = {
      method: 'POST',
    }

    fetch(LIKES_URL(id), likes)
      .then(res => res.json())
      .then((data) => fetchThoughts())
      .catch(error => console.error(error))
  }

  const handleDeleteThoughts = (id) => {
    const options = {
      method: 'DELETE'
    }

    fetch(DELETE_URL(id), options)
      .then((data) => fetchThoughts())
      .catch(error => console.log(error))
  }


  return (
    <main className="main-container">
      <Header />
      <FormNewThought
        newThought={newThought}
        setNewThought={setNewThought}
        username={username}
        setUsername={setUsername}
        onFormSubmit={handleFormSubmit}
        error={error}
      />
      {loading && <LoadingSpinner />}
      <ThoughtsList
        username={username}
        thoughts={thoughts}
        onLikeSubmit={handleLikesIncrease}
        onDeleteThought={handleDeleteThoughts}
      />
    </main >
  )
}

export default App
