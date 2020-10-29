import React from 'react';

const Thought = ({ text,time,heart,}) => {
    return (
        <section className="thought-wrapper">
            <p>{text}</p>
            <p><div className="likes-container"><div className="heart-wrapper"><span className="heart" role="img" aria-label="heart">❤️ x{heart}</span></div></div></p>
            <p>{time}</p>
        </section>
        )
    }

export default Thought;