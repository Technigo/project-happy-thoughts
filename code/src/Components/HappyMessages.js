import React from 'react'
import moment from 'moment';

export const HappyMessages = ({ twentyThoughts, handleHearts }) => { 

    return (
        <div className="message-card"> 
            <p>{twentyThoughts.message}</p>
            <p className="post-time">{moment(twentyThoughts.createdAt).fromNow()}</p>
            <button onClick={() => handleHearts(twentyThoughts._id)}>
            <span role="img" aria-label="heart">🧡</span>
            </button> 
            <span> x {twentyThoughts.hearts}</span>
        </div>
            )
        }

export default HappyMessages