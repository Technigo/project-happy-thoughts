import React from "react"
import Moment from "react-moment"
import { ReactComponent as Heart } from "./heart3.svg"
import "./thought.css"

export const Thought = props => {
  return (
    <div className='container'>
      <p>{props.thoughtInsideComponent.message}</p>
      <div className='bar'>
        <div className='likes'>
          <button className='likeButton'>
            <Heart className='heart' />{" "}
          </button>
          x{props.thoughtInsideComponent.hearts}
        </div>

        <Moment fromNow>{props.thoughtInsideComponent.createdAt}</Moment>
      </div>
    </div>
  )
}

//button onClick - vill att den ska gå från grå bakgrund till rosa bakgrund
//samt såklart att den ska adderas på antal likes

//varför vill inte mitt hjärta centreras i min button?
