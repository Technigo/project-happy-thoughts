
import React from "react";
import moment from "moment";

export const ThoughtItem = ({thought, onLikeIncrease}) => {
return (
    <div className="thoughts-card">
        <p className="thoughts-message"> {thought.message} </p>

        <div className="likesWrapper">

          <button onClick={() => onLikeIncrease(thought._id)} className="heart-button" >
          {''}
          &hearts; </button>
        <p className="numberOfLikes"> x {thought.hearts} </p>
        <p className="date"> {moment(thought.createdAt).fromNow()}</p>
        </div>

    </div>  

)

}