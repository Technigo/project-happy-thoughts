import React from 'react';
import moment from 'moment';
import Emoji from '../utils/Emoji'

const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <main>
            <div className="thought-container">
                <p className="thought-text">{thought.message}</p>

        

                <div className="heart-container">
                    <div className="heart-wrapper">
                    <button className="likebutton" onClick={() => onLikesIncrease(thought._id)}>
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

export default ThoughtItem;
