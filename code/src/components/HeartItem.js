import React from "react";
import moment from "moment";


const HeartItem = ({ thoughts, onLikesIncrease }) => {
    return (<div className="heart-wrapper"> 
        {thoughts.map((thought) => (
        <div key={thought._id}>
            <p>{thought.message}</p>
            <button onClick={() => onLikesIncrease(thought._id)}> 
            {''}
            &hearts; {thought.hearts}
            </button>
            <p className="date">
                Created at: {moment(thought.createdAt).fromNow()}
            </p>
        </div>
        ))}; 
    </div>
    )
}

export default HeartItem;