import React from 'react'

export const HeartButton = ({ hearts, likesId, liked }) => {

    const LIKES_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${likesId}/like`

    const handleClick = () => {
        fetch(LIKES_URL, {
            method: 'POST',
            body: '',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(() => liked(likesId))
    }

    return (
        <div className="heart-container">
            <button
                onClick={handleClick}
                className={hearts > 5 ? 'heart-button very-liked' : hearts > 0 ? 'heart-button liked' : 'heart-button unliked'}
            >
                <span role='img' aria-label='Heart'> {"❤ "}
                </span>
            </button>
            <span className="nrOfLikes">x {hearts}</span>
        </div>
    )
}