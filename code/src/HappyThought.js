import React from "react"
import moment from "moment"
import "HappyThought.css"

export const HappyThought = (props) => {
    const { message, hearts, createdAt, _id: id} = props.thought
    const handleHeart = _id => {
        fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
            method: "POST",
            body: "",
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            props.onHeartThought(id)
        })
    }

    return (
        <article>
            <p>{message}</p>
            <div className="hearts">
                <button onClick={handleHeart}>❤️</button>
                <span> x {hearts}</span>
            </div>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}