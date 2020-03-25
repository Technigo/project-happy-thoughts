import React from 'react'
import { LikeButton } from './LikeButton'

export const Message = (props) => (
  <article>
    <p>{props.message.message}</p>
    <p>{props.message.hearts}</p>
    <LikeButton id={props.message._id} onMessageLiked={props.onMessageLiked} />
  </article>
)