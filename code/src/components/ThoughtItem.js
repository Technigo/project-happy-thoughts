import React from 'react'
import moment from 'moment'

import Emoji from './Emoji'

const ThoughtItem = ( { thought, onLikesIncrease } ) => {
    return(
        <div>
            <p>{thought.message}</p>
                <div className="like-wrapper">
                    <button 
                        className="heart-btn"
                        onClick={() => onLikesIncrease(thought._id)}>
                        <Emoji symbol="❤️" label="Heart" />
                    </button>
                    <span>x {thought.hearts}</span>
                </div>
            <p className="date">Created at: {moment(thought.createdAt).fromNow()}</p>
      </div>
    )
}

export default ThoughtItem