import React from 'react'
import Emoji from '../utils/Emoji'
import moment from 'moment' 


const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <main>
            <div className="thought-container">
                <p className="thought-text">{thought.message}</p>
              <div className="likes-container">
                    <div className="likes-wrapper">
                    <button className="likebtn" onClick={() => onLikesIncrease(thought._id)}>
                    {' '}
                    <Emoji symbol="❤️" label="heart"/> 
                    </button>
                    {' '}
                    <p className="likes">x {thought.hearts}</p>
                    </div>             
                    <p className="date">
                        {moment(thought.createdAt).fromNow()}
                    </p>
                </div>
            </div>
        </main>
    )
}

export default ThoughtItem