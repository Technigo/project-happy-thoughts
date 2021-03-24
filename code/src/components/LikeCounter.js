import React from "react"

const LikeCounter = ({ likeCounter }) => {
    return (
        <p className="like-counter">
            {likeCounter}
            <span role="img" aria-label="heart icon">💗</span>
            given
        </p>
    )
}

export default LikeCounter