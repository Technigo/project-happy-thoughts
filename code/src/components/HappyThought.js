import React from 'react'
import moment from 'moment'
import './happyThought.css'

export const HappyThought = (props) => {
    console.log('props', props)
    const { message, hearts, createdAt } = props.happyThought
    return (
        <article className="thought">
            <h1>{message}</h1>
            <div className="thought-bottom">
                <span><button className="heart" type="submit"></button> x {hearts}</span>
                <p>{moment(createdAt).fromNow()}</p>
            </div>
        </article>
    )
}