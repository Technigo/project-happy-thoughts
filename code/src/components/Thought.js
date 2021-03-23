import moment from "moment"
import React, { useState } from "react"

import Like from "./Like"

const Thought = ({ thought }) => {
    const [hearts, setHearts] = useState(thought.hearts)

    return (
        <div
            className="thought"
        >
            <p className="thought-message">
                {thought.message}
            </p>
            <div className="hearts-and-time-container">
                <Like
                    hearts={hearts}
                    setHearts={setHearts}
                    thought={thought}
                />
                <p className="thought-time">
                    {moment(thought.createdAt).fromNow()}
                </p>
            </div>
        </div>
    )
}

export default Thought
