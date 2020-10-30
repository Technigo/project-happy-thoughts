import React from 'react';

import Likes from './Likes';

const Thought = ({ text,time,likes,onHeartsChange,id }) => {

    return (
        <section className="thought-wrapper">
            <p>{text}</p>
            <div className="message-details-container">
                <Likes likes={likes} onHeartsChange={onHeartsChange} id={id}/>
                <p className="created-time">{time}</p>
            </div>
        </section>
        )
    }

export default Thought;