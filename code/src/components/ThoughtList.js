import React from "react"
import "./thoughtList.css"
import moment from "moment"
import { HeartButton } from "./HeartButton"


export const ThoughtList = props => {


    const { _id, message, hearts, createdAt } = props.thought


    return (
        <article className="thought-card">
            <div className="message">
                {message}
            </div>

            <div className="card-bottom">
                <div className="like-btn">
                    {<HeartButton id={_id} />}
                    <span> x {hearts} </span>
                </div>

                <div className="elapsed-time">
                    <span> {moment(createdAt).fromNow()} </span>
                </div>
            </div>
        </article>
    )
}

