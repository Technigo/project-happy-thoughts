import React from "react"
import moment from "moment"
import "./happyThought.css"


export const HappyThought = props => {
  const { message, hearts, createdAt, _id, onLiked } = props.thought

  const handleClick = () => {
    console.log("clicking", _id)
    fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
      method: "POST",
      body: "",
      headers: { "Content-Type": "application/json" }
    }).then(() => props.onLiked(_id))

  }

  return (
    <article className="happy-thoughts">
      <p>
        <h1>{message}</h1>
        <button id="heart-button" onClick={handleClick}><span role="img" img="heart">💌</span></button> x {hearts}</p>
      <p>{moment(createdAt).fromNow()}</p>
    </article >
  )
}