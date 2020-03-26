import React from 'react'
import { LikeButton } from './LikeButton'

export const Thought = (props) => (
  <article>
    <p>{props.thought.message}</p>
    <p>{props.thought.hearts} hearts</p>

    <LikeButton id={props.thought._id} onThoughtLiked={props.onThoughtLiked} />
  </article>
)
// NOT IN USE AT THE MOMENT