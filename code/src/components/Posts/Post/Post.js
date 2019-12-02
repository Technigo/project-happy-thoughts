import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import Likes from './Likes/Likes'

const Post = ({ message, hearts, createdAt, _id }) => {
  return (
    <article className="card">
      <h3>{message}</h3>
      <section className="card-bottom">
        <Likes hearts={hearts} id={_id} />
        <ReactTimeAgo date={createdAt} />
      </section>
    </article>
  )
}

export default Post