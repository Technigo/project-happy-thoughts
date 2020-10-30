import React from 'react';
import moment from 'moment';

import "styles/thought.css";

export const Thought = ({ happyThoughts }) => {

    
    return (
        <section>
            {happyThoughts.map(happythought => (
                <article className='happy-thought' key={happythought._id}> 
                    {happythought.message}
                    <span className='happy-thought__time'>
                    {moment(happythought.createdAt).fromNow()}
                    </span>
                </article>
                ))
            }
        </section>
    );
};