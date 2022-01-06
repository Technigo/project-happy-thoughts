import React from "react";
import ThoughtItem from './ThoughtItem'

const ThoughtsList = ({ thoughts, onLikeSubmit, onDeleteThought, username }) => {
    return (
        <>
            {thoughts.map(thought => (
                <ThoughtItem key={thought._id} id={thought._id} onLikeSubmit={onLikeSubmit} onDeleteThought={onDeleteThought} thought={thought} username={username} />

            ))}
        </>
    )
}

export default ThoughtsList