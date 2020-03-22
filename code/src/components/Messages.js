import React, { useEffect } from 'react'
import ReactTimeAgo from 'react-time-ago'
import { LikeButton } from './LikeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Messages = (props) => {

  const { messages, setMessages } = props

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setMessages(json))
  }, [])

  const likedMessage = (likedMessageId) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === likedMessageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (

    <section>
      {messages.map((message, index) => (
        <>
          <article key={index} >
            < p ><FontAwesomeIcon icon="quote-right" /> {message.message} <FontAwesomeIcon icon="quote-left" /></p>
            <div>
              <LikeButton id={message._id} likedMessage={likedMessage} />
              <p>{message.hearts} likes</p>
              <p><ReactTimeAgo date={message.createdAt} /></p>
            </div>
          </article>
        </>
      ))}
    </section>

  )
}
