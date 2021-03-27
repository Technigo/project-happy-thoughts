import React from 'react';

import ThoughtElement from './ThoughtElement'

const ThoughtList = ({ thoughtsList, handleLikesIncrease }) => {
    return (
        <>
            {thoughtsList.map(thought => (
                <ThoughtElement
                    key={thought._id}
                    thought={thought}
                    onLikesIncrease={handleLikesIncrease}
                />
            ))}
        </>
    );
}

export default ThoughtList;