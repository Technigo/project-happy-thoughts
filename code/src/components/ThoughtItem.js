import React from "react";


const ThoughtItem = ( { thought, onLikesIncrease } ) => {

return (
    <div className="comment-container">
        <p className="thought-text">{thought.message}</p>

<div className="like-box">
    <div className="heart">
        <button className="like-button" onClick={( ) => onLikesIncrease (thought._id)}>
        {" "}
    <span className="heart"></span>
{thought.hearts}
        </button> 

    </div>


</div>


    </div>

);
};

export default ThoughtItem;