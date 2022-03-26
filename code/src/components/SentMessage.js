import React from 'react'
import { formatDistance } from 'date-fns'


const SentMessage = ({ onFormSubmit, fetchThought, onLikeChange, likeID }) => {

    return (
        <div className="message-send-container">
            {fetchThought.map(message => (
                <form onSubmit={onFormSubmit} key={message._id}>
                    <section className="sent-message-container">
                        <article key={message._id}>
                            <p className="sent-message">{message.message}</p>
                        </article>


                        <div className="like-counter-section">
                            <div className="button-and-likes">
                                <button onClick={() => onLikeChange(likeID)}
                                    className="like-btn"
                                    >
                                    <span role="img" aria-label="heart emoji">💓</span>
                                </button>
                                <p className="hearts-amount">x{message.hearts}</p>
                            </div>
                            <div className="date-container">
                                <p className="date">{formatDistance(new Date(message.createdAt), Date.now(), { addSuffix: true, })}</p>
                            </div>
                        </div>

                    </section>
                </form>
            ))}
        </div>
    )
}

export default SentMessage