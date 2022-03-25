import React from 'react'
import moment from 'moment';

// 
export const HappyMessages = ({ loading, twentyThoughts }) => { 

           if (loading) {
            return <h1>Loading happy thoughts ...</h1>
    }

    return (
        <div className="message-card"> 
            <p>{twentyThoughts.message}</p>
            <p className="post-time">{moment(twentyThoughts.createdAt).fromNow()}</p>
        </div>
            )
        }

export default HappyMessages