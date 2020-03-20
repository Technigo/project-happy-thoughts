import React, { useState } from "react"
import "./likebutton.css"
export const LikeButton = (props) => {
    const { messages, setMessages, hearts, id } = props
    const [isLiked, setIsLiked] = useState(hearts)
    const like = () => {
        fetch(`https://technigo-thoughts.herokuapp.com/${id}/like`, {
            method: "POST"
        })
            .then(res => res.json())
            .then(newData => {
                const foundIndex = messages.findIndex(x => x._id === newData._id)
                messages[foundIndex] = newData
                setMessages(messages)
            })
    }
    return (
        <article>
            <button style={{ backgroundColor: isLiked ? '#ffadad' : '#f2f0f0' }}
                className="like-button"
                onClick={like}>❤️</button> x {hearts}
        </article >
    )
}
