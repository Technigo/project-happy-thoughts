import React from 'react';

import "styles/header.css";


export const Header = () => {

    return (
        <h1 className='header'>
                Share your happy thoughts
            <div>
                <span className='pulse-heart' role='img' aria-label='heart'> ❤️ </span>
            </div>
        </h1>
    );
};