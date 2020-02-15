import React from "react"
import moment from "moment"
import "./happyThought.css"


export const HappyThought = props => {
  const { message, hearts, createdAt, _id } = props.thought

  const handleClick = () => {
    console.log("clicking", _id)
    fetch(`https://project-happy-api.herokuapp.com/${_id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => props.onLiked(_id))

  }

  return (
    <article className="happy-thoughts">
      <div>
        <h1>{message}</h1>
        <button id="heart-button" onClick={handleClick}><span role="img" img="heart">💌</span></button> x {hearts}
      </div>
      <p>{moment(createdAt).fromNow()}</p>
    </article >
  )
}