import React from 'react'
import Hearts from './Hearts'
import './postcard.css'


const Postcard = ({ message, hearts, createdAt, _id }) => {
  return (
    <article className="message-card">
      <h3>{message}</h3>
      <aside className="message-footer">
        <Hearts heart={hearts} _id={_id} />
        {createdAt}
      </aside>
    </article>
  )
}

export default Postcard