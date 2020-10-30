import React from 'react'
import moment from 'moment'
import { HappyHeart } from './HappyHeart.js'
import './happyThought.css'

export const HappyThought = ({id, thought, onLiked, heart, createdAt}) => {
  return(
    <article className="thought-container">
      <p key={id} className="text-message">
        {thought}
      </p>
      <div className="thought-footer">
        <HappyHeart onLiked={onLiked} thought={thought} heart={heart} messageId={id} />
        <p className="text-time">
          {moment(createdAt).fromNow()} 
        </p>
      </div>
    </article>
  )
}