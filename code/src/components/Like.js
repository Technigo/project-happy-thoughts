import React from "react"

const Like = ({ thought }) => {

    const onHeartChange = () => {
        const API_URL_ID = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`

        const config = {
            method: "POST"
        }

        fetch(API_URL_ID, config)
    }

    return (
        <div className="like-container">
            <button
                className="heart"
                onClick={onHeartChange}
            >❤</button>
            <span>x {thought.hearts}</span>
        </div>
    )
}

export default Like