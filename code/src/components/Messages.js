import React, { useEffect } from 'react'
import { Message } from './Message'

export const Messages = (props) => {

  const { messages, setMessages, setLoading } = props

  useEffect(() => {
    fetch("https://rautellin-happy-thoughts-api.herokuapp.com/thouhts")
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        setMessages(json)
      }
      )
  }, [setLoading, setMessages])

  return (

    <section>
      {messages.map((message, index) => (
        <Message
          key={index}
          message={message.message}
          hearts={message.hearts}
          createdAt={message.createdAt}
          id={message._id}
          setMessages={setMessages}
        />
      ))}
    </section>

  )
}
