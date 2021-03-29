/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';

import SubmissionForm from './SubmissionForm'
import MessageList from './MessageList'

import { API_URL, API_LIKES_URL } from './urls';

export const Form = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('')

  useEffect(() => {
    fetchMessageList()
  }, [])

  const fetchMessageList = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(messages => setMessageList(messages))
      .catch(err => console.log(err))
  }

  const handleMessageNewChange = (event) => {
    setMessageNew(event.target.value)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: messageNew })

    }

    fetch(API_URL, options)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('Ups 🙁, something went wrong. Maybe your message is too short 🙂, mimimal number of characters is 5')
        }
      })
      .then(receivedMessage => setMessageList([receivedMessage, ...messageList]))
      .catch(err => alert(err))
    setMessageNew('')
  }

  const handleLikesIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }

    fetch(API_LIKES_URL(id), options)
      .then(res => res.json())
      .then(receivedMessage => {
        const updatedMessageList = messageList.map(message => {
          if (message._id === receivedMessage._id) {
            message.hearts += 1
          }
          return message
        })
        setMessageList(updatedMessageList)
      })
      .catch(err => console.error(err))
  }

  return (
    <div>
      <SubmissionForm
        messageNew={messageNew}
        onMessageNewChange={handleMessageNewChange}
        onFormSubmit={handleFormSubmit}
      />

      <MessageList
        messageList={messageList}
        handleLikesIncrease={handleLikesIncrease}
      />
    </div>
  )
}

