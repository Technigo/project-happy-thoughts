import React from 'react'

import './ThoughtsHeader.css'

export const ThoughtsHeader = () => {

    return (
        <header className="message-container header">
            <span role="img" aria-label="heart emoji" className="heart-letter-emoji">💌 </span>
            <h3>Happy Thoughts</h3>
        </header>
    );    
};