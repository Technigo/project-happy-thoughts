import React from "react"
import moment from "moment"
import "HappyThought.css"

export const HappyThought = (props) => {
    const { message, hearts, createdAt} = props.thought
    return (
        <article>
            <p>{message}</p>
            <span>{hearts} ❤️</span>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}