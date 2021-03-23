import React from "react"

const Like = ({ thought, hearts, setHearts }) => {

    const onHeartChange = () => {
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
                className="hearts"
                onClick={onHeartChange}
            >❤
            </button>
            <span>x {hearts}</span>
        </div>
    )
}

export default Like