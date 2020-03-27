import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Likes } from './Likes'

export const Message = (props) => {

  const { key, message, hearts, createdAt, id, setMessages } = props

  return (
    <>
      <article key={key} className="message-container">
        <div className="text-container">
          < p ><FontAwesomeIcon icon="quote-right" /> {message} <FontAwesomeIcon icon="quote-left" /></p>
        </div>
        <aside>
          <div className="likes-container">
            <Likes hearts={hearts} id={id} setMessages={setMessages} />
          </div>
          <p><ReactTimeAgo date={createdAt} /></p>
        </aside>
      </article>
    </>
  )
}