import React from "react"

export const HappyThought = (props) => {
    const { message, hearts, createdAt } = props.thought

    return (
        <article>
            <h3>{thought.message}</h3>
            <span>❤️ x {thought.hearts}</span>
            <p>{thought.createdAt}</p>
        </article>
    )
}
