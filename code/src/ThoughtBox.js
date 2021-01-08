import React from "react";
import moment from "moment";

export const ThoughtBox = ({thought, getMessages}) => {

    //will send a like for the current message to the API
    const postLike = () => {
        const LIKE_URL = `https://happyhenrike.herokuapp.com/thoughts/${thought._id}/like`;

        fetch(LIKE_URL, {
            method: "PUT",
            body: "",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(() => getMessages());
    };

    return (
            <div className="message-box">
                <div className="message-wrapper">
                    <p>{thought.message}</p>
                </div>
                <div className="message-infos-wrapper">
                    <div className="like-wrapper">
                        <button
                            className="like-button" 
                            onClick={postLike}
                            style={{background: thought.hearts > 0 ? "#FFADAD" : "#EAEAEA"}}
                        >
                            <span role="img" aria-label="heart"> 
                            {"❤️"}
                            </span>
                        </button>
                        <p>x {thought.hearts}</p>
                    </div>
                    <p>{moment(thought.createdAt).fromNow()}</p>
                </div>
            </div>
    );
};