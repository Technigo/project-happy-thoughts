import React from 'react'
import moment from 'moment' //a function, npm install moment

const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <div className="thought-container">
            <p>{thought.message}</p>
            <button className="likebtn" onClick={() => onLikesIncrease(thought._id)}>
                {' '}
                &hearts; {thought.hearts} {/* HTML heart entity */}
            </button>

            <p className="date">
                {moment(thought.createdAt).fromNow()}
            </p>
        </div>
    )
}

export default ThoughtItem