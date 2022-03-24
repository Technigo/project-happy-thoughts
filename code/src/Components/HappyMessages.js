import React from 'react'
// import { formatRelative } from 'date-fns';
import moment from 'moment';

export const HappyMessages = ({ twentyThoughts }) => {

    return (
        <div className="message-card"> 
            <p>{twentyThoughts.message}</p>
            <p className="post-time">{moment(twentyThoughts.createdAt).fromNow()}</p>
        </div>
            )

        }

export default HappyMessages