import React from "react"
import Moment from "react-moment"
import { ReactComponent as Heart } from "./heart3.svg"
import "./thought.css"

export const Thought = props => {
  return (
    <div className='thought'>
      <p>{props.thoughtInsideComponent.message}</p>
      <div className='bar'>
        <div className='likes'>
          <button onClick={props.postLikeToAPI} className='likeButton'>
            <Heart className='heart' />{" "}
          </button>
          x{props.thoughtInsideComponent.hearts}
        </div>

        <Moment fromNow>{props.thoughtInsideComponent.createdAt}</Moment>
      </div>
    </div>
  )
}
