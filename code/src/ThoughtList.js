import React, { useEffect, useState } from 'react';

import { ThoughtContainer } from 'ThoughtContainer';

export const ThoughtList = ( {thoughtList} ) => {

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
                        // postALike={postALike}
                    />
                )
            })}
        </section>
    )
}

            // data.sort((a,b) => a.created)

            // const filteredThought = data.filter(thought => thought.message);
            // const limitedThought = filteredThought.slice(1, 20);

            // //save the data to state
            // setThought(limitedThought);