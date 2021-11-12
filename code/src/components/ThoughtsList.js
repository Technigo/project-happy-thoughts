import React from "react";
import ThoughtItem from './ThoughtItem'

const ThoughtsList = ({ thoughts, onLikeSubmit }) => {
    return (
        <>
            {thoughts.map(thought => (
                <ThoughtItem key={thought._id} id={thought._id} onLikeSubmit={onLikeSubmit} thought={thought} />

            ))}
        </>
    )
}

export default ThoughtsList