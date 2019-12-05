import React from 'react'
import moment from 'moment'
import { LikeButton } from './LikeButton'
import './listthoughts.css'

// LISTING THE THOUGHTS FROM API (PROPS LET ME WORK WITH THE DATA WE'RE FETCHING IN THOUGHTS.JS)

export const ListThoughts = (props) => {

  return (

    <div className="thoughts-wrapper">
      {props.thoughts.map((thought) => (

        <article className="thought" key={thought._id}>

          <div className="message">{thought.message}</div>

          <div className="details">
            <div className="likes-wrapper">
              {/* Passing the id and onThoughtLiked to Likebutton component */}
              <LikeButton id={thought._id} onThoughtLiked={props.onThoughtLiked} hearts={thought.hearts} />
              <div className="likes"> x {thought.hearts}</div>
            </div>
            <div className="time">{moment(thought.createdAt).fromNow()}</div>
          </div>

        </article>
      ))}
    </div>
  )
}