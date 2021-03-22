import React from "react"

const Like = ({ hearts }) => {
    return (
        <div className="like-container"><button className="heart">❤</button><span>x {hearts}</span></div>
    )
}

export default Like