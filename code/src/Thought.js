import React from 'react'
import { Like } from './Like'

export const Thought = (props) => (
  <article>
    <p>{props.thought.message}</p>
    <p>{props.thought.hearts} hearts</p>

    <Like id={props.thought._id} onThoughtLiked={props.onThoughtLiked} />
  </article>
)
