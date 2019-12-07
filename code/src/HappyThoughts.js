import React from 'react'
import moment from 'moment'
import { isPatternLike } from '@babel/types'
import { Like } from './Like'

export const HappyThoughts = (props) => {
  const { message, hearts, createdAt } = props.thought
  return (
    <article>
      <h2>{message}</h2>
      <div className="messageLive">
        <div className="countContainer">
          <button className="likeButton" onClick="">&#10084;&#65039;</button>
          <p className="count">x {hearts}</p>
        </div>
        <p>{moment(createdAt).fromNow()}</p>
      </div>

    </article>
  )
}