import React, {useEffect, useState} from 'react'
import moment from 'moment'
import { HappyHeart } from './HappyHeart.js'
import './happyThought.css'

export const HappyThought = () => {
  const url = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        //data.reverse() - if I wanted to reverse the order
        setMessages(data.slice(0, 10)) // - slice will minimize the array 
      })
  },[])

  const onLiked = messageId => {
    const updatedThoughts = messages.map(message => {
      if(message._id === messageId) {
        message.hearts += 1 
      }
      return message
    })
    setMessages(updatedThoughts)
  }

  return(
    <section className="thoughts-section">
      {messages.map(message => {
      return (
        <article className="thought-container">
          <p key={message._id} className="text-message">
            {message.message}
          </p>
          <div className="thought-footer">
            <HappyHeart onLiked={onLiked} message={message.message} hearts={message.hearts} id={message._id} />
            <p className="text-time">
              {moment(message.createdAt).fromNow()} 
            </p>
          </div>
        </article>
        )
      })
      }
    </section>
  )
}