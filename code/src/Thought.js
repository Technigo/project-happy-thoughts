import React from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'

export const Thought = (props) => (
  <article>
    <p>{props.thought.message}</p>
    <p>{props.thought.hearts} hearts</p>
    <p>{moment(props.thought.createdAt).fromNow()}</p>

    <LikeButton id={props.thought._id} onThoughtLiked={props.onThoughtLiked} />
  </article>
)