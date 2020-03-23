import React, { useEffect } from 'react'
import ReactTimeAgo from 'react-time-ago'
import { LikeButton } from './LikeButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Messages = (props) => {

  const { messages, setMessages, setLoading } = props

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        setMessages(json)
      }
      )
  }, [])

  const likedMessage = (likedMessageId) => {
    const updatedMessages = messages.map((message) => {

      if (message._id === likedMessageId) {
        message.hearts += 1
        localStorage[message._id] = Number(localStorage[message._id]) + 1
      }
      return message
    })
    setMessages(updatedMessages)
  }

  return (

    <section>
      {messages.map((message, index) => (
        <>
          <article key={index} className="message-container">
            <div className="text-container">
              < p ><FontAwesomeIcon icon="quote-right" /> {message.message} <FontAwesomeIcon icon="quote-left" /></p>
            </div>
            <aside>
              <div className="likes-container">
                <LikeButton id={message._id} likedMessage={likedMessage} />
                <p>{message.hearts} likes (you liked this {localStorage[message._id]} times)</p>
              </div>
              <p><ReactTimeAgo date={message.createdAt} /></p>
            </aside>
          </article>
        </>
      ))}
    </section>

  )
}
