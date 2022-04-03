import React from 'react';
import Thought from './Thought';

const ThoughtList = ({thoughts, handleLikes}) => {

    return (
        <div className="thoughts-container">
            {thoughts.map((thought) => (
                <Thought key={thought._id} thought={thought} addLike={handleLikes}></Thought>
            )
            )};
        </div>

    );
}
export default ThoughtList;