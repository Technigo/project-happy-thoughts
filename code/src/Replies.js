import React from 'react'
import moment from 'moment'

export const Replies = ({allReplies, onLike}) => {

    // post a like to server and then update the DOM
    const likeThought = (messageID) => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${messageID}/like`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
        })
        .then(onLike)
    }  
    
    return (
        <section className="allRepliesContainer">
            {allReplies.map(message => { // returns a div for each thought with the message, number of likes and timestamp
                return(                    
                <div className="replyContainer" key={message._id}>
                    <p className="replyText">{message.message}</p>
                    <div className="details">
                        <div className="likeContainer">
                            <button className={message.hearts === 0 ? 'button-liked' : 'button-unliked'}
                            onClick={()=>likeThought(message._id)}>
                                <span className="likeHeartIcon" role="img" aria-label="heart icon">❤️️</span>
                            </button>
                            <p className="likeDetail"> x {message.hearts}</p>
                        </div>
                        <time className="timeStamp">{ // display what time thoughts has been sent
                        moment(message.createdAt).fromNow()}</time> 
                    </div>
                </div>
                )
            })}
        </section>
    )
}
