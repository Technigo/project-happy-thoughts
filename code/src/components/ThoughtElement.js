import React from 'react'
import moment from 'moment'

const ThoughtElement = ({thought, onLikesIncrease}) => {
    return(
        <>
            <h4>{thought.message}</h4>
                <button onClick={() => onLikesIncrease(thought._id)}>
                    {thought.hearts}
                    ❤️
                </button>
            <p className="time">{moment(thought.createdAt).fromNow()}</p>
        </>
    )
}

export default ThoughtElement