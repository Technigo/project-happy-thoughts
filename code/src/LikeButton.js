import React, { useState } from "react"
import "./likebutton.css"
export const LikeButton = (props) => {
    const { hearts, id } = props
    const [isLiked, setIsLiked] = useState(hearts)
    const [pressed, setPressed] = useState(false)
    const [heartCounter, setHeartCounter] = useState()
    const like = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(newData => {
                setHeartCounter(newData.hearts)
                setPressed(true)
            })
    }
    return (
        <article>
            <button style={{ backgroundColor: isLiked ? '#ffadad' : '#f2f0f0' }}
                className="like-button"
                onClick={like}>❤️</button> {pressed && <div className="heart-counter">x {heartCounter}</div>}
            {!pressed && <div className="heart-counter">x {hearts}</div>}
        </article >
    )
}
