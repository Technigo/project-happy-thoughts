import React from "react";
import moment from "moment";

const ThoughtItem = ({thought, onLikesIncrease}) =>  {

return (
    <div className="thought_wrapper">
             <p className="thought_message">{thought.message}</p>
            <button onClick={() => onLikesIncrease (thought._id)}> 
            {' '}
            &hearts; {thought.hearts}
            </button>
            <p className="date">
            - Createt {moment (thought.createdA ).fromNow()}
            </p>
     </div>
); 
}; 

export default ThoughtItem; 