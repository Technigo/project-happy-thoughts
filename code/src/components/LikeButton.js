/* eslint-disable */

import React, { useState } from "react";

export const LikeButton = ({ thought, setNewLike }) => {
    const [liked, setLiked] = useState(false)
    //create a function to handle like-count
    const handleNewLikeChange = () => {
        setNewLike(true)
    }

    // create a function to collect users'like to database
    const onButtonClick = (event) => {
        event.preventDefault
        if (liked === false) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: ''
            }

            fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like`, options)
                .then((data) => data.json())
                .catch((error) => {
                    console.error(error)
                })
                .finally(() => {
                    setLiked(true)
                    handleNewLikeChange()
                })
        }
    }



    return (
        <div className="likeBtnBox">
            <button
                type="button"
                className="likeBtn"
                style={{
                    backgroundColor: liked ? '#FFADAD' : '',
                    color: liked ? 'black' : ''
                  }}
                value={thought}
                onClick={onButtonClick}>
                <span>❤️</span>
            </button>
            <p className="number-likes">x {thought.hearts}</p>
        </div>
    )
}