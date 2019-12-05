import React from "react"
import moment from "moment"
import "HappyThought.css"

export const HappyThought = (props) => {
    const { message, hearts, createdAt, _id} = props.thought
    // const handleHeart = _id => {
    //     fetch(`https://technigo-thoughts.herokuapp.com/${_id}/like`, {
    //         method: "POST"
    //     })
    // },

    return (
        <article>
            <p>{message}</p>
            <button >❤️</button>
            <span> x {hearts}</span>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}