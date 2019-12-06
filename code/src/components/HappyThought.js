import React from "react"
import moment from "moment"
import "./happyThought.css"
// import { LikeButton } from './LikeButton'

export const HappyThought = props => {

    const { message, hearts, createdAt } = props.thought
    return (
        <article className='happy-thought'>
            <h3>{message}</h3>
            <p>
                <button role='img' aria-label='Heart'>                    {"❤️ "}
                </button>
                {hearts}

            </p>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}




