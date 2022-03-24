import React, { useEffect, useState } from 'react'
import { API_URL, API_LIKES_URL } from './utils/Api'
import { Form } from './components/Form'
import { ThoughtList } from './components/ThoughtList'

export const App = () => {
  const [thoughts, setThoughts] = useState([])
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)

  // calling useEffect to fetch all messages after component get mounted
  useEffect(() => {
    fetchThoughts()
    // return () => {
    //   console.log('I will be unmounted')
    // }
  }, [])

  const fetchThoughts = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setThoughts(data)) // saves data in the state
  }

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
    setCounter(event.target.value.length)
  }

  // stops refreshing submittion of the form and executes:
  const handleFormSumbit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST', // hämta eller skicka
      headers: {
        // for the API to know what type of data we will send. headers: helps the server understand what will be sent, what i will receive and what i will get back what language, if its pictures osv.
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought }) // 'message' is the key of the object and value is 'my happy thought' skrev nån. a string is sent, json is only strings
    }

    fetch(API_URL, options) // send request to add a new thought
      .then((res) => res.json())
      .then((newThought) => {
        fetchThoughts(newThought)
        setNewThought('') // clears input field after submitting thought
        setCounter(0)
      })
  }

  const handleLikeIncrease = (thoughtId) => {
    const options = {
      method: 'POST'
    }
    fetch(API_LIKES_URL(thoughtId), options)
      .then((res) => res.json())
      .then((data) => {
        fetchThoughts(data)
      })
  }

  return (
    <div>
      <Form
        newThought={newThought}
        setNewThought={setNewThought}
        onFormSubmit={handleFormSumbit}
        onNewThoughtChange={onNewThoughtChange}
        counter={counter}
      />
      <ThoughtList
        thoughts={thoughts}
        handleLikeIncrease={handleLikeIncrease}
      />
    </div>
  )
}
