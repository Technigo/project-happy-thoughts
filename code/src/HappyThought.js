import React, { useState, useEffect } from 'react'
import './happyThought.css'
import moment from 'moment'

export const HappyThought = (props) => {
    console.log('props', props)
    const { message, hearts, createdAt, _id: id } = props.thought

    const handleClick = () => {
        fetch(`https://project-happy-thoughts.herokuapp.com/thoughts/${id}/like`, {
            method: "POST",
            body: "",
            headers: { "Content-Type": "application/json" }
        }).then(() => {
            props.onLikedThought(id)
        })
    }

    return (
        <article>
            <h3>{message}</h3>
            <div className="likeContainer">
                <div className="heartContainer">
                    <button className="likeButton" onClick={handleClick}>
                        <span className="heartLike">&hearts;</span>
                    </button>
                    <p>x{hearts}</p>
                </div>
                <p>{moment(createdAt).fromNow()}</p>
            </div>
        </article>
    )

}
