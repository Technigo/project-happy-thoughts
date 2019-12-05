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
            <div className="hearts">
                <button>❤️</button>
                <span> x {hearts}</span>
            </div>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}