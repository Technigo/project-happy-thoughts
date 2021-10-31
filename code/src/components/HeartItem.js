import React from "react";
import moment from "moment";

const HeartItem = ({ thoughts, onLikesIncrease }) => {
    return (
    <div > 
        {thoughts.map((thought) => (
        <div key={thought._id}className="thought-wrapper">
            <p className="thought-input">{thought.message}</p>
            <button
                className="like-button" 
                onClick={() => onLikesIncrease(thought._id)}> 
                <span role="img" aria-label="heart">&#10084;&#65039;</span>
            </button> 
            <div className="amount-likes"> X {thought.hearts}</div>
            <p className="date">Thought written: {moment(thought.createdAt).fromNow()}</p>
        </div>
        ))}; 
    </div>
    )
}

export default HeartItem;