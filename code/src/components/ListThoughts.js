import React from 'react'
import moment from 'moment'
import { Heart } from './Heart'
import './listthoughts.css'

// LISTING THE THOUGHTS FROM API (PROPS LET ME WORK WITH THE DATA WE'RE FETCHING IN THOUGHTS.JS)
// Import <Details /> below message instead?

export const ListThoughts = (props) => (
  <div className="thoughts-wrapper">
    {props.thoughts.map((thought) => (

      <article className="thought" key={thought._id}>

        <div className="message">{thought.message}</div>

        <div className="details">
          <div className="likes-wrapper">
            <button type="heart-button" className="heart-button"><Heart /></button>
            <div className="likes"> x {thought.hearts}</div>
          </div>
          <div className="time">{moment(thought.createdAt).fromNow()}</div>
        </div>

      </article>
    ))}
  </div>
)