import React, { useState } from "react"

const Like = ({ thought, hearts, setHearts, likeCounter, setLikeCounter }) => {
    const [isLiked, setIsLiked] = useState(false)


    const onHeartChange = () => {

        setIsLiked(true)
        setLikeCounter(likeCounter + 1)

        // console.log(localStorage.getItem("totalLikes"))

        const API_URL_ID = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`

        const config = {
            method: "POST"
        }

        fetch(API_URL_ID, config)
            .then(res => res.json())
            .then(receivedLike => (setHearts(receivedLike.hearts)))
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