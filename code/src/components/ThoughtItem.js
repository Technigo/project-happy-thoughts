import React from "react";
import moment from "moment";


const ThoughtItem = ({thought, onLikesIncrease}) =>  {

return (
    <div className="thought_wrapper">
             <p className="thought_message">{thought.message}</p>
            <button className="like-button" onClick={() => onLikesIncrease (thought._id)}> 
            {' '}
            &hearts; {thought.hearts}
            </button>
            <div className="date">{moment(thought.createdAt).fromNow()}</div>
     </div>
); 
}; 

export default ThoughtItem; 