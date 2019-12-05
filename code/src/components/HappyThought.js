import React from "react"
import moment from "moment"
import "./happyThought.css"

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


