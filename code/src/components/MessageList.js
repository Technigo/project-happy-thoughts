import React from 'react'
import moment from 'moment'

const MessageList = ({ thoughts }) => {
    return (
        <section className="messagelist">
        {thoughts.map((thought) => (
            <div key={thought._id}>
                <p>{thought.message}</p>
                <button> &hearts; {thought.hearts}</button>
                <p className="date">
                    - Created at: {moment(thought.createdAt).fromNow()}
                </p>
                </div>
            ))}
            
        </section>

    )
}

export default MessageList