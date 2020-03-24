import React from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'

export const Thought = (props) => (
  <article>
    <p>{props.thought.message}</p>
    <div className="thought-details">
      <div className="like-details">
        <LikeButton id={props.thought._id} onThoughtLiked={props.onThoughtLiked} />

        <p>x {props.thought.hearts}</p>
      </div>
      <p>{moment(props.thought.createdAt).fromNow()}</p>
    </div>
  </article>
)