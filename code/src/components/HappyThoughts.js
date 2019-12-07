import React from 'react'
import moment from 'moment'
import './happyThoughts.css'

export const HappyThoughts = (props) => {
    console.log("props", props)
    const { message, hearts, createdAt } = props.thought
    return (
        <article>
            <h3>{message}</h3>
            <span>❤️ x {hearts}</span>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}