import React from 'react'
import moment from 'moment'
import './happyThought.css'

export const HappyThought = (props) => {
    const { message, hearts, createdAt } = props.thought
    console.log('props', props)
    return (
        <article>
            <h2>{message}</h2>
            <span>{hearts}</span>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}