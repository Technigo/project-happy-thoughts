import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { Heart } from './Heart.js'
import './thoughts.css'

export const Thoughts = () => {
  const url = 'https://technigo-thoughts.herokuapp.com/'
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setMessages(json))
  }, [])


  const onMessageLiked = (likedMessageId) => {
    const updatedMessages = messages.map((message) => {
      if (message._id === likedMessageId) {
        message.hearts += 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (
    <div>
      {messages.map(thought => (
        <article className='thought'>
          <p
            className="thought-text"
            key={thought.id}>
            {thought.message}
          </p>
          <div className='thought-details'>
            <div className='heart-div'>
              < Heart
                id={thought._id}
                message={thought.message}
                onMessageLiked={onMessageLiked}
              />
              <p>x</p>
              <p
                key={thought.id}>
                {thought.hearts}
              </p>
            </div>
            <p
              className='time-stamp'
              key={thought.id}>
              {moment(thought.createdAt).fromNow()}
            </p>
          </div>
        </article>
      ))
      }
    </div >

  )


}