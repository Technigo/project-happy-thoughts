import React from 'react';

import Likes from './Likes';

const Thought = ({ text,time,likes,onHeartsChange}) => {
    return (
        <section className="thought-wrapper">
            <p>{text}</p>
            <Likes likes={likes} onHeartsChange={onHeartsChange} />
            <p className="created-time">{time}</p>
        </section>
        )
    }

export default Thought;