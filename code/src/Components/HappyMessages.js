import React from 'react'
import moment from 'moment';

export const HappyMessages = ({ twentyThoughts, handleHearts }) => { 

    return (
        <div className="message-card"> 
            <p>{twentyThoughts.message}</p>
                <div className="message-card-bottom-items">
                    <div>
                        <button className={twentyThoughts.hearts > 0 ? "heart-button clicked": "heart-button"}
                        onClick={() => handleHearts(twentyThoughts._id)}>
                        <span role="img" aria-label="heart">❤️</span>
                        </button> 
                        <span> x {twentyThoughts.hearts}</span>
                    </div>
                    <p className="post-time">{moment(twentyThoughts.createdAt).fromNow()}</p>
                </div>
        </div>
            )
        }

export default HappyMessages