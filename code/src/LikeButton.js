import React, { useState } from "react"
import "./likebutton.css"
export const LikeButton = (props) => {
    const { hearts, id } = props
    const [heartCounter, setHeartCounter] = useState(hearts)
    const [youLiked, setYouLiked] = useState(+localStorage.getItem(`${id}`) || 0)
    const like = () => {
        fetch(`https://williamjensen-happythoughts.herokuapp.com/${id}/like`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(newData => {
                setHeartCounter(newData.hearts)
                let likes = (+localStorage.getItem(`${id}`) > 0) ? +localStorage.getItem(`${id}`) : 0
                localStorage.setItem(`${id}`, parseInt(++likes))
                setYouLiked(localStorage.getItem(`${id}`))
            })
    }
    return (
        <article>
            <button style={{ backgroundColor: heartCounter ? '#ffadad' : '#f2f0f0' }}
                className="like-button"
                onClick={like}><span role="img" aria-label="heart">❤️</span></button> x {heartCounter}
            <p>You've liked this post {youLiked} times.</p>
        </article >
    )
}
