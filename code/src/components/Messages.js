import React, { useEffect } from 'react'
import ReactTimeAgo from 'react-time-ago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Messages = (props) => {

  const { messages, setMessages } = props

  useEffect(() => {
    fetch("https://technigo-thoughts.herokuapp.com/")
      .then(res => res.json())
      .then(json => setMessages(json))
  }, [])

  return (

    <section>
      {messages.map((message, index) => (
        <>
          <article key={index} >
            < p > {message.message}</p>
            <div>
              <button><FontAwesomeIcon icon="heart" /></button>
              <p>{message.hearts} likes</p>
              <p><ReactTimeAgo date={message.createdAt} /></p>
            </div>
          </article>
        </>
      ))}
    </section>

  )
}
