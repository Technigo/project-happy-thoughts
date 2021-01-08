import React, { useState } from 'react'

export const YourLikes = ({ id, heart }) => {
    const [like, setLike] = useState(heart)
    let [likedByYou, setLikedByYou] = useState(0)

    const [previouslyLiked, setPreviouslyLiked] = useState(
        JSON.parse(localStorage.getItem(id)) + 0
    );

    localStorage.setItem(id, JSON.stringify(previouslyLiked));

    const likePost = (event) => {
        fetch(`https://katarinas-happy-api.herokuapp.com/${id}/like`, {
            method: "POST",
            body: "",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then(() => { }, [])
        setLike()
        setPreviouslyLiked
    }

    return (
        <span className="you-liked">
            you liked this post: x times
        </span>
    )
}
// Should have deleted this component but I am not going to, because I want to get back to it at some point in time