import React from "react"
import moment from "moment"

import '.HappyThought.css'

const HappyThought = props => {
  const { message, hearts, createdAt, _id } = props.thought

  const handleClick = () => {
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => props.onLiked(_id))
  }

  return (
    <article className="happy-thought">
      <h3>{message}</h3>
      <p>
        <button
          onClick={handleClick}
          //conditional classname depending on liked or not liked
          className={hearts > 5 ? "manylikes" : hearts > 0 ? "likes" : "nolikes"}
          // MOVE TO CSS: style={{ background: hearts > 5 ? "#ffadad" : hearts > 0 ? "#fcc4c4" : "#f3f1f1 " }}
        >
          <span
            role='img'
            aria-label='Heart'
          > 
            { "💚" } 
          </span>
        </button>
        x {hearts}
      </p>
      <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}
export default HappyThought;