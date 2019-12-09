import React from 'react';
import moment from 'moment';

const url="https://technigo-thoughts.herokuapp.com/${_id}/like"

export const HappyThoughts = props => {
  const {message,hearts,createdAt,_id} = props.thought
  const handleClick = () => {
    console.log("clicking", _id)
    fetch (url, {
      method: "POST",
      body:"",
      headers: {"Content-Type":"application/json"}
    })
    .then (()=> props.onLiked(_id))
  }
  return (
    <article className="happy-thoughts">
    <h3>{message}</h3>
    <p>
      <button className="happy-heart"
      onClick={handleClick}
      style={{background: hearts > 0 ? "#ffadad" : "#f3f1f1  " }}
      >
      <span role="img" aria-lable="Heart"> 
      {"❤️"}
      </span>
      </button>
      x {hearts}
    </p>
    <p>{moment(createdAt).fromNow()}</p>
    </article>
  )
}