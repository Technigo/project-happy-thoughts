import React from 'react'
import moment from 'moment'

const MessageList = ({ thoughts, onLikesIncrease }) => {
    return (
        <section className="thoughts-container">
            {thoughts.map((thought) => (
            <section className="messages" key={thought._id}>
                
            <div className="thoughts-card" key={thought._id}>
                <p className="thought-message">{thought.message}</p>
                <div className="like">
                <button className={thought.hearts > 0 ? "like-button like-button-clicked" : "like-button" } onClick={() => onLikesIncrease(thought._id)}>
                    {' '} 
                    <span aria-label="heart" role="img">❤️</span>
                    </button> x {thought.hearts}
                    </div>
                    <div className="date">
                    <p>
                    {moment(thought.createdAt).fromNow()}
                    </p>
                </div>
            </div>
         
            </section>
            ))}
        </section>

    )
}

export default MessageList