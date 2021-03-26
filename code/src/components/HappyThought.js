import React from 'react'
import moment from 'moment'

const HappyThought = ({ thought }) => {

    const handleLike = () => {

    }
    return (
         <div className="happy-thought-container">
            <p>{thought.message}</p>
                <div className="heart-and-likes-container">
                    <button className="heart-button"
                        onClick={() =>handleLike(thought.id)}>
                        <span role="img" aria-label="heart">{"❤️"}</span>
                    </button>
                    <p>x {thought.hearts}</p>
                    <p className="date">- {moment(thought.created).fromNow()}</p>
                </div>
         </div>
    )
}

export default HappyThought;