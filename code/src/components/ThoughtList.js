import React from 'react'
import moment from 'moment'


export const ThoughtList = ({messageList, onLike}) => {

    const likeThought = (messageID) => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        })
        .then(onLike)
    }  
    
    return (
        <section className="thought-list">
        {messageList.map(message => {
            return(
                
            <div className="thought-container" key={message._id}>
                <p className="thought-text">{message.message}</p>
                <div className="details">
                    <div className="like-container">
                        <button className={message.hearts === 0 ? "like-button noLikes": "like-button"} onClick={()=>likeThought(message._id)}>
                            <span role="img" aria-label="heart-icon">❤️️</span>
                        </button>
                        <p className="thought-date"> x {message.hearts}</p>
                    </div>
                    <time className="thought-date">{moment(message.createdAt).fromNow()}</time>
                </div>
            </div>
            )
        })}
        </section>
    )
}