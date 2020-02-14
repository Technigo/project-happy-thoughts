import React from 'react'
import moment from 'moment'
import { Heart } from './Heart'
import './happyThought.css'

export const HappyThought = (props) => {
    const { message, hearts, createdAt, _id } = props.thought
    console.log('props', props)

    const handleClick = () => {
        fetch(`https://ivett-happy-thoughts.herokuapp.com/thoughts/${_id}/like`, {
            method: "POST",
            body: "",
            headers: { "Content-Type": "application/json" }
        }).then(() => props.clickLiked(_id))
    }
    return (
        <article>
            <h2>{message}</h2>
            <div className="heartsAndDate">
                <div clasName="btnxnr">
                    <button className="likesButton"
                        onClick={handleClick}
                    >
                        <span>❤️</span>
                    </button>
                    x {hearts}
                </div>
                <p>{moment(createdAt).fromNow()}</p>
            </div>
        </article>
    )
}