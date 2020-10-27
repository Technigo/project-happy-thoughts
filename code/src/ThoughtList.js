import React from "react"

export const ThoughtList = ({thoughts}) => {
    return (
        <div className="thoughts-container">
            {thoughts.map((thought) => 
                <div className="message-box">
                    <p>{thought.message}</p>
                    <div className="message-infos-wrapper">
                        {/* <Likes /> */}
                        <p>{thought.createdAt}</p>
                    </div>
                </div>
                )}
        </div>
    )
}