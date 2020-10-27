import React, { useState } from 'react'
import moment from 'moment'

import './ThoughtsMessage.css'

export const ThoughtsMessage = ({messageDetails}) => {

   return (
    <article className="message-container">
        <h3>{messageDetails.message}</h3>
        <p>
            <button className="hearts-button"
            onClick={handleClick}
            style={{background: messageDetails.hearts > 0 ? "#fff" : "#000" }} >
                <span role="img" aria-label="Heart">
                    {"❤"}                
                </span>
            </button>
            x {messageDetails.hearts}
        </p>
        <p className="message-time">
            {moment(messageDetails.createdAt).fromNow()}
        </p>
    </article>
   );
};
