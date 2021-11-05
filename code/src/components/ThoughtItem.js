import React from 'react'
import moment from 'moment'

import Emoji from './Emoji'

const ThoughtItem = ( { thought, onLikesIncrease } ) => {
    return(
        <div>
            <p>{thought.message}</p>
            <div className="like-wrapper like">
                <div className="like">
                    <button 
                        className={thought.hearts > 0 ? "heart-btn liked" : "heart-btn" }
                        onClick={() => onLikesIncrease(thought._id)}>
                        <Emoji symbol="❤️" label="Heart" />
                    </button>
                    <span>x {thought.hearts}</span>
                </div>
                <span className="date">{moment(thought.createdAt).fromNow()}</span>
            </div>
      </div>
    )
}

export default ThoughtItem