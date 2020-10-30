import React from 'react';
import moment from 'moment';

import "styles/thought.css";

export const Thought = ({ happyThoughts }) => {

    /* Göra en fetch för likes här? */

    return (
        <section className='thoughts-section'>
            {happyThoughts.map(happythought => (
                <article className='thoughts-section__article' key={happythought._id}> 
                    {happythought.message}

                    <p className='happy-thought__likes'>
                    <span role='img' aria-label='heart'> ❤️ </span> x {happythought.hearts}
                    <span className='happy-thought__time'>
                    {moment(happythought.createdAt).fromNow()}
                    </span>
                    </p>

                </article>
                ))
            }
        </section>
    );
};