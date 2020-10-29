import React, {useState} from "react"
import moment from "moment"

export const ThoughtBox = ({thought, getMessages}) => {

    //will send a like for the current message to the API
    const postLike = () => {
        const LIKE_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`;

        fetch(LIKE_URL, {
            method: "POST",
            body: "",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => getMessages())
    }

    return (
            <div className="message-box">
                <p>{thought.message}</p>
                <div className="message-infos-wrapper">
                    <div>
                        <button 
                            onClick={postLike}
                            style={{background: thought.hearts > 0 ? "red" : "grey"}}
                            >❤
                        </button>
                        <p>{thought.hearts}</p>
                    </div>
                    <p>{moment(thought.createdAt).fromNow()}</p>
                </div>
            </div>
    )
}