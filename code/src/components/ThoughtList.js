import React from 'react';
import Moment from 'moment';

import Thought from './Thought';

export const ThoughtList = ({ thoughtList, onHeartsChange }) => {

    return (
        <section className="thought-list">
            {thoughtList.map(thought => {
                return (
                    <Thought 
                        key={thought._id}
                        id={thought._id}
                        text={thought.message}
                        time={Moment(thought.createdAt).fromNow()}
                        likes={thought.hearts} 
                        onHeartsChange={onHeartsChange}
                    />
                )
            })}
        </section>
    )
};
