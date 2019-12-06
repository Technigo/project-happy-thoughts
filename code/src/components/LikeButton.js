import React from 'react'

export const LikeButton = (props) => {
    const handleClick = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${props.id}/like`, {
            method: "POST",
            body: "",
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            props.onThoughtLiked(props.id)
        })
    }

    return (
        <button onClick={handleClick}>Heart</button>
    )
}