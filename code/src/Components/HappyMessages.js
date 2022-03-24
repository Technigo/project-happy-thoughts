import React from 'react'

export const HappyMessages = ({ twentyThoughts }) => {

    return (
        <div className="message-card"> 
            <p>{twentyThoughts.message}</p>
        </div>
            )

        }

export default HappyMessages