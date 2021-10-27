import React from 'react'
import moment from 'moment'

const MessageList = ({ thoughts, onLikesIncrease }) => {
    return (
        <section>
        {thoughts.map((thought) => (
            <div className="thoughts-card" key={thought._id}>
                <p className="thought-message">{thought.message}</p>
                <div className="like-date">
                <button className="like-button" onClick={() => onLikesIncrease(thought._id)}>
                    {' '} 
                    ❤️ {thought.hearts}
                    </button>
                <p className="date">
                    - Created at: {moment(thought.createdAt).fromNow()}
                </p>
                </div>
            </div>
         ))}
            
        </section>

    )
}

export default MessageList