import React from 'react'
import moment from 'moment'

const MessageList = ({ thoughts }) => {
    return (
        <section className="message-section">
        {thoughts.map((thought) => (
            <div className="thoughts-card" key={thought._id}>
                <p className="thought-message">{thought.message}</p>
                <div className="like-date">
                <button className="like-button"> &hearts; {thought.hearts}</button>
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