import React from 'react';
import Moment from 'moment';

import Thought from './Thought';

export const ThoughtList = ({ thoughtList}) => {

    return (
        <section className="thought-list">
            {thoughtList.map(thought => {
                return (
                    <Thought 
                        key={thought._id}
                        text={thought.message}
                        time={Moment(thought.createdAt).fromNow()}
                        heart={thought.hearts}
                    />
                )
            })}
        </section>
    )
};
