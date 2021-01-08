import React from 'react'
import moment from 'moment'


export const ThoughtList = ({messageList, onLike, fetchTagsThoughts}) => {

    //Function to post a like to server and then update the DOM
    const likeThought = (messageID) => {
        fetch(`https://sharing-happy-thoughts.herokuapp.com/thoughts/${messageID}/like`, {
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
                    {(message.tags.length > 0) && <span>{message.tags.map(tag => {
                    return <span className="tags" key={message._id + tag} onClick={() => fetchTagsThoughts(tag)}>{tag} </span>
                    })}</span>}
                    <p className="thought-text">{message.message}</p>
                    <div className="details">
                        <div className="like-container">
                            <button className={message.hearts === 0 ? "like-button noLikes": "like-button"} onClick={()=>likeThought(message._id)}>
                                <span role="img" aria-label="heart-icon">❤️️</span>
                            </button>
                            <p className="thought-details"> x {message.hearts}</p>
                        </div>
                        <time className="thought-details">{moment(message.createdAt).fromNow()} {message.username && `by ${message.username}`}</time>
                    </div>
                    
                </div>
                )
            })}
        </section>
    )
}