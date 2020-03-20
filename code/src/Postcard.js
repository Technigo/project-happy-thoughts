import React from 'react'
import Hearts from './Hearts'
import './postcard.css'


const Postcard = ({ message, hearts }) => {
  return (
    <article className="message-card">
      <h3>{message}</h3>
      <Hearts heart={hearts} />
    </article>
  )
}

export default Postcard