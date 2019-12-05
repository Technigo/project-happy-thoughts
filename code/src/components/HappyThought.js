import React from "react"
import Moment from "moment"
import "./happyThought.css"

// export const HappyThought = ({ message, hearts, createdAt }) => {
export const HappyThought = props => {

    const { message, hearts, createdAt } = props.thought
    return (
        <article>
            <h3>{message}</h3>
            <span>{hearts}</span>
            {/* <p>time stam</p> */}
            <p>{Moment(createdAt).fromNow()}</p>
            {/* <p>{Moment().start0f().fromNow()}</p> */}
            <p>{createdAt}</p>
        </article>
    )
}
