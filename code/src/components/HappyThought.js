import React from 'react'
import moment from 'moment'
import './happyThought.css'

export const HappyThought = (props) => {
    console.log('props', props)
    const { message, hearts, createdAt, _id } = props.happyThought

    const likeThought = () => {
        fetch(`https://tavferreira-happy-thoughts-api.herokuapp.com/${_id}/like`, {
            method: "POST",
            body: "",
            headers: { "Content-Type": "application/json" }
        }).then(() => props.onLiked(_id))
    }

    return (
        <article className="thought">
            <h1>{message}</h1>
            <div className="thought-bottom">
                <p>
                    <button className="heart"
                        onClick={likeThought}
                        style={{ background: hearts > 0 ? "#ffadad" : "#f3f1f1  " }}>
                    </button>
                    x {hearts}
                </p>
                <p>{moment(createdAt).fromNow()}</p>
            </div>
        </article>
    )
}