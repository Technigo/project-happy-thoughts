import React from 'react';
import moment from 'moment';

import './ThoughtsMessage.css';

export const ThoughtsMessage = ({messageDetails, onHeartsChange}) => {

    const handleClick = () => {
        onHeartsChange(messageDetails._id);
    };

   return (
    <article className="message-container">
        <h3 className="message-text">{messageDetails.message}</h3>
        <span className="form-message-footer">
            <p>
                <button id="hearts-button"
                onClick={handleClick}
                className={messageDetails.hearts > 5 ? "super-liked" :  messageDetails.hearts > 0 ? "liked" : "not-Liked"} >
                    <span role="img" aria-label="Heart">
                        {"❤️ "}                
                    </span>
                </button>
                x {messageDetails.hearts}
            </p>
            <p className="message-time">
                {moment(messageDetails.createdAt).fromNow()}
            </p>
        </span>
    </article>
   );
};
