// `POST https://happy-thoughts-technigo.herokuapp.com/thoughts/THOUGHT_ID/like`

// When the user clicks the heart button on a thought, send a POST request (with no body) to this URL. **Replace THOUGHT_ID with the `_id` parameter of the thought the user clicked on**,


import React from 'react'
import { MessageList } from './MessageList'

import './LikeMessage.css'

export const LikeMessage = ({ onMessageLiked, id, hearts }) => { 

  const handleClick = () => {
    fetch(`https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`, 
        {
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
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
