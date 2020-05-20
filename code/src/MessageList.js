import React, { useEffect, useState } from 'react'
import { LikeButton } from './HappyFeed'
import { MessageInput } from './HappyMessage'

const url = 'https://happy-thoughts-api-by-tuliany.herokuapp.com/'

export const MessageList = () => {
  const [messages, setMessages] = useState([])
  const [postedMessages, setPostedMessages] = useState('')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setMessages(json))
  }, [postedMessages])

  const onFormSubmit = message => {
    setPostedMessages(message)
  }

  const onLiked = messageId => {
    console.log('Logging in the APP.js', messageId)
    // just to check that the func is being called and has the id

    const updatedMessages = messages.map(message => {
      if (message._id === messageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (
    <main>
      <MessageInput onFormSubmit={onFormSubmit} />
      {messages.map(message => (
        <LikeButton key={message._id} message={message} onLiked={onLiked} />
      ))}
    </main>
  )
}