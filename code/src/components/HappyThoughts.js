import React from 'react';
import './happyThoughts.css'
import moment from 'moment'
import { Heart } from './Heart'

export const HappyThoughts = (props) => {
  const { message, hearts, createdAt } = props.thought

  return (
    <div className="cardContainer">
      <div>
        <p>{message}</p>
      </div>
      <div className="heartTime">
        <Heart hearts={hearts}
          id={props.thought._id}
          likedThought={props.likedThought} />
        <div className="postedTime">
          <span> {moment(createdAt).fromNow()} </span>
        </div>
      </div>
    </div>
  )
}