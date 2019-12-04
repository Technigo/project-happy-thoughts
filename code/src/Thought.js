import React from "react"
import Moment from "react-moment"
import { ReactComponent as Heart } from "./heart.svg"
import "./thought.css"

export const Thought = props => {
  return (
    <div className='container'>
      <p>{props.thoughtInsideComponent.message}</p>
      <div className='bar'>
        <div className='likes'>
          <Heart className='heart' /> x{props.thoughtInsideComponent.hearts}
        </div>

        <Moment fromNow>{props.thoughtInsideComponent.createdAt}</Moment>
      </div>
    </div>
  )
}
