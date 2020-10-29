import React, {useState} from "react"

import {LikeNumber} from "./LikeNumber"

export const ThoughtList = ({thoughts, onIsLikedChange, isLiked}) => {


    return (
        <div className="thoughts-container">
            {thoughts.map((thought) => 
                <div className="message-box">
                    <p>{thought.message}</p>
                    <div className="message-infos-wrapper">
                        <div>
                            <button onClick={onIsLikedChange(thought._id)}>❤</button>
                            <LikeNumber 
                                thought={thought}
                                isLiked={isLiked}
                            />
                        </div>
                        <p>{thought.createdAt}</p>
                    </div>
                </div>
                )}
        </div>
    )
}