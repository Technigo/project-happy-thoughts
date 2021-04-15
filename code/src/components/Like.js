import React, { useState } from "react"

import { LIKES_URL } from "../utils/urls"

const Like = ({ thought, hearts, setHearts, likeCounter, setLikeCounter }) => {
    const [isLiked, setIsLiked] = useState(false)

    const onHeartChange = () => {

        setIsLiked(true)
        setLikeCounter(likeCounter + 1)

        const config = {
            method: "POST"
        }
        fetch(LIKES_URL(thought._id), config)
            .then(res => res.json())
            .then(receivedMessage => (setHearts(receivedMessage.hearts)))
            .catch(err => console.error(err))
    }

    return (
        <div className="hearts-container">
            <button
                disabled={isLiked}
                className="hearts"
                onClick={onHeartChange}
            >
                <span role="img" aria-label="heart icon">💗</span>
            </button>
            <span>x {hearts}</span>
        </div>
    )
}

export default Like