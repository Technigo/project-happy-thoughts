import React from "react";
import ThoughtItem from './ThoughtItem'

const ThoughtsList = ({ thoughts, onLikeSubmit, onDeleteThought }) => {
    return (
        <>
            {thoughts.map(thought => (
                <ThoughtItem key={thought._id} id={thought._id} onLikeSubmit={onLikeSubmit} onDeleteThought={onDeleteThought} thought={thought} />

            ))}
        </>
    )
}

export default ThoughtsList