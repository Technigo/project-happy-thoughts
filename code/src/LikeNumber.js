import React from "react"

export const LikeNumber = ({thought, isLiked}) => {

    return (isLiked ? <p>{thought.hearts} + 1</p> : <p>{thought.hearts}</p>)
}