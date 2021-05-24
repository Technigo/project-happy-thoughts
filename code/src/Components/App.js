import React, { useState, useEffect } from 'react'
import ThoughtsFetched from './ThoughtsFetched'
import PostingForm from './PostingForm'
import { API_URL }  from '../utilities/urls'
import { HEARTS_URL }  from '../utilities/urls'
import Toastify from 'toastify-js'

export const App = () => {

  //State hooks
  const [latestThoughts, setLatestThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [heartedThoughts, setHeartedThoughts] = useState([])

  //onChange functions
  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  useEffect (() => {
    fetchMessages()
  }, [])

  const fetchMessages = () => {
    fetch(API_URL, {
      method: 'GET'}
    )
    .then(res => res.json())
    .then(messages => setLatestThoughts(messages))
    .catch(err => console.error(err))
  }

  const submitThought = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch(API_URL, options)
      .then(res => res.json())
      .then(returnedMessage => {
        if (returnedMessage.hasOwnProperty('errors')) {
          const errorType = returnedMessage.errors.message.kind
          let errorText = 'An unexpected error occured! Please try again later.'
          if (errorType === 'required' || errorType === 'minlength' || errorType === 'maxlength') {
            errorText = 'Your Thought must be between 5 to 140 characters long!'
          }
            //Toastify library allows the creation of a styled alert/notification pop-up
            Toastify({
              text: errorText,
              duration: 3000,
              close: true,
              gravity: 'top',
              position: 'center', 
              backgroundColor: '#ffadad',
              stopOnFocus: true,
            }).showToast()
          
        } else {
          setLatestThoughts([returnedMessage, ...latestThoughts])
          setNewThought('')
        }
      })
      .catch(err => console.log(err))
  }

  const onHeartsIncrease = (thoughtID, event) => {

    if (heartedThoughts.find(heartedThoughtID => heartedThoughtID === thoughtID) === undefined) {
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
  
      fetch(HEARTS_URL(thoughtID), options)
        .then(res => res.json())
        .then((heartedThought) => {
          const updatedThoughts = latestThoughts.map(thought => {
            if (thought._id === heartedThought._id) {
              thought.hearts += 1
              setHeartedThoughts([...heartedThoughts, thought._id])
            }
            return thought
          })
          setLatestThoughts(updatedThoughts)
        })
        .catch(err => console.error(err))
  
      setNewThought('')

    } else {

    }
  }

  return (
    <div className='main-wrapper'>
      <PostingForm 
        newThought={newThought}
        onNewThoughtChange={onNewThoughtChange}
        send={submitThought}
      />
      <ThoughtsFetched 
        latestThoughts={latestThoughts}
        heart={onHeartsIncrease}
        heartedThoughts={heartedThoughts}
      />
    </div>
  )
}
  
