import React, { useState, useEffect } from 'react'
import Moment from 'moment'
import './happyThought.css'
import moment from 'moment'

export const HappyThought = (props) => {
    console.log('props', props)
    const { message, hearts, createdAt } = props.thought
    return (
        <article>
            <h1>{message}</h1>
            <span>{hearts} count</span>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )

}
