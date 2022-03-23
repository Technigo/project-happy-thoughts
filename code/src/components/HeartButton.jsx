import React from "react";

const HeartButton = ({likes, sendLike, messageID}) => {

    return (
        <>
        <button className="heart-container" onClick={() => sendLike(messageID)} >
            <p><span role="img" aria-label="heart button">💖</span></p>
        </button>
        <p className="likes-text">×{likes}</p>
    </>
    )
}

export default HeartButton
