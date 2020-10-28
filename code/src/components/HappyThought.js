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
        //data.reverse() - if we wanted to reverse the order
        const filteredMessages = data.filter(message => message._id) // - to filter the empty messages

        setMessages(filteredMessages.slice(0, 10)) // - slice will minimize the array 
      })
  },[])

  return(
    <section className="thoughts-section">
      {messages.map(message => {
      return (
        <article className="thought-container">
          <p key={message._id} className="text-message">
            {message.message}
          </p>
          <div className="thought-footer">
            <HappyHeart />
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