import React, {useState} from "react"

export const ThoughtBox = ({thought, getMessages}) => {

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
                    <p>{thought.createdAt}</p>
                </div>
            </div>
    )
}