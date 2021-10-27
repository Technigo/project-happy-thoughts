import React from 'react'
import moment from 'moment'

const MessageList = ({ thoughts, onLikesIncrease }) => {
    return (
        <section className="thoughts-container">
        {thoughts.map((thought) => (
            <div className="thoughts-card" key={thought._id}>
                <p className="thought-message">{thought.message}</p>
                <div className="like-date">
                <button className="like-button" onClick={() => onLikesIncrease(thought._id)}>
                    {' '} 
                    <span aria-label="heart" role="img">❤️</span>
                    </button> x{thought.hearts}
                <p className="date">
                    {moment(thought.createdAt).fromNow()}
                </p>
                </div>
            </div>
         ))}
            
        </section>

    )
}

export default MessageList