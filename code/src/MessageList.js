import React from 'react';
import moment from "moment";
import  "./messageList.css";

export const MessageList = props => {
  const { message, hearts, createdAt, _id } = props.thought

  const handleClick = () => {
    fetch (`https://happiestthoughtsapi.herokuapp.com/thoughts/${_id}/like`, {
      method :"POST",
      body : "",
      headers : {"content-type": "application/json"}
    })
    .then(() => props.onLiked(_id))
  };

  return(
    <article className="messageCard">
      <h3>{message}</h3>
      <p>
        <button 
        className={ hearts > 0 ? 'liked' :'notLiked'} 
        onClick ={handleClick}>
          <span role="img" aria-label="heart">💖</span>
        </button>
        x {hearts}
      </p>
      <p className="time">{moment(createdAt).fromNow()}</p> 
    </article>
  )
};
  