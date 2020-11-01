import React from 'react';

import { ThoughtContainer } from 'ThoughtContainer';

export const ThoughtList = ( {thoughtList, onThoughtLiked} ) => {
    return (
        <section className="thought-list">
            {thoughtList.map(thought => {
                return (
                    <ThoughtContainer 
                        key={thought._id}
                        message={thought.message}
                        created={thought.createdAt}
                        hearts={thought.hearts}
                        id={thought._id}
                        onThoughtLiked={onThoughtLiked}
                    />
                )
            })}
        </section>
    )
}