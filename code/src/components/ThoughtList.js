import React from 'react'
import moment from 'moment'


export const ThoughtList = ({messageList}) => {

    return (
        <section className="thought-list">
        {messageList.map(message => {
            return(
                
            <div className="thought-container" key={message._id}>
                <p className="thought-text">{message.message}</p>
                <div className="details">
                    <div className="like-container">
                    <span className="heart-icon" role="img">❤️️</span>
                    <p className="thought-date"> x {message.hearts}</p>
                    </div>
                    <p className="thought-date">{moment(message.createdAt).fromNow()}</p>
                </div>
            </div>
            )
        })}
        </section>
    )
}