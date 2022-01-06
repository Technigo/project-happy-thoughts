import React from 'react'
import moment from 'moment'

const ThoughtItem = ({thought, onLikesIncrease}) => {

    return (
        <div className="message-container">
          <div className="displayed-message">
            <p className="thought-message">{thought.message}</p>
            <p className="name-message">{thought.name}</p>
          </div>
  
          <div className="button-row">
            <div className="heart-button-wrapper">
              <button onClick = {() => onLikesIncrease(thought._id)}
                className="heart-button" style={{
                  backgroundColor: thought.hearts > 0 ? "#878DF7" : "#fbabab", 
                }}> 
                  <img src="/assets/red-heart.png" alt="red heart" className="heart"
                  ></img> 
                </button>
              <p> x {thought.hearts}</p>
            </div>
           
            <p className="date">{moment(thought.createdAt).fromNow()}</p>
          
          </div>
          
        </div>
    )
}

export default ThoughtItem