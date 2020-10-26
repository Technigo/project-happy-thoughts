import React from "react"
import moment from "moment"
// import "./happyThoughts.css"

export const HappyThoughts = ({ thought, onLiked }) => {
    const { message, hearts, createdAt, _id } = thought

    const handleClick = () => {
        fetch(`https://happy-thoughts-technigo.herokuapp.com/${_id}like`, {
            method: "POST",
            body: "",
            headers: { "Content-Type": "application/json" }
        }).then(() => onLiked(_id))
    }

    return (
        <article className="happy-thought">
            <h3>{message}</h3>
            <p>
                <button
                    onClick={handleClick}
                    style={{ background: hearts > 0 ? "#ffadd" : "#f3f1f1" }}>
                    <span role="img" aria-label="heart">
                        {"💖 "}
                    </span>
                </button>
                x {hearts}
            </p>
            <p>{moment(createdAt).fromNow()}</p>
        </article>
    )
}
