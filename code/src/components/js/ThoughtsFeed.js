import React from "react"
import moment from "moment" 

import { HeartButton } from "./HeartButton.js"
import "../css/thoughtsFeed.css"

export const ThoughtsFeed = ( { _id, thought, onLiked, heart, createdAt, thoughtsFeed } ) => {

  return (
    <section className="feed-section">
      <article className="thought-container">
        <p key={thought._id} className="thought-text">
        {thought.message}
        </p>
        <div className="thought-footer">
          <HeartButton onLiked={onLiked} thought={thought} heart={heart} _id={_id}/>
          <p className="post-time">
            {moment(thought.createdAt).fromNow()}
          </p>
        </div>
      </article>
    </section>
  )
}