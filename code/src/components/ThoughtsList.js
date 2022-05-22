import React from "react"
import { formatRelative } from 'date-fns'

const ThoughtsList = ({ thoughts, likeMessage }) => {
    
    return (
        <>
            {thoughts.map((thought) => (
                    <div key={thought._id} className="thought-container">
                        <div className="message">{thought.message}</div>
                        
                        <div className="like-and-date-wrapper">
                            <div className="like">
                                <button
                                className={thought.hearts > 0 ? "heart-button-like" : "heart-button-no-like"}
                                onClick={() => likeMessage(thought._id)}
                                >
                                    <span className="heart"
                                    role="img"
                                    aria-label="heart emoji">
                                    💖
                                    </span>
                                </button>
                                <p className="like-amount">
                                    x {thought.hearts}
                                </p>
                            </div>
        
                            <div className="date">
                                <p>{formatRelative(new Date(thought.createdAt), Date.now(), {addSuffix: true,})}</p> 
                            </div>
                        </div>
                    </div>
                )

            )}
        </>
        
    )
}

export default ThoughtsList
