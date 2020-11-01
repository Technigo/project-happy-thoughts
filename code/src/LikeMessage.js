import React from 'react'

import './LikeMessage.css'

export const LikeMessage = ({ onMessageLiked, id, hearts }) => {

    const handleClick = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: "",

            }).then(() => {
                onMessageLiked(id);
            })
    };

    return (
        <div className="heart">
            <button
                className="heart-button"
                onClick={handleClick}
            >
                <span role="img" aria-label="Red heart"> &#10084;&#65039;</span>
            </button>
        x {hearts}
        </div>
    );

};
