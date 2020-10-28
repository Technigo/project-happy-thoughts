import React from 'react'
import moment from 'moment'

import './ThoughtsMessage.css'

export const ThoughtsMessage = props => {
    const { message, hearts, createdAt, _id } = props.messageDetails;

    const handleClick = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${_id}/like`, {
            method: "POST", 
            body: "",
            headers: { "Content-Type": "application/json" }
        }).then (() => {
            props.onLiked(_id);
        });
    };

   return (
    <article className="message-container">
        <h3 className="message-text">{message}</h3>
        <span className="message-wrapper">
            <p>
                <button id="hearts-button"
                onClick={handleClick}
                className={hearts > 0 ? "liked" : "not-Liked"} >
                    <span role="img" aria-label="Heart">
                        {"❤️ "}                
                    </span>
                </button>
                x {hearts}
            </p>
            <p className="message-time">
                {moment(createdAt).fromNow()}
            </p>
        </span>
    </article>
   );
};
