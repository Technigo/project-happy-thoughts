import React from "react"
import moment from "moment"
import "happyThought.css"

export const HappyThought = (props) => {
    const { message, hearts, createdAt, _id: id} = props.thought
    const handleHeart = (_id) => {
        fetch(`https://frijon-happy-thoughts.herokuapp.com/${id}/like`, {
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
                <button onClick={handleHeart}>
                    <span role="img" aria-label="heart">❤️</span>
                </button>
                <span> x {hearts}</span>
            </div>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}