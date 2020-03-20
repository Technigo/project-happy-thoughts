import React from 'react'
import Hearts from './Hearts'


const Postcard = ({ message, hearts }) => {
  return (
    <article className="message-card">
      <h3>{message}
        <Hearts heart={hearts} />
      </h3>
    </article>
  )
}

export default Postcard