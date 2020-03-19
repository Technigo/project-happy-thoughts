import React from 'react'

const Postcard = ({ message }) => {
  return (
    <article className="message-card">
      <h3>{message}</h3>
    </article>

  )
}

export default Postcard