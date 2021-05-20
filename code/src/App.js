import React, { useState, useEffect } from 'react'

import Form from './components/Form'
import ThoughtList from './components/ThoughtList'
import './index.css'

import { URL, LIKES_URL } from './reusable/url'

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages))
      setMessageNew('')
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    event.target.reset()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: messageNew }),
    }

    fetch(URL, options)
      .then((res) => res.json())
      .then((newMessage) => setMessageList([newMessage,...messageList]))
  }

 /* const handleLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    }

    fetch(LIKES_URL(id), options)
      .then((res) => res.json())
      .then(() => fetchMessageList())
  } */

  return (
    <>
      <Form
        messageNew={messageNew}
        onMessageNewChange={handleMessageNewChange}
        onFormSubmit={handleFormSubmit}
      />
      <ThoughtList
        messageList={messageList}
       // handleLikesIncrease={handleLikesIncrease}
      />
    </>
  )
}
