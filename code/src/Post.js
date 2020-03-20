import React from 'react'
import Hearts from './Hearts'


const Post = ({ message, hearts, _id }) => {
  return (
    <article className="message-card">
      <h3>{message}</h3>
      <section className="card-footer">
        <Hearts hearts={hearts} id={_id} />
      </section>
    </article>
  )
}

export default Post