import moment from 'moment';
import React from 'react';
import "./HappyThoughts.css";


export const HappyThoughts = (props) => {
  const { message, heart, createdAt, _id } = props.thought


  const handleClick = () => {
    fetch(`https://jennifershappythoughts.herokuapp.com/${_id}/like`, {
      method: 'POST',
      body: "",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => props.onLiked(_id))
  }

  return (
    <article>
      <h2>{message}</h2>
      <div className="messageLive">
        <div className="countContainer">
          <button className={`like-button ${props.hearts > 0 ? "has-likes" : ""}`} onClick={handleClick}>&#10084;&#65039;</button>
          <p className="count">x {heart}</p>
        </div>
        <p>{moment(createdAt).fromNow()}</p>
      </div>

    </article>
  )
}