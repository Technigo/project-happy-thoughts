import React from 'react'
import moment from 'moment'

const HappyThought = ({ thought, onIncreaseLikes }) => {
    return (
         <div className="happy-thought-container">
                <p className="thought-message">{thought.message}</p>
                    <div className="heart-likes-time-container">
                        <div className="heart-likes-container">
                        <button className = {thought.hearts > 0 ? "heart-button-liked" : "heart-button"}
                            onClick={() => {
                                onIncreaseLikes(thought._id)
                                }
                            }>
                            <span role="img" aria-label="heart">{"❤️"}</span>
                        </button>
                         
                        <p>x {thought.hearts}</p>
                        </div>
                        <p className="date">- {moment(thought.createdAt).fromNow()}</p>
                    </div>
         </div>
    )
}

export default HappyThought;


