import moment from "moment"
import React from "react"

import Like from "./Like"

const Thought = ({ thoughts }) => {
    return (
        <div className="thought-container">
            {thoughts.map(thought => (
                <div key={thought._id} className="thought">
                    <p className="thought-message">{thought.message}</p>
                    <Like thought={thought} />
                    <p className="thought-time">{moment(thought.createdAt).fromNow()}</p>
                </div>
            ))
            }
        </div >)
}

export default Thought