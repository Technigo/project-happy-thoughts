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
<<<<<<< HEAD
            <div className="date">{moment(thought.createdAt).fromNow()}</div>
=======
           <div className="date">{moment(thought.createdAt).fromNow()}</div>
>>>>>>> a64538eee69d16fbedfc034139876c504af3d825
     </div>
); 
}; 

export default ThoughtItem; 
