import React, { useState, useEffect } from 'react'

import { THOUGHTS_URL, LIKES_URL } from './reusable/urls'
import MessageList from './components/MessageList'
import MessageForm from './components/MessageForm'

export const App = () => {
const [thoughtList, setThoughtList] = useState([])
const [thoughtNew, setThoughtNew] = useState('')

  
  const fetchThoughtList = () => {
    fetch(THOUGHTS_URL)
      .then(res => res.json())
      .then(thoughts => {
        setThoughtList(thoughts)
      })
      .catch((err) => console.log(err))
    }

  const onLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      }
    }
    fetch(LIKES_URL(id), options)
      // .then(fetchThoughtList())
      // .catch(err => console.log(err))
    fetch(LIKES_URL(id), options)
      .then(res => res.json())
      .then(receivedThought => {
        const updatedThoughtList = thoughtList.map(thought => {
          if (thought._id === receivedThought._id) {
            thought.hearts += 1
          }
          return thought
        })
        setThoughtList(updatedThoughtList)
      })
      .catch(err => console.log(err))
  }

  const onFormSubmit = (event) => {
    if (thoughtNew.length < 4 || thoughtNew.length > 140) {
      alert('Your messsage needs to be between 5 and 140 characters!')
    } else {

      console.log('submit')
      event.preventDefault()
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: thoughtNew })
      }
      fetch(THOUGHTS_URL, options)
      .then(res => res.json())
      .then(receivedThought => setThoughtList([receivedThought, ...thoughtList]))
      .catch(err => console.log(err))
      
      setThoughtNew('')
    }
  } 
  console.log(thoughtNew.length > 4 && thoughtNew.length < 140)
  const onThoughtNewChange = (event) => {
    setThoughtNew(event.target.value)
    console.log(thoughtNew)
  }

  console.log(thoughtList)

  useEffect(() => {
    fetchThoughtList()
  }, [])

  return (
    <>
    <MessageForm 
      onFormSubmit={onFormSubmit}
      thoughtNew={thoughtNew}
      onThoughtNewChange={onThoughtNewChange}
    />
    <MessageList 
      thoughtList={thoughtList}
      onLikesIncrease={onLikesIncrease}
    />
    </>
  )
}
