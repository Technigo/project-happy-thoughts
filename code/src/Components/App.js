import React, { useState, useEffect } from 'react'
import ThoughtsFetched from './ThoughtsFetched'
import PostingForm from './PostingForm'
import { API_URL }  from '../utilities/urls'
import { HEARTS_URL }  from '../utilities/urls'
import Toastify from 'toastify-js'

//TO-DO:
//[X] Rename newMessage to newThought etc. for consistency
//[X] Rename like to heart everywhere for consistency
//[X] Make heart icon also be a button, just like post message button, because accessability
//[X] Make the user only able to heart once!
//[X] check out npm React toast or toastify
//[X] make it impossible to hit send button if message is less than 5 or more than 140 characters!
//[_] create loading State and install npm react loader spiining thingy
//[_] update css attribute hyphen so it works more reliably!
//[_] style using likedThoughts state and window.localStorage.setItem('myLikes', likedThoughts)

export const App = () => {

  //State hooks
  const [latestThoughts, setLatestThoughts] = useState([])
  const [newThought, setNewThought] = useState("")
  const [heartedThoughts, setHeartedThoughts] = useState([])

  //onChange functions
  const onNewThoughtChange = (event) => {
    console.log(`inside PostingForm: ${event.target.value}`)
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
            Toastify({
              text: errorText,
              duration: 3000,
              close: true,
              gravity: 'top', // `top` or `bottom`
              position: 'center', // `left`, `center` or `right`
              backgroundColor: '#ffadad',
              stopOnFocus: true, // Prevents dismissing of toast on hover
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
              console.log(`HEARTED thought id: ${thought._id}`)
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
  
