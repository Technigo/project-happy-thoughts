/* eslint-disable */

import React, { useState } from "react";

export const LikeButton = ({ event, setNewlike }) => {
    const [liked, setLiked] = useState(false)

    //create a function to handle like-count
    const handleNewlikeChange = () => {
        setNewlike(true)
    }

    // create a function to collect users'like to database
    const onButtonClick = (e) => {
        e.preventDefault
        if (liked === false) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: ''
            }

            fetch(`https://project-happy-thoughts-api-auhzlcxnrq-lz.a.run.app/messages/${event.id}/like`, options)
                .then((data) => data.json())
                .catch((error) => console.error(error))
                .finally(() => {
                    setLiked(true)
                    handleNewlikeChange()
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
                value={event}
                onClick={onButtonClick}>
                <span>❤️</span>
            </button>
            <p className="number-likes"> x {event.like}</p>
        </div>
    )
}